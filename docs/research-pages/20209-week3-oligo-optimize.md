---
id: 20209-3-oligo-optimize
title: Fall20-W3 Oligo and gBlocks Design
tags: ["Oligonucleotide", "PCR", "gBLOCK", "DNA", "codon"]
---


import {Date, Prepared, Timestamp, Measure, BottomCaption, TopCaption} from "../../src/lab\.js"

<Date color="#1877F2">09/11/2020</Date>

# Oligo Primers Design (DNAWorks)

## Objective

The objective of designing oligo primers is to come up with a batch of short primers that
when put together in a single PCR reaction, they will anneal to each other and extend to the full
stretch of the DNA sequence we want to produce.

## Methods

<details><summary>DNAworks-input.inp</summary>

```
timelimit 3600
melting low 62 tolerance
length 60
frequency threshold 10
concentration oligo 1E-7 sodium 0.05 magnesium 0.002
solutions 1

codon ecoli2

protein
  MALVSLRQLL DHAAEHGYGL PAFNVNNLEQ VRAVMEAADK VNSPVILQGS
  AGARKYAGAS FIRHLVLAAI EEYPHIPVCM HQDHGTSPSV CQRSIQLGFS
  SVMMDGSLKS DGKTPADYEY NVNVTKTVSD MAHACGVSVE GELGCLGSLE
  TGQAGEEDGI GAEGTLSMDQ LLTDPEEAAD FVRRTKVDAL AIAIGTSHGA
  YKFTKPPTGD VLSIKRVKEI HARIPDTHLV MHGSSSVPQD WLEVINTYGG
  AMGETYGVPV EEIVEAIKYS VRKINIDTDL RMAATGAIRR FLAENPAEFD
  PRKYNAVAKA AMSEICAARY EAFGSAGMAS KIKPISLEIM FQRYESGELD
  PIVKX
//
```

</details>

:::note
Use an `X` in protein sequence to denote a stop codon
:::

<details><summary>DNAworks-log.txt</summary>


