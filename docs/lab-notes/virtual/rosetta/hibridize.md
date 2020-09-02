---
id: thread-then-hibridize
title: Thread and hibridize model from homologys
---

## Threading with RosettaCM

See RosettaCommons

The alignment can be done on CrystalOmega.
:::note
First 5 letters of alignment fasta must match input name.
:::

## Threading (manually)
```
# i/o
#-nstruct 20
#-parser:protocol rosetta_cm.xml
-in:file:s model

# relax options
-relax:dualspace
-relax:jump_move true
-default_max_cycles 200
-beta_cart
-hybridize:stage1_probability 1.0

-ex1
-ex2
```
```xml
<ROSETTASCRIPTS>
    <TASKOPERATIONS>
    </TASKOPERATIONS>
    <SCOREFXNS>
    </SCOREFXNS>
    <FILTERS>
    </FILTERS>
    <MOVERS>
        <SwitchResidueTypeSetMover name="to_centroid" set="centroid" />
        <SimpleThreadingMover name="thread_22" pack_neighbors="true"
            start_position="24A"
            thread_sequence="ILAYDHGIEHGP" />
        <SimpleThreadingMover name="thread_173" pack_neighbors="true"
            start_position="173A"
            thread_sequence="FPRGGKVVNETAPE" />
        <SimpleThreadingMover name="thread_197" pack_neighbors="true"
            start_position="197A"
            thread_sequence="RIALELGADAMKIKYT" />
        <SimpleThreadingMover name="thread_228" pack_neighbors="true"
            start_position="173A"
            thread_sequence="VAGK---VPVLMSGGPK--TEEDFLKQVEGV--AGALGIAVGRNVWQRRD" />
	</MOVERS>
    <APPLY_TO_POSE>
    </APPLY_TO_POSE>
    <PROTOCOLS>
        Add mover="to_centroid" 
	<Add mover="thread_22" />
	<Add mover="thread_173" />
	<Add mover="thread_197" />
	<Add mover="thread_228" />
    </PROTOCOLS>
</ROSETTASCRIPTS>
```


## Hibridizing
```
# i/o
#-nstruct 20
-in:file:s initial_pose.pdb
-parser:protocol hybridize.xml

# relax options
-relax:dualspace
-relax:jump_move true
-default_max_cycles 200
-beta_cart
-hybridize:stage1_probability 1.0

-ex1
-ex2

-ignore_zero_occupancy false
-extra_res_cen FBP.cen.params
-extra_res_fa FBP.fa.params
-extra_improper_file FBP.fa.tors
```
```xml
<ROSETTASCRIPTS>
    <TASKOPERATIONS>
    </TASKOPERATIONS>
    <SCOREFXNS>
        <ScoreFunction name="stage1" weights="score3" symmetric="0">
            <Reweight scoretype="atom_pair_constraint" weight="0.1"/>
        </ScoreFunction>
        <ScoreFunction name="stage2" weights="score4_smooth_cart" symmetric="0">
            <Reweight scoretype="atom_pair_constraint" weight="0.1"/>
        </ScoreFunction>
        <ScoreFunction name="fullatom" weights="beta_cart" symmetric="0">
            <Reweight scoretype="atom_pair_constraint" weight="0.1"/>
        </ScoreFunction>
    </SCOREFXNS>
    <FILTERS>
    </FILTERS>
    <MOVERS>
        <Hybridize name="hybridize" stage1_scorefxn="stage1" stage2_scorefxn="stage2" fa_scorefxn="fullatom" batch="1" stage1_increase_cycles="1.0" stage2_increase_cycles="1.0" add_hetatm="1">
			<Template pdb="1W8S__thread.pdb" cst_file="AUTO" weight="1.0" />
			<Template pdb="5U7S__thread.pdb" cst_file="AUTO" weight="0.0" />
			<DetailedControls start_res="24" stop_res="31" sample_template="0" />
			<DetailedControls start_res="173" stop_res="180" sample_template="0" />
			<DetailedControls start_res="197" stop_res="207" sample_template="0" />
			<DetailedControls start_res="228" stop_res="258" sample_template="0" />
        </Hybridize>
    </MOVERS>
    <APPLY_TO_POSE>
    </APPLY_TO_POSE>
    <PROTOCOLS>
        <Add mover="hybridize"/>
    </PROTOCOLS>
</ROSETTASCRIPTS>
```