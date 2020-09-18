---
id: pymolrc
title: My .pymolrc file
---

## Objective

This is a running record of my pymolrc file to extend pyMOL functionalities by adding shortcuts that
I like to use or to facitilate automation of some repetitive VDS work.

## Features

- Adjust rendering mode to "modern" - fancier graphics.
- Load object properties (like GOLD results) by default.
- Extended commands:
  - `stereoize` use anaglyph stereo and adjust background to grey for better depth perception.
  - `mkactive` shortcut for `around -> byres -> & protein` selector chain for "make a selection of active sites" like questions.
  - `mkpolconts` shortcut for `find polcont, prot, lig, mode=2` for "find the polar contacts between ligand and protein" questions, also counts polar contacts for you.
  - `split_prot_by_aa_type` for making protein selections based on AA types (hyfo, pol, etc.)
  - `label_ca` shortcut for labeling carbon alpha atoms with `resn + resi`

## TODO

- Ray tracing with RPC (something like send viewport to remote PyMOL server, ray, download image).
- Extended commands:
  - `gold_score` parse gold scores from gold solution file.
  - `desc_iface` single-command solution for describing a molecule-molecule interface. (Pre-initialized scenes of polar contacts, interface residues, etc.)

## pymolrc.pml code

import Gist from "react-gist"

<Gist id="06051631b7fef05a678bfc05c7ea045e" />