```
--------------------------------------------------------------------------------
|               HPC @ NIH -- Center for Information Technology                 |
|                             https://hpc.nih.gov                              |
|   National Institutes of Health, Department of Health and Human Services     |
|                                                                              |
|         DNAWorks Web Site: https://hpcwebapps.cit.nih.gov/dnaworks           |
--------------------------------------------------------------------------------
|                                                                              |
|               Send all correspondence to webtools@hpc.nih.gov                |
--------------------------------------------------------------------------------

 Job started on 09/11/2020 at 17:38:01
 
      SEQUENCE  1: PROTEIN LENGTH =  355                               
 ----------------------------------------------------------------
   1 MALVSLRQLLDHAAEHGYGLPAFNVNNLEQVRAVMEAADKVNSPVILQGSAGARKYAGAS
  61 FIRHLVLAAIEEYPHIPVCMHQDHGTSPSVCQRSIQLGFSSVMMDGSLKSDGKTPADYEY
 121 NVNVTKTVSDMAHACGVSVEGELGCLGSLETGQAGEEDGIGAEGTLSMDQLLTDPEEAAD
 181 FVRRTKVDALAIAIGTSHGAYKFTKPPTGDVLSIKRVKEIHARIPDTHLVMHGSSSVPQD
 241 WLEVINTYGGAMGETYGVPVEEIVEAIKYSVRKINIDTDLRMAATGAIRRFLAENPAEFD
 301 PRKYNAVAKAAMSEICAARYEAFGSAGMASKIKPISLEIMFQRYESGELDPIVKX
 ----------------------------------------------------------------
 
             CODON FREQUENCY TABLE: E. coli Class II              
 ----------------------------------------------------------------
 
      TTT F 0.291   TCT S 0.324   TAT Y 0.352   TGT C 0.389
      TTC F 0.709   TCC S 0.266   TAC Y 0.648   TGC C 0.612
      TTA L 0.034   TCA S 0.048   TAA X 0.630   TGA X 0.352
      TTG L 0.055   TCG S 0.074   TAG X 0.076   TGG W 1.000
 
      CTT L 0.056   CCT P 0.112   CAT H 0.298   CGT R 0.643
      CTC L 0.080   CCC P 0.016   CAC H 0.702   CGC R 0.330
      CTA L 0.008   CCA P 0.153   CAA Q 0.187   CGA R 0.011
      CTG L 0.767   CCG P 0.719   CAG Q 0.814   CGG R 0.008
 
      ATT I 0.335   ACT T 0.291   AAT N 0.173   AGT S 0.045
      ATC I 0.659   ACC T 0.536   AAC N 0.828   AGC S 0.243
      ATA I 0.006   ACA T 0.047   AAA K 0.786   AGA R 0.006
      ATG M 1.000   ACG T 0.127   AAG K 0.215   AGG R 0.003
 
      GTT V 0.398   GCT A 0.275   GAT D 0.461   GGT G 0.508
      GTC V 0.135   GCC A 0.161   GAC D 0.540   GGC G 0.428
      GTA V 0.200   GCA A 0.240   GAA E 0.754   GGA G 0.020
      GTG V 0.268   GCG A 0.323   GAG E 0.247   GGG G 0.044
 
 
             ACTIVE CODONS FOR SEQUENCE GENERATION 
 
  Residue   Codons   Active Codons     Min. Freq.    Max. Freq.
 ----------------------------------------------------------------
   A  Ala      4           4             0.161         0.323
   C  Cys      2           2             0.389         0.612
   D  Asp      2           2             0.461         0.540
 
   E  Glu      2           2             0.247         0.754
   F  Phe      2           2             0.291         0.709
   G  Gly      4           2             0.428         0.508
 
   H  His      2           2             0.298         0.702
   I  Ile      3           2             0.335         0.659
   K  Lys      2           2             0.215         0.786
 
   L  Leu      6           2             0.080         0.767
   M  Met      1           1             1.000         1.000
   N  Asn      2           2             0.173         0.828
 
   P  Pro      4           3             0.112         0.719
   Q  Gln      2           2             0.187         0.814
   R  Arg      6           2             0.330         0.643
 
   S  Ser      6           3             0.243         0.324
   T  Thr      4           3             0.127         0.536
   V  Val      4           4             0.135         0.398
 
   W  Trp      1           1             1.000         1.000
   X  End      3           2             0.352         0.630
   Y  Tyr      2           2             0.352         0.648
 
 
                SEQUENCE PATTERNS TO BE SCREENED
 ----------------------------------------------------------------
 ----------------------------------------------------------------
 
 ----------------------------------------------------------------
                    PARAMETERS FOR TRIAL 1                             
 ----------------------------------------------------------------
               Total Size Of Gene ......... 1065 nt                       
               Protein Residues ........... 355                           
               Mutatable Residues ......... 341                           
               Fixed Nucleotides .......... 42 nt                         
               Degenerate Nucleotides ..... 0 nt                          
               Oligo Size ................. 60 nt                         
               Annealing Temp ............. 62 +/- 1*C                    
               Oligo Concentration ........ 1.00E-7 M                     
               Sodium Concentration ....... 5.00E-2 M                     
               Mg2+ Concentration ......... 2.00E-3 M                     
               Codon Frequency Threshold .. 10%                           
               Repeat Threshold ........... 8 nt                          
               Mispriming Threshold ....... 8/18 (6 exact) nt             
 
--------------------------------------------------------------------------------
 
 The DNA sequence #   1 is:
 ----------------------------------------------------------------
   1 ATGGCGCTGGTTAGCCTGCGTCAGCTGCTCGATCACGCGGCAGAACACGGTTACGGTCTG
  61 CCGGCGTTCAACGTAAACAACCTGGAACAGGTTCGTGCGGTAATGGAAGCAGCGGACAAA
 121 GTTAATAGCCCGGTTATCCTGCAAGGTTCTGCTGGTGCTCGTAAATACGCGGGTGCGTCT
 181 TTCATCCGTCATCTGGTACTGGCGGCGATCGAAGAATACCCGCATATCCCGGTTTGTATG
 241 CACCAGGACCACGGTACCTCTCCGTCCGTTTGCCAGCGTTCTATCCAACTGGGTTTCTCC
 301 TCTGTTATGATGGATGGCAGCCTGAAATCTGACGGTAAAACCCCGGCTGACTACGAATAC
 361 AACGTCAATGTAACCAAAACCGTTTCTGACATGGCGCACGCCTGTGGTGTTTCTGTTGAA
 421 GGTGAACTGGGCTGCCTGGGTTCTCTGGAAACCGGTCAGGCGGGTGAGGAAGACGGTATC
 481 GGTGCGGAAGGTACGCTGAGCATGGACCAGCTCCTGACGGACCCTGAGGAGGCTGCGGAC
 541 TTCGTTCGTCGTACCAAAGTTGACGCACTGGCCATTGCGATCGGCACCTCTCACGGTGCG
 601 TACAAATTCACGAAACCGCCTACCGGTGATGTGCTGTCTATCAAACGTGTTAAGGAGATT
 661 CACGCGCGCATCCCGGACACCCACCTGGTTATGCACGGCTCTAGCTCTGTCCCTCAGGAC
 721 TGGCTGGAAGTTATCAACACCTACGGTGGTGCAATGGGTGAAACCTATGGTGTTCCGGTA
 781 GAGGAAATCGTTGAAGCGATCAAATACTCTGTTCGTAAGATTAACATTGATACCGACCTG
 841 CGTATGGCCGCCACTGGCGCGATCCGCCGCTTCCTGGCGGAAAATCCAGCGGAATTCGAC
 901 CCACGCAAATACAATGCGGTTGCCAAAGCCGCGATGTCTGAGATTTGTGCAGCCCGCTAT
 961 GAGGCGTTCGGTTCCGCAGGTATGGCTAGCAAAATCAAACCGATCTCTCTCGAAATCATG
1021 TTTCAGCGTTACGAATCTGGCGAACTGGACCCGATCGTCAAATAA
 ----------------------------------------------------------------
 
 The oligonucleotide assembly is:
 ----------------------------------------------------------------
     1       10        20        30        40        50        60
     |        |         |         |         |         |         |
 
     1 --->                                                      
   1 ATGGCGCTGGTTAGCCTGCGTCAGCTGCTCGATCACGCGGCAGAACACGGTTACGG    
                                           CCGTCTTGTGCCAATGCCAGAC
                                                                 
      M  A  L  V  S  L  R  Q  L  L  D  H  A  A  E  H  G  Y  G  L 
 
     |        |         |         |         |         |         |
 
                         3 --->                                  
  61                     cctggaacaggttcgtgcggtaatggaagcagcggacaaa
     GGCCGCAAGTTGCATTTGTTGGACCTTGTCCAAGCACG                    tt
                                    <---  2                      
      P  A  F  N  V  N  N  L  E  Q  V  R  A  V  M  E  A  A  D  K 
 
     |        |         |         |         |         |         |
 
                                             5 --->              
 121 gttaatagcccggttatcct                    GTAAATACGCGGGTGCGTCT
     caattatcgggccaataggacgttccaagacgaccacgagcatttatgcgcccacgca  
                                                        <---  4  
      V  N  S  P  V  I  L  Q  G  S  A  G  A  R  K  Y  A  G  A  S 
 
     |        |         |         |         |         |         |
 
                                                                 
 181 TTCATCCGTCATCTGGTACTGGCGGCGATCGAAGAATACC                    
                          CGCCGCTAGCTTCTTATGGGCGTATAGGGCCAAACATAC
                                                                 
      F  I  R  H  L  V  L  A  A  I  E  E  Y  P  H  I  P  V  C  M 
 
     |        |         |         |         |         |         |
 
        7 --->                                                   
 241    caggaccacggtacctctccgtccgtttgccagcgttctatccaactgggtttctcc
     GTGGTCCTGGTGCCATGGAGA                      aggttgacccaaagagg
                   <---  6                                       
      H  Q  D  H  G  T  S  P  S  V  C  Q  R  S  I  Q  L  G  F  S 
 
     |        |         |         |         |         |         |
 
                          9 --->                                 
 301 tct                  CTGAAATCTGACGGTAAAACCCCGGCTGACTACGAATAC
     agacaatactacctaccgtcggactttagactgccattttggg                G
                                         <---  8                 
      S  V  M  M  D  G  S  L  K  S  D  G  K  T  P  A  D  Y  E  Y 
 
     |        |         |         |         |         |         |
 
                                            11 --->              
 361 AACGTCAATGTAACCAAAACC                  gcctgtggtgtttctgttgaa
     TTGCAGTTACATTGGTTTTGGCAAAGACTGTACCGCGTGCGGACACCACAAAGACAACT 
                                                         <--- 10 
      N  V  N  V  T  K  T  V  S  D  M  A  H  A  C  G  V  S  V  E 
 
     |        |         |         |         |         |         |
 
                                                                 
 421 ggtgaactgggctgcctgggttctctggaaaccggtcag                     
                        caagagacctttggccagtccgcccactccttctgccatag
                                                                 
      G  E  L  G  C  L  G  S  L  E  T  G  Q  A  G  E  E  D  G  I 
 
     |        |         |         |         |         |         |
 
       13 --->                                                   
 481   TGCGGAAGGTACGCTGAGCATGGACCAGCTCCTGACGGACCCTGAGGAGGCTGCGGAC
     ccacgccttccatgcgact                          CTCCTCCGACGCCTG
                 <--- 12                                         
      G  A  E  G  T  L  S  M  D  Q  L  L  T  D  P  E  E  A  A  D 
 
     |        |         |         |         |         |         |
 
                                  15 --->                        
 541 TT                           ggccattgcgatcggcacctctcacggtgcg
     AAGCAAGCAGCATGGTTTCAACTGCGTGACCGGTAACGCTAGCCG               
                                           <--- 14               
      F  V  R  R  T  K  V  D  A  L  A  I  A  I  G  T  S  H  G  A 
 
     |        |         |         |         |         |         |
 
                                                            17 --
 601 tacaaattcacgaaaccgcctaccggtga                          AGATT
                 tttggcggatggccactacacgacagatagtttgcacaattcctctaa
                                                                 
      Y  K  F  T  K  P  P  T  G  D  V  L  S  I  K  R  V  K  E  I 
 
     |        |         |         |         |         |         |
 
     ->                                                          
 661 CACGCGCGCATCCCGGACACCCACCTGGTTATGCACGGCTCTAGCTCTGTCCCTC     
     gtgcgcgcgtag                        CCGAGATCGAGACAGGGAGTCCTG
          <--- 16                                                
      H  A  R  I  P  D  T  H  L  V  M  H  G  S  S  S  V  P  Q  D 
 
     |        |         |         |         |         |         |
 
                      19 --->                                    
 721                  cacctacggtggtgcaatgggtgaaacctatggtgttccggta
     ACCGACCTTCAATAGTTGTGGATGCCACCACGTTAC                    ccat
                                  <--- 18                        
      W  L  E  V  I  N  T  Y  G  G  A  M  G  E  T  Y  G  V  P  V 
 
     |        |         |         |         |         |         |
 
                                    21 --->                      
 781 gaggaaatcgttgaagc              TTCGTAAGATTAACATTGATACCGACCTG
     ctcctttagcaacttcgctagtttatgagacaagcattctaattgtaactatggct    
                                                      <--- 20    
      E  E  I  V  E  A  I  K  Y  S  V  R  K  I  N  I  D  T  D  L 
 
     |        |         |         |         |         |         |
 
                                                              23 
 841 CGTATGGCCGCCACTGGCGCGATCCGCCGCT                          gac
                      GCGCTAGGCGGCGAAGGACCGCCTTTTAGGTCGCCTTAAGCTG
                                                                 
      R  M  A  A  T  G  A  I  R  R  F  L  A  E  N  P  A  E  F  D 
 
     |        |         |         |         |         |         |
 
     --->                                                        
 901 ccacgcaaatacaatgcggttgccaaagccgcgatgtctgagatttgtgcagcccgc   
     GGTGCGTTTATGTTACG                       tctaaacacgtcgggcgata
               <--- 22                                           
      P  R  K  Y  N  A  V  A  K  A  A  M  S  E  I  C  A  A  R  Y 
 
     |        |         |         |         |         |         |
 
                      25 --->                                    
 961                  AGGTATGGCTAGCAAAATCAAACCGATCTCTCTCGAAATCATG
     ctccgcaagccaaggcgtccataccgatcgttttagtttg               AGTAC
                                      <--- 24                    
      E  A  F  G  S  A  G  M  A  S  K  I  K  P  I  S  L  E  I  M 
 
     |        |         |         |         |         |         |
 
                                                  
1021 TTTCAGCGTTACGAATC                            
     AAAGTCGCAATGCTTAGACCGCTTGACCTGGGCTAGCAGTTTATT
                                           <--- 26
      F  Q  R  Y  E  S  G  E  L  D  P  I  V  K  X 
 ----------------------------------------------------------------
 
 The total codon usage score ...........     0.000
 The total length score ................     0.000
 The total melting temperature score ...     0.000
 The total repeat score ................     0.000
 The total pattern score ...............     0.000
 The total mispriming score ............     0.000
 The total AT content score ............     0.000
 The total GC content score ............     0.000
 The total fixed gap score .............      N/A
                The OVERALL score ......     0.000
 
 
                  DETAILED CODON FREQUENCY REPORT 
  [ Codon, AA, Frequency, # of times used in coding sequence ] 
 ----------------------------------------------------------------
 
 TTT F 0.29   1  TCT S 0.32  17  TAT Y 0.35   2  TGT C 0.39   3
 TTC F 0.71   8  TCC S 0.27   3  TAC Y 0.65  10  TGC C 0.61   2
 TTA L 0.03   0  TCA S 0.05   0  TAA X 0.63   1  TGA X 0.35   0
 TTG L 0.06   0  TCG S 0.07   0  TAG X 0.08   0  TGG W 1.00   1
 
 CTT L 0.06   0  CCT P 0.11   3  CAT H 0.30   2  CGT R 0.64  11
 CTC L 0.08   3  CCC P 0.02   0  CAC H 0.70   9  CGC R 0.33   5
 CTA L 0.01   0  CCA P 0.15   2  CAA Q 0.19   2  CGA R 0.01   0
 CTG L 0.77  22  CCG P 0.72  11  CAG Q 0.81   8  CGG R 0.01   0
 
 ATT I 0.34   5  ACT T 0.29   1  AAT N 0.17   4  AGT S 0.05   0
 ATC I 0.66  17  ACC T 0.54  12  AAC N 0.83   6  AGC S 0.24   6
 ATA I 0.01   0  ACA T 0.05   0  AAA K 0.79  15  AGA R 0.01   0
 ATG M 1.00  13  ACG T 0.13   3  AAG K 0.22   2  AGG R 0.00   0
 
 GTT V 0.40  19  GCT A 0.28   5  GAT D 0.46   4  GGT G 0.51  24
 GTC V 0.14   3  GCC A 0.16   7  GAC D 0.54  15  GGC G 0.43   6
 GTA V 0.20   5  GCA A 0.24   6  GAA E 0.75  20  GGA G 0.02   0
 GTG V 0.27   1  GCG A 0.32  23  GAG E 0.25   7  GGG G 0.04   0
 
             
              Frequency Range   Number of Codons
             -------------------------------------
                0% -  4%                  0
                5% -  9%                  3
               10% - 14%                  9
               15% - 19%                 15
               20% - 24%                 26
               25% - 29%                 13
               30% - 34%                 50
               35% - 39%                 24
               40% - 44%                  6
               45% - 49%                  4
                  >= 50%                205
             -------------------------------------
              Total Codons Used =   355
 
                  Tm Range    # of Overlaps 
             -------------------------------------
                   <59            0
                    59            0
                    60            0
                    61           17
                    62            8
                    63            0
                    64            0
                    65            0
                    66            0
                  >=67            0
             -------------------------------------
              Tm Range =  1.7
 
              Ovrlap Len Range  # of Oligos
             -------------------------------------
                   <16            1
                    16            1
                    17            5
                    18            4
                    19            3
                    20            4
                    21            1
                    22            4
                    23            1
                    24            0
                    25            1
                  >=26            0
             -------------------------------------
              Lowest Overlap = 14
 
              Length Range   # of Oligos
             -------------------------------------
                   < 51            1
                   51- 52           0
                   53- 54           0
                   55- 56           1
                   57- 58           0
                   59- 60          24
                   61- 62           0
                   63- 64           0
                   65- 66           0
                   67- 68           0
                   69- 70           0
                   >= 71           0
             -------------------------------------
              Longest =  60
 
 
          Sequence Patterns Screened (As Supplied By User)
 ----------------------------------------------------------------
                       None found
 ----------------------------------------------------------------
 
        26 oligonucleotides need to be synthesized
 ----------------------------------------------------------------
  1 ATGGCGCTGGTTAGCCTGCGTCAGCTGCTCGATCACGCGGCAGAACACGGTTACGG  56
  2 GCACGAACCTGTTCCAGGTTGTTTACGTTGAACGCCGGCAGACCGTAACCGTGTTCTGCC  60
  3 CCTGGAACAGGTTCGTGCGGTAATGGAAGCAGCGGACAAAGTTAATAGCCCGGTTATCCT  60
  4 ACGCACCCGCGTATTTACGAGCACCAGCAGAACCTTGCAGGATAACCGGGCTATTAACTT  60
  5 GTAAATACGCGGGTGCGTCTTTCATCCGTCATCTGGTACTGGCGGCGATCGAAGAATACC  60
  6 AGAGGTACCGTGGTCCTGGTGCATACAAACCGGGATATGCGGGTATTCTTCGATCGCCGC  60
  7 CAGGACCACGGTACCTCTCCGTCCGTTTGCCAGCGTTCTATCCAACTGGGTTTCTCCTCT  60
  8 GGGTTTTACCGTCAGATTTCAGGCTGCCATCCATCATAACAGAGGAGAAACCCAGTTGGA  60
  9 CTGAAATCTGACGGTAAAACCCCGGCTGACTACGAATACAACGTCAATGTAACCAAAACC  60
 10 TCAACAGAAACACCACAGGCGTGCGCCATGTCAGAAACGGTTTTGGTTACATTGACGTTG  60
 11 GCCTGTGGTGTTTCTGTTGAAGGTGAACTGGGCTGCCTGGGTTCTCTGGAAACCGGTCAG  60
 12 TCAGCGTACCTTCCGCACCGATACCGTCTTCCTCACCCGCCTGACCGGTTTCCAGAGAAC  60
 13 TGCGGAAGGTACGCTGAGCATGGACCAGCTCCTGACGGACCCTGAGGAGGCTGCGGACTT  60
 14 GCCGATCGCAATGGCCAGTGCGTCAACTTTGGTACGACGAACGAAGTCCGCAGCCTCCTC  60
 15 GGCCATTGCGATCGGCACCTCTCACGGTGCGTACAAATTCACGAAACCGCCTACCGGTGA  60
 16 GATGCGCGCGTGAATCTCCTTAACACGTTTGATAGACAGCACATCACCGGTAGGCGGTTT  60
 17 AGATTCACGCGCGCATCCCGGACACCCACCTGGTTATGCACGGCTCTAGCTCTGTCCCTC  60
 18 CATTGCACCACCGTAGGTGTTGATAACTTCCAGCCAGTCCTGAGGGACAGAGCTAGAGCC  60
 19 CACCTACGGTGGTGCAATGGGTGAAACCTATGGTGTTCCGGTAGAGGAAATCGTTGAAGC  60
 20 TCGGTATCAATGTTAATCTTACGAACAGAGTATTTGATCGCTTCAACGATTTCCTCTACC  60
 21 TTCGTAAGATTAACATTGATACCGACCTGCGTATGGCCGCCACTGGCGCGATCCGCCGCT  60
 22 GCATTGTATTTGCGTGGGTCGAATTCCGCTGGATTTTCCGCCAGGAAGCGGCGGATCGCG  60
 23 GACCCACGCAAATACAATGCGGTTGCCAAAGCCGCGATGTCTGAGATTTGTGCAGCCCGC  60
 24 GTTTGATTTTGCTAGCCATACCTGCGGAACCGAACGCCTCATAGCGGGCTGCACAAATCT  60
 25 AGGTATGGCTAGCAAAATCAAACCGATCTCTCTCGAAATCATGTTTCAGCGTTACGAATC  60
 26 TTATTTGACGATCGGGTCCAGTTCGCCAGATTCGTAACGCTGAAACATGA  50
 
                          FINAL SUMMARY FOR   1 SOLUTION   
--------------------------------------------------------------------------------
  #    Tm   Len  |    Score   TmRange  Short    Long   #Olig  #Repeat #Misprime
 
  1    62    60  |    0.000       1.7      14      60      26       0       0
 
--------------------------------------------------------------------------------
|               HPC @ NIH -- Center for Information Technology                 |
|                             https://hpc.nih.gov                              |
|   National Institutes of Health, Department of Health and Human Services     |
|                                                                              |
|         DNAWorks Web Site: https://hpcwebapps.cit.nih.gov/dnaworks           |
--------------------------------------------------------------------------------


```
</details>

