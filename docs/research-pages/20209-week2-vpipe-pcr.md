---
id: 20209-2-vpipe-pcr
title: Fall20-W2 V-PIPE PCR
tags: ["PCR", "Dilution"]
---


import {Date, Prepared, Timestamp, Measure} from "../../src/lab\.js"

<Date color="#1877F2">09/01/2020</Date>

## Objective

This objective of this lab is to clone the accepting vector (backbone portion) of a recombinant plasmid using PCR.

## Methods
1.  [Primer Dilution](/docs/lab-notes/wetlab/pcr/primer-dilution) for forward and reverse primers.

    1. Dilute forward and reverse primer to stock solution.

        <Prepared color="#f3713a"/>
        
        The primers were diluted to <Measure unit="um">100</Measure> stock solution with Tris.

    2. Dilute stock solutions into working solution.

        <Timestamp color="#25c2a0">17:46</Timestamp>

        The primers were diluted to <Measure unit="um">10</Measure> working solution.
        
        Amount of working solution required for each primer:
        3 replicas * <Measure unit="ul">1.25</Measure> = <Measure unit="ul">3.75</Measure>

        Thus, <Measure unit="ul">5</Measure> of working solution was prepared by diluting <Measure unit="ul">.5</Measure> stock solution to <Measure unit="ul">5</Measure> with ddH2O.



2. [Vector-PIPE PCR](/docs/lab-notes/wetlab/pcr/pipe-cloning)

    
    
    Vector-PIPE PCR was used to create the Accepting Vector for the gene insert. Its primer pair match the 3' downstream ends of the cloning site with a sticky end. So the PCR product would be the plasmid backbone with the cloning site replaces with sticky ends so our gene inserts can be later added.
    
    1. <Timestamp color="#25c2a0">18:08</Timestamp> Prepare 3 V-PIPE PCR mixtures (<Measure unit="ul">25</Measure> per tube). 
    
        See [Lab Note Protocol](/docs/lab-notes/wetlab/pcr/pipe-cloning#Mixture) for recipe.
        :::note
        3 Replicates were prepared to mitigate possible pipetting error causing no usable product produced.
        :::
    2. <Timestamp color="#25c2a0">19:48</Timestamp> Run V-PIPE cycle. 
    
        See [Lab Note Protocol](/docs/lab-notes/wetlab/pcr/pipe-cloning#v-pipe-cycle) for details.


## Results

Not yet available. Confirm DNA concentration with nanodrop?

## Discussions

### Sources of Error

#### Preparing Phase

The biggest source of error would be external DNA contamination. Preventive measures would include:
- Wearing gloves and eye goggles to prevent keratin contamination.
- Capping the PCR tube when talking or doing other procedures.

Another source of error would be failing to pipette one of the substances to the PCR mixture. In my past experience in preparing PCR mixture, my supervisor told me since the volume were so small, it is important to visually see that their is liquid being sucked up and the liquid is no longer there after taking the pipette out of the PCR tube.

#### Running Phase

Using non-hot-start polymerase may cause the reaction to start even before the sample was put into the thermal cycler. This may cause some issues such as the existence of primer dimers and other undesired produces. 

There might be some overshoot/overshoot in temperature due to the thermal mass between the PCR mixture and the block on the PCR cycler. Though some PCR cycler can estimate this difference and adjust the block temperature accordingly, there may still be error between what what temperature was programmed on the thermal cycler and what the temperature of the mixture really was.

### Next Steps

After the PCR cycle, the first step would be to confirm whether the desired product was produced. A read on nanodrop can determine the concentration of DNA and RNA/protein contamination (A260/A280). Afterwards, a DNA gel can be run to confirm and purify product of the expected size.
