---
id: convenient-scripts
title: GOLD Convenient Scripts
---


## Append filename to gold soln files
```bash
#!/bin/bash

echo "File      Score     S(PLP)   S(hbond)     S(cho)   S(metal)  DE(clash)   DE(tors)     intcor     time                               File name                Ligand name"
for var in "$@"; do
    fn=${var%.lst}
    fn=${fn##*/}
    while read p; do
         if [[ $p == *"gold_soln"* ]]; then
            echo "${fn}     ${p}"
        fi
    done < $var
done
```