Notice how the designed oligo primers overlap each other with different sequences.

Theoretically, if we put all these primers into one PCR run they would
join just as the software predicted and produce our desired sequence.

## Discussion

The problem of designing oligo primers is a compilcated problem about the balance
between:
- PCR-ability
  - Annealling temperature should be close to each other.
  - Primer length should be close to each other.
  - Sequences of each primer should not lead to excessive mispriming.
- Expression Efficiency (Codon Optimization)

All those factors can affect the success rates of next steps before the gene gets transcribed.

[DNAWorks](https://github.com/davidhoover/DNAWorks) uses a monte-carlo approach to 
randomly mutate the sequence to find a solution the scores the best over all the criterias
provided in the config file.

[Link](https://github.com/davidhoover/DNAWorks) to DNAWorks README file.

# gBLOCKS Design

## Objective

The objective of using [gBLOCKS](https://www.idtdna.com/pages/products/genes-and-gene-fragments/double-stranded-dna-fragments/gblocks-gene-fragments)
is to generate dsDNAs in lower-thousands of bp length.

## Methods

gBLOCKS is a commercial gene assemblt service by IDT that 
VDS is trying to use instead of
the traditional oligo primer PCR method.

Our gene is 1065 nt long so a 
single gBLOCK assembly can fit.

The target protein sequence is as shown:

<details><summary>WP_003022162.1.fasta</summary>


```
>WP_003022162.1 fructose-bisphosphate aldolase class II [Francisella tularensis]
MALVSLRQLLDHAAEHGYGLPAFNVNNLEQVRAVMEAADKVNSPVILQGSAGARKYAGASFIRHLVLAAI
EEYPHIPVCMHQDHGTSPSVCQRSIQLGFSSVMMDGSLKSDGKTPADYEYNVNVTKTVSDMAHACGVSVE
GELGCLGSLETGQAGEEDGIGAEGTLSMDQLLTDPEEAADFVRRTKVDALAIAIGTSHGAYKFTKPPTGD
VLSIKRVKEIHARIPDTHLVMHGSSSVPQDWLEVINTYGGAMGETYGVPVEEIVEAIKYSVRKINIDTDL
RMAATGAIRRFLAENPAEFDPRKYNAVAKAAMSEICAARYEAFGSAGMASKIKPISLEIMFQRYESGELD
PIVK
```

</details>

Input the amino acid sequence to [IDT Codon Optimization Tool](https://www.idtdna.com/CodonOpt)
Organism is _E. coli K12_.

The codon optimized sequence is:

<details><summary>ida_codon_out.fasta</summary>

```
>ftfba_ida
ATGGCGCTTGTGTCTTTACGTCAGCTTTTGGATCACGCAGCCGAGCAC
GGATACGGATTACCCGCGTTCAACGTTAACAATTTAGAGCAAGTGCGT
GCAGTTATGGAAGCAGCCGACAAGGTGAACTCGCCGGTTATCCTGCAA
GGAAGTGCGGGAGCGCGCAAATACGCGGGGGCATCATTTATCCGTCAC
TTGGTTCTGGCGGCCATTGAAGAATATCCCCATATCCCCGTATGTATG
CATCAGGACCATGGGACGTCTCCGAGCGTTTGCCAACGTAGCATTCAG
TTGGGTTTCTCCTCCGTAATGATGGATGGGTCACTGAAAAGTGACGGT
AAAACCCCGGCCGATTATGAATATAATGTAAACGTGACCAAAACTGTG
TCAGACATGGCACATGCTTGTGGTGTCAGCGTCGAAGGCGAGCTGGGA
TGTCTTGGATCACTTGAAACGGGCCAGGCAGGCGAAGAGGATGGTATC
GGCGCCGAGGGCACTCTTTCGATGGACCAACTTCTTACAGATCCGGAA
GAGGCCGCCGATTTCGTGCGCCGCACGAAGGTCGATGCATTGGCAATT
GCTATCGGGACTAGCCACGGCGCTTACAAATTCACCAAACCTCCTACA
GGAGATGTTTTAAGCATTAAACGCGTGAAAGAGATCCATGCACGCATC
CCTGACACCCATTTAGTTATGCACGGTAGTTCATCAGTTCCGCAGGAT
TGGTTGGAGGTCATTAACACCTACGGAGGGGCAATGGGCGAAACGTAT
GGGGTACCAGTCGAAGAAATCGTTGAAGCAATCAAGTACTCTGTCCGT
AAAATCAACATCGACACAGACCTGCGTATGGCCGCAACTGGCGCCATT
CGCCGCTTTTTAGCAGAAAATCCCGCTGAGTTTGACCCTCGTAAATAC
AACGCAGTCGCAAAGGCAGCGATGTCGGAAATTTGTGCTGCGCGTTAC
GAAGCATTTGGTTCGGCCGGTATGGCTAGTAAGATTAAACCCATCAGC
CTGGAAATTATGTTCCAACGCTACGAATCGGGCGAATTAGACCCCATC
GTAAAG
```

</details>

:::note
Check for the "Sequence passes initial screening."
notification in the optimization output.
:::

## Discussion

After the gBLOCKS were ordered, next step would be transformation
into our expression host (_E. coli K12_).
