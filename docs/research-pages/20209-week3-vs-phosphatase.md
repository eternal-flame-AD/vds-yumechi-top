---
id: 20209-3-vs-phosphatase
title: Fall20-W3 VS Phosphatase
tags: ["PCR", "Dilution"]
---


import {Date, Prepared, Timestamp, Measure, BottomCaption, TopCaption, ZincImg, SmileImg } from "../../src/lab\.js"

<Date color="#1877F2">09/09/2020</Date>

## Objective

This objective of this lab is to perform a virtual screening of a slice of ChemBridge library on the active site of the YopH phosphatase.

## Methods

1. Five control ligands were selected to evaluate the quality of docking.

<TopCaption text="Table 1. Control Ligands Definition">

| Control | SDF File Name  | Compound Name           |
|---------|----------------|-------------------------|
| +       | CID1240534pos1 | [[(3aR,4R,7S,7aS)-2-(4-bromophenyl)-1,3-dioxo-7,7a-dihydro-3aH-4,7-epoxyisoindol-4-yl]-acetyloxymethyl] acetate |
| +       | CID1766712pos2 | [(3R,3aR,5R,8aR,9aR)-5,8a-dimethyl-2-oxo-3,3a,5,6,7,8,9,9a-octahydrobenzo[f][1]benzofuran-3-yl]methyl-(furan-2-ylmethyl)-[(4-methoxyphenyl)methyl]azanium |
| +       | 52941593       | [4-[3-[Difluoro(phosphono)methyl]phenyl]phenyl]methoxyazanium |
| -       | 2244           | 4-nitrophenyl phosphate |
| -       | 378            | aspirin                 |

</TopCaption>

2. Run GOLD against the control ligands. 

<details>
<summary>gold.conf (ChemPLP+GoldScore consensus scoring, GA=15)</summary>

```
  GOLD CONFIGURATION FILE

  AUTOMATIC SETTINGS
autoscale = 1

  POPULATION
popsiz = auto
select_pressure = auto
n_islands = auto
maxops = auto
niche_siz = auto

  GENETIC OPERATORS
pt_crosswt = auto
allele_mutatewt = auto
migratewt = auto

  FLOOD FILL
radius = 10
origin = 0 0 0
do_cavity = 1
floodfill_atom_no = 0
cavity_file = YI2Extracted.mol2
floodfill_center = cavity_from_ligand

  DATA FILES
ligand_data_file controls.sdf 15
param_file = DEFAULT
set_ligand_atom_types = 1
set_protein_atom_types = 0
directory = .
tordist_file = DEFAULT
make_subdirs = 0
save_lone_pairs = 1
fit_points_file = fit_pts.mol2
read_fitpts = 1
bestranking_list_filename = goldsoln_control.lst

  FLAGS
internal_ligand_h_bonds = 0
flip_free_corners = 0
match_ring_templates = 0
flip_amide_bonds = 0
flip_planar_n = 1 flip_ring_NRR flip_ring_NHR
flip_pyramidal_n = 0
rotate_carboxylic_oh = flip
use_tordist = 1
postprocess_bonds = 1
rotatable_bond_override_file = DEFAULT
solvate_all = 1

  TERMINATION
early_termination = 1
n_top_solutions = 3
rms_tolerance = 1.5

  CONSTRAINTS
force_constraints = 0

  COVALENT BONDING
covalent = 0

  SAVE OPTIONS
save_score_in_file = 1
save_protein_torsions = 1
concatenated_output = goldsoln_control.sdf
clean_up_option delete_all_solutions
clean_up_option save_top_n_solutions 10
#clean_up_option save_best_ligands 5
clean_up_option delete_redundant_log_files
clean_up_option delete_all_initialised_ligands
clean_up_option delete_empty_directories
clean_up_option delete_all_log_files
output_file_format = MACCS

  FITNESS FUNCTION SETTINGS
initial_virtual_pt_match_max = 3
relative_ligand_energy = 1
gold_fitfunc_path = consensus_score
start_vdw_linear_cutoff = 6
score_param_file = DEFAULT
docking_fitfunc_path = plp
docking_param_file = DEFAULT
rescore_fitfunc_path = goldscore
rescore_param_file = DEFAULT

  PROTEIN DATA
protein_datafile = 2Y2F_protein.mol2
```
</details>

