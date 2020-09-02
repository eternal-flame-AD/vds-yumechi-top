---
id: mutate-single-residue
title: Mutate single residue with rosetta
---

```
-parser:protocol protocol.xml \
-in:file:s job.pdb \
-ex1 \
-ex2 \
-overwrite \
-restore_talaris_behavior \
-nstruct 3 \
-out:sf score.txt
```
```xml
<ROSETTASCRIPTS>
    <SCOREFXNS>
    </SCOREFXNS>
    <RESIDUE_SELECTORS>
        <Index name="res" resnums="118" />
        <Neighborhood name="resaround" selector="res" distance="3"/>
    </RESIDUE_SELECTORS>
    <PACKER_PALETTES>
    </PACKER_PALETTES>
    <TASKOPERATIONS>
    </TASKOPERATIONS>
    <MOVE_MAP_FACTORIES>
        <MoveMapFactory name="movemap" bb="true" chi="true">
            <Backbone residue_selector="res" />
            <Chi residue_selector="res" />
        </MoveMapFactory>
    </MOVE_MAP_FACTORIES>
    <SIMPLE_METRICS>
    </SIMPLE_METRICS>
    <FILTERS>
    </FILTERS>
    <MOVERS>
        <MutateResidue name="mut" target="118A" new_res="HIS" />
        <FastRelax name="relax" scorefxn="talaris2014" movemap_factory="movemap"/>
    </MOVERS>
    <PROTOCOLS>
        <Add mover="mut" />
        <Add mover="relax" />
    </PROTOCOLS>
    <OUTPUT />
</ROSETTASCRIPTS>
```