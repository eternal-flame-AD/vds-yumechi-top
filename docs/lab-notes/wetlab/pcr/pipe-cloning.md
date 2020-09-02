---
id: pipe-cloning
title: PIPE Cloning PCR
tags: ["PCR", "Dilution"]
---

import {Date, Prepared, Timestamp, Measure} from "../../../../src/lab\.js"

## Objective

The objective of this procedure is to prepare and run a PIPE cloning procedure.

PIPE cloning includes:
- Vector-PIPE that is used to generate the **Accepting Vector** (the cut-out piece of the backbone)
- Insert-PIPE that is used to generate the **Gene Insert**.


## Mixture

Final Volume: <Measure unit="ul"> 25 </Measure> adjust if needed.


| Content | Amount |  V-PIPE specifics | I-PIPE specifics|
| --- |---| --- |--- |
|Template| <Measure unit="ng">2.5</Measure> | plasmid backbone | gBLOCK (new method for Fall20) |
| x5 Q5 Buffer|<Measure unit="ul">5</Measure> | common| common|
| Q5 Poly|<Measure unit="ul">0.125</Measure> @ <Measure unit="U/ml">2,000</Measure>| common | common|
| dNTP | <Measure unit="ul">0.5</Measure> @ <Measure unit="mM">10</Measure> | common | common|
| Forward Primer|<Measure unit="ul">1.25</Measure> @ <Measure unit="uM"> 10</Measure>| common | common|
| Reverse Primer|<Measure unit="ul">1.25</Measure> @ <Measure unit="uM"> 10</Measure>| common | common|
| ddH2O |<Measure unit="ul">15</Measure>| common | common|

:::note
Q5 Poly amount is too small so a 1:4 dilution with ddH2O was done to make pipetting more accurate.
:::

## Thermal Cycling

### V-PIPE Cycle: 

1. Initial Denaturing:  <Measure unit="s">30</Measure> @ <Measure unit="degC">98</Measure>
2. Repeat for 25x cycles:
    1. Denaturing: <Measure unit="s">30</Measure> @ <Measure unit="degC">98</Measure>
    1. Annealing: <Measure unit="s">45</Measure> @ <Measure unit="degC">55</Measure>
    1. Elongation: <Measure unit="m">3.5</Measure> @ <Measure unit="degC">72</Measure>
1. <Measure unit="degC">4</Measure> for ever.

### I-PIPE Cycle:

1. Initial Denaturing:  <Measure unit="s">30</Measure> @ <Measure unit="degC">98</Measure>
2. Repeat for 25x cycles:
    1. Denaturing: <Measure unit="s">30</Measure> @ <Measure unit="degC">98</Measure>
    1. Annealing: <Measure unit="s">30</Measure> @ <Measure unit="degC">(Tm - 5)</Measure>
    1. Elongation: <Measure unit="s/kb">30</Measure> @ <Measure unit="degC">72</Measure>
1. <Measure unit="degC">4</Measure> for ever.