<details><summary>rms_calc.sh</summary>

```bash
#!/bin/bash


obabel $1 -o txt | cut -d'|' -f 1,2,3,4 | uniq > mols.txt || exit 1
curIdx=1

while read p; do
        let curEnd=curIdx+9
        echo "curIdx is ${curIdx}, curEnd is ${curEnd}"
        obabel $1 --filter "title=\"${p}|*\""  -O out.sdf
        obabel -m out.sdf -O out_split.sdf
        let curIdx=curIdx+$(ls out_split*.sdf | wc -l)
        ~/CCDC/Discovery_2020/bin/rms_analysis -method group_average out_split*.sdf | tail -n 1 >> results.txt
        rm ./*.sdf
done < mols.txt
```
</details>

3. Run GOLD against the sliced library. (Workspace compiled with [batch-vs-runner](https://github.com/eternal-flame-AD/batch-vs-runner) for parallel processing)

<details><summary>gold.conf.tpl (ChemPLP+GoldScore consensus scoring, GA=15)</summary>

```
  GOLD CONFIGURATION FILE

  AUTOMATIC SETTINGS
autoscale = 1

  POPULATION
popsiz = auto
select_pressure = auto
n_islands = auto
maxops = auto
niche_siz = auto

  GENETIC OPERATORS
pt_crosswt = auto
allele_mutatewt = auto
migratewt = auto

  FLOOD FILL
radius = 10
origin = 0 0 0
do_cavity = 1
floodfill_atom_no = 0
cavity_file = YI2Extracted.mol2
floodfill_center = cavity_from_ligand

  DATA FILES
ligand_data_file job.sdf 15
param_file = DEFAULT
set_ligand_atom_types = 1
set_protein_atom_types = 0
directory = .
tordist_file = DEFAULT
make_subdirs = 0
save_lone_pairs = 1
fit_points_file = fit_pts.mol2
read_fitpts = 1
bestranking_list_filename = goldsoln_from{{ .CumulativeStartIdx }}_to{{ .CumulativeEndIdx }}.lst

  FLAGS
internal_ligand_h_bonds = 0
flip_free_corners = 0
match_ring_templates = 0
flip_amide_bonds = 0
flip_planar_n = 1 flip_ring_NRR flip_ring_NHR
flip_pyramidal_n = 0
rotate_carboxylic_oh = flip
use_tordist = 1
postprocess_bonds = 1
rotatable_bond_override_file = DEFAULT
solvate_all = 1

  TERMINATION
early_termination = 1
n_top_solutions = 3
rms_tolerance = 1.5

  CONSTRAINTS
force_constraints = 0

  COVALENT BONDING
covalent = 0

  SAVE OPTIONS
save_score_in_file = 1
save_protein_torsions = 1
concatenated_output = goldsoln_from{{ .CumulativeStartIdx }}.sdf
clean_up_option delete_all_solutions
clean_up_option save_top_n_solutions 10
#clean_up_option save_best_ligands 5
clean_up_option delete_redundant_log_files
clean_up_option delete_all_initialised_ligands
clean_up_option delete_empty_directories
clean_up_option delete_all_log_files
output_file_format = MACCS

  FITNESS FUNCTION SETTINGS
initial_virtual_pt_match_max = 3
relative_ligand_energy = 1
gold_fitfunc_path = consensus_score
start_vdw_linear_cutoff = 6
score_param_file = DEFAULT
docking_fitfunc_path = plp
docking_param_file = DEFAULT
rescore_fitfunc_path = goldscore
rescore_param_file = DEFAULT

  PROTEIN DATA
protein_datafile = 2Y2F_protein.mol2
```
</details>

<details><summary>rms_calc.sh</summary>

```bash
#!/bin/bash


obabel $1 -o txt | cut -d'|' -f 1,2,3,4 | uniq > mols.txt || exit 1
curIdx=1

while read p; do
        let curEnd=curIdx+9
        echo "curIdx is ${curIdx}, curEnd is ${curEnd}"
        obabel $1 --filter "title=\"${p}|*\""  -O out.sdf
        obabel -m out.sdf -O out_split.sdf
        let curIdx=curIdx+$(ls out_split*.sdf | wc -l)
        ~/CCDC/Discovery_2020/bin/rms_analysis -method group_average out_split*.sdf | tail -n 1 >> results.txt
        rm ./*.sdf
done < mols.txt
```
</details>

4. Collect results, plot out calculated RMSd between solutions and output score.

    [Full result (xlsx)](/download/20209-3-vs-phosphatase-results.xlsx)

    <BottomCaption text="Fig 2: Scatter plot of ChemPLP Fitness Score vs. RMSd between solutions for each ligand. Positive controls indicated with yellow dots, negative controls indicated with grey dots.">

    ![](/img/20209-3-vs-phosphatase-RMSd_plot.jpg)

    </BottomCaption>

    From this plot we can observe that:
    1. Positive controls all scored significantly higher than the negative controls, indicating a good accuracy on the prediction.
    2. RMSd-to-score correlation was hard to conclude for control ligands, but 2/3 of the positive controls has excessively high RMSd, indicating a low reliability on the prediction.
    3. RMSd-to-score correlation on the experiment group was positive, indicating a low reliability on the prediction.
    4. The placement of the experiment ligands were mostly close to the negative controls, indicating that no particularly interesting potential binders were found in this experiment.

<details>
<summary>

# Required Extra Tables & Figures

</summary>

<TopCaption text="Table 2. GOLD scores for top 10 novel ligands + 5 controls">

| Ligand | Image | Score | S(PLP) | S(hbond)| S(metal) | DE(clash) | DE(tors) | intcor |
|---        |---    |---     |--- |--- |--- |--- |--- |
|ZINC02831197|<ZincImg id="02831197" />|91.37|-58.36|12.47|0|0|1.11|2.2|
|ZINC12244440|<ZincImg id="12244440" />|85.21|-82.14|2|0|0|4.87|1.37|
|ZINC71752759|<ZincImg id="71752759" />|81.28|-66.48|5.79|0|0|0|2.02|
|ZINC14542938|<ZincImg id="14542938" />|80.79|-81.42|0.99|0|0|0|3.01|
|ZINC11697932|<ZincImg id="11697932" />|80.55|-78.55|1|0|0|0|1.89|
|ZINC12588355|<ZincImg id="12588355" />|79.2|-74.67|2.18|0|0|0|2.42|
|ZINC82107749|<ZincImg id="82107749" />|79.09|-74.09|2.52|0|0|0|3.03|
|ZINC12191733|<ZincImg id="12191733" />|78.86|-81.79|0|0|0|0.16|1.84|
|ZINC12244438|<ZincImg id="12244438" />|78.8|-76.38|1.94|0|0|0|2.33|
|ZINC20864536|<ZincImg id="20864536" />|77.3|-73.85|0.77|1|0|3.12|1.43|

| Ligand | Image | Score | S(PLP) | S(hbond)| S(metal) | DE(clash) | DE(tors) | intcor |
|---        |---    |---     |--- |--- |--- |--- |--- |
CID1240534pos1|<SmileImg smiles="CC(=O)OC([C@]12C=C[C@H](O1)[C@@H]3[C@H]2C(=O)N(C3=O)C4=CC=C(C=C4)Br)OC(=O)C"/>|133.79|-126.4|3.65|0|0|1652.47|7.2|1663.31
CID1766712pos2|<SmileImg smiles="C[C@@H]1CCC[C@]2(C1=C[C@H]3[C@@H](C2)OC(=O)[C@H]3C[NH+](CC4=CC=C(C=C4)OC)CC5=CC=CO5)C"/>|99.35|-86.97|4.22|0|0|1012.7|0.86|1014.14
2244|<SmileImg smiles="CC(=O)OC1=CC=CC=C1C(=O)O" />|44.93|-28.91|5.68|0|0|0|0.51|0
378|<SmileImg smiles="C1=CC(=CC=C1[N+](=O)[O-])OP(=O)(O)O" />|59.32|-33.75|8.8|0|0|0|0.46|0.08
52941593|<SmileImg smiles="C1=CC(=CC(=C1)C(F)(F)P(=O)(O)O)C2=CC=C(C=C2)CO[NH3+]" />|85.04|-63.44|8.59|0|0|0.29|2.18|0.48

</TopCaption>

<TopCaption text="Table 3. Linpski's Rule Data for top 10 Novel Ligands and Controls">

| Name | Image | LogP | Hacc | Hdon | Mol Weight |
|--- | ---| --- |--- |--- |--- |
|ZINC02831197|<ZincImg id="02831197" />| 1.845 | 9 | 0 | 442.582 |
|ZINC12244440|<ZincImg id="12244440" />| 4.648 | 7 | 1 | 479.65 |
|ZINC71752759|<ZincImg id="71752759" />| 4.273 | 3 | 1 | 389.442 |
|ZINC14542938|<ZincImg id="14542938" />| 5.428 | 4 | 2 | 492.623 |
|ZINC11697932|<ZincImg id="11697932" />| 2.717 | 5 | 1 | 378.411 |
|ZINC12588355|<ZincImg id="12588355" />| 2.695 | 5 | 3 | 442.604 |
|ZINC82107749|<ZincImg id="82107749" />| 3.849 | 2 | 0 | 356.51 |
|ZINC12191733|<ZincImg id="12191733" />| 2.457 | 5 | 2 | 423.492 |
|ZINC12244438|<ZincImg id="12244438" />| 5.512 | 6 | 0 | 471.964 |
|ZINC20864536|<ZincImg id="20864536" />| 3.613 | 6 | 1 | 386.411 |
|CID1240534pos1|<SmileImg smiles="CC(=O)OC([C@]12C=C[C@H](O1)[C@@H]3[C@H]2C(=O)N(C3=O)C4=CC=C(C=C4)Br)OC(=O)C"/>|1.2 | 7 | 0 | 450.2 |
|CID1766712pos2|<SmileImg smiles="C[C@@H]1CCC[C@]2(C1=C[C@H]3[C@@H](C2)OC(=O)[C@H]3C[NH+](CC4=CC=C(C=C4)OC)CC5=CC=CO5)C"/>|5.8 | 4 | 1 | 450.6 |
|2244|<SmileImg smiles="CC(=O)OC1=CC=CC=C1C(=O)O" />|1.2 | 4 | 1 | 180.16 |
|378|<SmileImg smiles="C1=CC(=CC=C1[N+](=O)[O-])OP(=O)(O)O" />| 0.3 | 6 | 2 | 219.09 |
|52941593|<SmileImg smiles="C1=CC(=CC(=C1)C(F)(F)P(=O)(O)O)C2=CC=C(C=C2)CO[NH3+]" />| -1.1 | 6 | 3 | 330.24 |

</TopCaption>

<BottomCaption text="Fig 4.a. PyMOL representation of the GOLD-predicted binding pose for the 1st-highest-scoring ligand (ZINC02731197). Polar contacts between ligand and receptor were indicated with yellow dashes.">
    <img src="/img/20209-3-vs-phosphatase-best_1.jpg" />
</BottomCaption>
<BottomCaption text="Fig 4.b. PyMOL representation of the GOLD-predicted binding pose for the 2nd-highest-scoring ligand (ZINC12244440). Polar contacts between ligand and receptor were indicated with yellow dashes.">
    <img src="/img/20209-3-vs-phosphatase-best_2.jpg" />
</BottomCaption>

</details>

# Discussion

This looks like a pretty typical dock with no good candidates found. This is expected because only 1000 candidates were screened. 

If I were asked to make more adjustments to improve results quality, I might consider the following:
- Find more positive controls and include them in the control dock. The current 3 positive controls are not enough to draw a confident conclusion on the quality of the dock run.
- Negative controls should have properties that resemble positive controls more. Consider using DUD(e) to generate negative controls.
- Consider docking with a different fitness function. The positive RMSd-to-score correlation indicates that the current fitness function is not outputting stable results for this protein+ligand combination.

