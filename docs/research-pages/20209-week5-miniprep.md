---
id: 20209-5-miniprep
title: Fall20-W5 Miniprep
tags: ["Miniprep"]
---

import {Date, Measure, BottomCaption, TopCaption } from "../../src/lab\.js"


<Date color="#1877F2">09/21/2020</Date>

## Objective

Miniprep is for extracting plasmids from cells. By lysing the cell and then filtering out
contaminants with digestion or precipitation, ideally we will get a relatively clean plasmid mixture.


## Methods

### Miniprep
1. Refer to the [manufacturer's website](https://www.sigmaaldrich.com/content/dam/sigma-aldrich/docs/Sigma/Bulletin/pln70bul.pdf)
    for miniprep process protocol.

### Validation and Quality Control

#### Nanodrop

Firstly, the miniprep product was ran on nanodrop to estimate its DNA content and purity with
spectrometrically. 

<TopCaption text="Table 1. Nanodrop report on miniprep product.">

|Sample ID | Nucleic Acid|Unit|A260 (Abs)|A280 (Abs)|260/280|260/230|Sample Type|Factor|
| --- | --- | --- |---| ---| ---| ---| ---|
|pNICBsa4-MF-A|54.3|ng/µl|1.086|0.814|1.34|0.78|DNA|50|
|pNICBsa4-MF-B|48.4|ng/µl|0.967|0.638|1.52|0.92|DNA|50|

</TopCaption>

Ideally A260/A280 should be within 1.7-1.9, per menufacturer's instructions.
However, both sample showed a ratio lower than expected, indicating the presense
of RNA or ssDNA contamination in the sample.

#### Agarose gel

An agarose gel was ran on the miniprep product the next week (week 6) to
evaluate the purity of the extraction product. 

<BottomCaption text="Fig. 1.a. Gel image for miniprep and V-PIPE product. Ldr=1kb ladder (New England Biolanbs(R)). VP=VPIPE. SA=Miniprep sample A. SB=Miniprep sample B.">
    <img src="/img/20209-5-miniprep-gel.JPG" />
</BottomCaption>

For V-PIPE sample, there is only one band and the size is also in the expected region (5kb ~ 6kb). Inis indicates that there is no significant DNA contamination and
the DNA is approximately the expected length.

For Miniprep sample A, no band was observed.

For Miniprep sample B, two bands were observed, the lower band was of expected position (5kb to 6kb), the upper band is over 10 kb in terms of positioning.

#### Sequencing

Additionally, the sample was sent to DNA sequencing facility to confirm that there the plasmid
is complete and there is no precense of unexpected mutations.
Results are pending.

## Results

From the gel electrophoresis results, we (1) confirmed the presence of the V-PIPE product of expected size. (2) confirmed the presense of Miniprep sample B
of expected size.

## Discussion

### No band in sample A

This is really unexpected since we do get product in sample B. 
Since sample A and sample B were taken from differenct cultures, it is possible that there is no presence of significant bacteria in culture A anyways.

Another possible exaplanation would be failure in carrying out some procedures, such as failing to transfer the liquid to/from the column correctly, etc.

### Double band in sample B

One possible exaplanation would be the presence of secondary structures in some DNA segments may cause them to migrate in gel slower than normal.

Another explanation would be some genome DNA are fractured and thus ended up in the elution.
