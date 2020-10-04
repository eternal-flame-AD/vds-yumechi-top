---
id: 20209-6-obspectrophore
title: Fall20-W6 Spectrophores (TM)
tags: ["OpenBabel","Virtual Screening", "ML"]
---

## Objective

When docking extra-large libraries, there may be a lot of occurences of similar molecules within the library.

Thus, it may be beneficial to first cluster the library and do a preliminary scan by docking samples from each cluster to predict
the overall competence of each cluster to the receptor without having to dock every single ligand in the library. Then, clusters
with poor performances can be excluded from the dock while good libraries will be docked in full in order to find the best-performing molecule
in the cluster.

Generally speaking, when the library is very large compared to the available computational resource,
we are not expecting to put every molecule through the screening stage. Thus, there will be a problem of
which molecule to dock and which to skip. For this problem there are several solutions that I want to discuss:

0. The most obvious is a naive random selection - say we only dock 50% of the library by random choice. In theory we would also
only get 50% of the hits as result.

To get more than 50% of the hits with only 50% of the CPU time, there are several heuristic methods available:

1. Only dock molecules with matching pharmacophore features. 
This is a very good method to use and I have seen many papers using this method. Generally the idea is to use researcher's input
to filter out clearly unsuitable ligands.
The general idea of this approach is that: in the end the good matches will have most of the desired pharmacophore points
that the receptor wants, thus we can first exclude molecules that simpley can't satisfy these constraints geometrically.
This approach is good in that it is very fast and very accurate as long as the prediction is good. However, when
a clear pharmacophore point in the receptor can not be determined confidently (complex receptor, multiple binding modes, etc),
this method can be hard to implement.

2. A "quick" dock followed by a "slow" dock for top hits.
Generally speaking, I don't see this method as significantly better than naive random selection. The main problem is,
docking program score poses strictly on molecular mechanics (or similar ways). Thus, the scoring function is usually very strict (in a sense of 1 to 2 angstroms)
in that a small deviation from the "ideal" pose may lead to a significant score loss (may not be better than random at all). 
(Well to verify this, we can write a program that does some small transformation on the ligand and send the new pose to GOLD
score function and see how much the score has changed.) Another problem is a "quick" dock does not come for free either. A simple math: let's say the "quick" dock takes 20% of the CPU time than the "slow" dock. 
(pretty generous, normally you wouldn't expect this much a speed boost)
That means, if our CPU time budget is enough for docking 50% percent of ligands in "slow" mode, after the "quick" dock we can only do 30% of the ligands. In other words,
in order to "earn back" the CPU time we lost for the preliminary dock, it at least need to provide almost twice the selectivity compared to random to merely
come in equal with the naive solution.

To give some numbers to back my hypothesis:

GOLD is not open-source so I can't say much about GOLD, but for VINA, the energy well for VINA is (from VINA paper):
(1) 1.0 A for hydrophobic terms
(2) 0.7 A for H bonds
If the monte-carlo search can't hit inside this well,
it won't be accepted as a possible pose, thus, we will miss the pose and, unless their is another good binding pose enough to let
this molecule stand out, this molecule will be excluded from the search.So I dug into the source of VINA and looked at their implementation of "exhaustiveness", basically it simply indicates how many repeats should
the monte carlo search be done. Every time the search tries to shift the molecule by 2 A (from VINA source code). So a rough estimate for the 
sampling accuracy for the default exhaustiveness 8 would be 0.5 A. Halfing this value would be have the CPU time but half the probability of discovering a pose (since the step would be larger
than the energy well). Which defeats the purpose of a heuristic screening.

My proposal is to make the scale of the ligands smaller by clustering them into bins and only sample results from the bins.
The general idea is, molecules with similar 3D characteristics should behave similarly in screening. Thus, by taking samples from
a cluster of closely-related molecules, we can predict the approximate performance of this group of molecules has we docked all of them.
In this way, we can exclude groups of molecules that are unlikely to success (multile samples from the bin behaved poorly).



## Methods (Work In Progress)

### Preparation for library (once per library)

1. Generate spectrophore(TM) information of each molecule with [OpenBabel - obspectrophore application](https://openbabel.org/docs/dev/Fingerprints/spectrophore.html).

    This should be a relatively quick process (<30 mins on a single KNL node for my 13 million ZINC library).

    It will reduce the whole 3-D structure into a 48-dimension vector by considering molecular features such as shape,
    lipophilicity, electrophilicity, etc. (see obspectrophore page for details)
    These properties that are meaned to be reduced to a vector just happens to be important variables to consider in virtual screening, namely:
    - Shape of molecule
    - Magnitude and positioning of features
    - Surface area

    Thus, I predict that molecules that produce similar results in obspectrophore should get similar results in virtual screening.

### Clustering

2. Train a K-Means model to sort the ligands into clusters besed on obtained spectrophore vectors.

    For this part I custom-coded a K-means implementation to run fast enough on KNL by utilizing AVX512 instructions.
    Algorithm Reference: http://cs229.stanford.edu/notes/cs229-notes7a.pdf

    This is a relatively easy-to-implement and robust clustering algorithm in ML.
    
    For my 13 million library, I set the algorithm to make 50k bins, the algorithm converged after 50 cycles (~80hrs of total
    computation on a single KNL node).

    The model reusable in theory as long as the number of bins stays the same, have not tested this in the context of molecular clustering.

3. Evaluate the model on all ligands.

    This is (almost) equiv to a cycle of training in terms of computational complexity. (Thus, <2h for my 13m library on a single KNL node)


### Evaluation

4. Scan through the library with desired virtual screening method by taking (k) samples randomly from each of the cluster.

5. Exclude clusters that does not perform well. Multiple methods, simpliest one would be to just take the average of each cluster samples
and exclude low scores. Alternatively, if the correlation is really strong, an statistical inference can be done to confidently say some cluster
are unlikely to "success" just based on the sample.

6. Dock every single molecule in the selected clusters to find best candidate(s).


## Discussion

I am planning on carrying out an evaluation on this. I have done some preliminary non-direct ways and sort of saw some good indicators. The next steps to verify these methods are:

(1) Statistically speaking, how much inference can we make on these clusters just based on limited sampling? (a.k.a. how much deviation in score within a cluster) comparatively easy to verify
(2) A controlled docking. Basically: take some known inhibitors that the docking software can perform well on. Mix them into the bins. Run it through the algorithm. Calculate  (Selectivity %) / (CPU Time %) = f(p%) = (% of ligands in first p% bins) / (p%).
I expect a ratio of at least 3 (3 times more controls selected than random) in a consider portion of 0% < p% < 50% to say using this method is worth the effort.
