---
id: 20209-4-ipipe-primer
title: Fall20-W4 I-PIPE Primer Design
tags: ["Primer Design", "PCR", "PIPE"]
---

import {Date, Measure, BottomCaption, TopCaption } from "../../src/lab\.js"


<Date color="#1877F2">09/17/2020</Date>

## Objective

We will be designing the primers used to clone the gene insert
once we received them as gBLOCKs. In addition to just cloning the gene insert,
we also need to add trailing sequence matching the accepting vector so they
the ends of the accepting vecor match our gene insert.

## Methods

1. [Download](https://www.addgene.org/26103/) sequence for _pNIC28-Bsa4_.

2. Locate V-PIPE primer sequence on the plasmid, create annotation.

```
>V-PIPE-Primer+ (2083..2114)
CAGTAAAGGTGGATACGGATCCGAATTCGAGC
```

```
>V-PIPE-Primer- (154..125)
GGATTGGAAGTACAGGTTCTCGGTACCCAG
```

<BottomCaption text="Fig. 1.a. Circular Plasmid Map of pNIC28-Bsa4 with V-PIPE Primer sequences annotated.">
    <img src="/img/20209-4-ipipe-primer-pNIC28-Bsa4-VPIPEPri.png" />
</BottomCaption>

As the primers we use does not have tails on them, the V-PIPE PCR product (accepting vector)
would have blunt ends without any additional sequences ended.

<details><summary>
pNIC-Bsa28 sequence+annotations in GenBank format. V-PIPE Primer pairs annotated.
</summary>

```
LOCUS       pNIC28-Bsa4             7280 bp    ds-DNA  circular SYN 17-SEP-2020
DEFINITION  SGC Empty backbone for bacterial expression.
ACCESSION   .
VERSION     .
KEYWORDS    pNIC28-Bsa4
SOURCE      synthetic DNA construct
  ORGANISM  synthetic DNA construct
REFERENCE   1  (bases 1 to 7280)
  AUTHORS   Savitsky P, Bray J, Cooper CD, Marsden BD, Mahajan P, Burgess-Brown 
            NA, Gileadi O
  TITLE     High-throughput production of human proteins for crystallization: 
            The SGC experience.
  JOURNAL   J Struct Biol. 2010 Jun 10. ():.
  PUBMED    20541610
REFERENCE   2  (bases 1 to 7280)
  AUTHORS   .
  TITLE     Direct Submission
  JOURNAL   Exported Nov 18, 2019 from SnapGene Server 1.1.58
            http://www.snapgene.com
UNIMARK     pNIC28-Bsa4 annotations
            pNIC28-Bsa4
FEATURES             Location/Qualifiers
     source          1..7280
                     /organism="synthetic DNA construct"
                     /mol_type="other DNA"
     primer_bind     1..20
                     /label="T7"
                     /note="T7 promoter, forward primer"
     promoter        1..19
                     /label="T7 promoter"
                     /note="promoter for bacteriophage T7 RNA polymerase"
     protein_bind    20..44
                     /label="lac operator"
                     /bound_moiety="lac repressor encoded by lacI"
                     /note="The lac repressor binds to the lac operator to 
                     inhibit transcription in E. coli. This inhibition can be 
                     relieved by adding lactose or 
                     isopropyl-beta-D-thiogalactopyranoside (IPTG)."
     RBS             59..81
                     /note="efficient ribosome binding site from bacteriophage
                     T7 gene 10 (Olins and Rangwala, 1989)"
     CDS             92..109
                     /codon_start=1
                     /product="6xHis affinity tag"
                     /label="6xHis"
                     /translation="HHHHHH"
     primer          complement(125..154)
                     /left_end_term=""
                     /right_end_term=""
                     /left_end_seq=""
                     /right_end_seq=""
                     /left_end_strand="direct"
                     /right_end_strand="direct"
                     /left_end_type="blunt"
                     /right_end_type="blunt"
                     /fragment_source="pNIC28-Bsa4"
                     /ugene_name="V-PIPE-Primer-"
     CDS             134..154
                     /codon_start=1
                     /product="tobacco etch virus (TEV) protease recognition
                     andcleavage site"
                     /label="TEV site"
                     /translation="ENLYFQS"
     promoter        170..615
                     /gene="sacR"
                     /label="sacB promoter"
                     /note="sacB promoter and control region"
     CDS             616..2037
                     /codon_start=1
                     /gene="Bacillus subtilis sacB"
                     /product="secreted levansucrase that renders bacterial 
                     growth sensitive to sucrose"
                     /label="SacB"
                     /note="negative selection marker"
                     /translation="MNIKKFAKQATVLTFTTALLAGGATQAFAKETNQKPYKETYGIS
                     HITRHDMLQIPEQQKNEKYKVPEFDSSTIKNISSAKGLDVWDSWPLQNTDGTVANYHG
                     YHIVFALAGDPKNADDTSIYMFYQKVGETSIDSWKNAGRVFKDSDKFDANDSILKDQT
                     QEWSGSATFTSDGKIRLFYTDFSGKHYGKQTLTTAQVNVSASDSSLNINGVEDYKSIF
                     DGDGKTYQNVQQFIDEGNYSSGDNHTLRDPHYVEDKGHKYLVFEANTGTEDGYQGEES
                     LFNKAYYGKSTSFFRQESQKLLQSDKKRTAELANGALGMIELNDDYTLKKVMKPLIAS
                     NTVTDEIERANVFKMNGKWYLFTDSRGSKMTIDGITSNDIYMLGYVSNSLTGPYKPLN
                     KTGLVLKMDLDPNDVTFTYSHFAVPQAKGNNVVITSYMTNRGFYADKQSTFAPSFLLN
                     IKGKKTSVVKDSILEQGQLTVNK"
     primer          2083..2114
                     /left_end_term=""
                     /right_end_term=""
                     /left_end_seq=""
                     /right_end_seq=""
                     /left_end_strand="direct"
                     /right_end_strand="direct"
                     /left_end_type="blunt"
                     /right_end_type="blunt"
                     /fragment_source="pNIC28-Bsa4"
                     /ugene_name="V-PIPE-Primer+"
     CDS             2145..2162
                     /codon_start=1
                     /product="6xHis affinity tag"
                     /label="6xHis"
                     /translation="HHHHHH"
     primer_bind     complement(2215..2233)
                     /label="T7 Term"
                     /note="T7 terminator, reverse primer"
     terminator      2229..2276
                     /label="T7 terminator"
                     /note="transcription terminator for bacteriophage T7 RNA 
                     polymerase"
     rep_origin      2313..2768
                     /direction="RIGHT"
                     /label="f1 ori"
                     /note="f1 bacteriophage origin of replication; arrow 
                     indicates direction of (+) strand synthesis"
     primer_bind     complement(2400..2419)
                     /label="F1ori-R"
                     /note="F1 origin, reverse primer"
     primer_bind     2610..2631
                     /label="F1ori-F"
                     /note="F1 origin, forward primer"
     CDS             complement(2860..3675)
                     /codon_start=1
                     /gene="aph(3')-Ia"
                     /product="aminoglycoside phosphotransferase"
                     /label="KanR"
                     /note="confers resistance to kanamycin in bacteria or
                     G418 (Geneticin(R)) in eukaryotes"
                     /translation="MSHIQRETSCSRPRLNSNMDADLYGYKWARDNVGQSGATIYRLY
                     GKPDAPELFLKHGKGSVANDVTDEMVRLNWLTEFMPLPTIKHFIRTPDDAWLLTTAIP
                     GKTAFQVLEEYPDSGENIVDALAVFLRRLHSIPVCNCPFNSDRVFRLAQAQSRMNNGL
                     VDASDFDDERNGWPVEQVWKEMHKLLPFSPDSVVTHGDFSLDNLIFDEGKLIGCIDVG
                     RVGIADRYQDLAILWNCLGEFSPSLQKRLFQKYGIDNPDMNKLQFHLMLDEFF"
     primer_bind     3583..3602
                     /label="Kan-R"
                     /note="Kanamycin resistance gene, reverse primer"
     primer_bind     3667..3686
                     /label="pENTR-R"
                     /note="pENTR vectors, reverse primer"
     rep_origin      3797..4385
                     /direction="RIGHT"
                     /label="ori"
                     /note="high-copy-number ColE1/pMB1/pBR322/pUC origin of 
                     replication"
     primer_bind     4286..4305
                     /label="pBR322ori-F"
                     /note="pBR322 origin, forward primer"
     primer_bind     4539..4556
                     /label="L4440"
                     /note="L4440 vector, forward primer"
     misc_feature    4571..4710
                     /label="bom"
                     /note="basis of mobility region from pBR322"
     primer_bind     complement(4636..4655)
                     /label="pRS-marker"
                     /note="pRS vectors, use to sequence yeast selectable 
                     marker"
     primer_bind     4796..4818
                     /label="pGEX 3'"
                     /note="pGEX vectors, reverse primer"
     CDS             complement(4812..5003)
                     /codon_start=1
                     /gene="rop"
                     /product="Rop protein, which maintains plasmids at low
                     copynumber"
                     /label="rop"
                     /translation="MTKQEKTALNMARFIRSQTLTLLEKLNELDADEQADICESLHDH
                     ADELYRSCLARFGDDGENL"
     CDS             complement(5812..6894)
                     /codon_start=1
                     /gene="lacI"
                     /product="lac repressor"
                     /label="lacI"
                     /note="The lac repressor binds to the lac operator to 
                     inhibit transcription in E. coli. This inhibition can be 
                     relieved by adding lactose or 
                     isopropyl-beta-D-thiogalactopyranoside (IPTG)."
                     /translation="MKPVTLYDVAEYAGVSYQTVSRVVNQASHVSAKTREKVEAAMAE
                     LNYIPNRVAQQLAGKQSLLIGVATSSLALHAPSQIVAAIKSRADQLGASVVVSMVERS
                     GVEACKAAVHNLLAQRVSGLIINYPLDDQDAIAVEAACTNVPALFLDVSDQTPINSII
                     FSHEDGTRLGVEHLVALGHQQIALLAGPLSSVSARLRLAGWHKYLTRNQIQPIAEREG
                     DWSAMSGFQQTMQMLNEGIVPTAMLVANDQMALGAMRAITESGLRVGADISVVGYDDT
                     EDSSCYIPPLTTIKQDFRLLGQTSVDRLLQLSQGQAVKGNQLLPVSLVKRKTTLAPNT
                     QTASPRALADSLMQLARQVSRLESGQ"
     primer_bind     6856..6875
                     /label="LacI-R"
                     /note="LacI, reverse primer"
     promoter        complement(6895..6972)
                     /gene="lacI"
                     /label="lacI promoter"
     primer_bind     7178..7197
                     /label="pBRrevBam"
                     /note="pBR322 vectors, tet region, downstream of BamHI, 
                     reverse primer"
ORIGIN
        1 TAATACGACT CACTATAGGG GAATTGTGAG CGGATAACAA TTCCCCTCTA GAAATAATTT
       61 TGTTTAACTT TAAGAAGGAG ATATACATAT GCACCATCAT CATCATCATT CTTCTGGTGT
      121 AGATCTGGGT ACCGAGAACC TGTACTTCCA ATCCATGGAG ACCGACGTCC ACATATACCT
      181 GCCGTTCACT ATTATTTAGT GAAATGAGAT ATTATGATAT TTTCTGAATT GTGATTAAAA
      241 AGGCAACTTT ATGCCCATGC AACAGAAACT ATAAAAAATA CAGAGAATGA AAAGAAACAG
      301 ATAGATTTTT TAGTTCTTTA GGCCCGTAGT CTGCAAATCC TTTTATGATT TTCTATCAAA
      361 CAAAAGAGGA AAATAGACCA GTTGCAATCC AAACGAGAGT CTAATAGAAT GAGGTCGAAA
      421 AGTAAATCGC GCGGGTTTGT TACTGATAAA GCAGGCAAGA CCTAAAATGT GTAAAGGGCA
      481 AAGTGTATAC TTTGGCGTCA CCCCTTACAT ATTTTAGGTC TTTTTTTATT GTGCGTAACT
      541 AACTTGCCAT CTTCAAACAG GAGGGCTGGA AGAAGCAGAC CGCTAACACA GTACATAAAA
      601 AAGGAGACAT GAACGATGAA CATCAAAAAG TTTGCAAAAC AAGCAACAGT ATTAACCTTT
      661 ACTACCGCAC TGCTGGCAGG AGGCGCAACT CAAGCGTTTG CGAAAGAAAC GAACCAAAAG
      721 CCATATAAGG AAACATACGG CATTTCCCAT ATTACACGCC ATGATATGCT GCAAATCCCT
      781 GAACAGCAAA AAAATGAAAA ATATAAAGTT CCTGAGTTCG ATTCGTCCAC AATTAAAAAT
      841 ATCTCTTCTG CAAAAGGCCT GGACGTTTGG GACAGCTGGC CATTACAAAA CACTGACGGC
      901 ACTGTCGCAA ACTATCACGG CTACCACATC GTCTTTGCAT TAGCCGGAGA TCCTAAAAAT
      961 GCGGATGACA CATCGATTTA CATGTTCTAT CAAAAAGTCG GCGAAACTTC TATTGACAGC
     1021 TGGAAAAACG CTGGCCGCGT CTTTAAAGAC AGCGACAAAT TCGATGCAAA TGATTCTATC
     1081 CTAAAAGACC AAACACAAGA ATGGTCAGGT TCAGCCACAT TTACATCTGA CGGAAAAATC
     1141 CGTTTATTCT ACACTGATTT CTCCGGTAAA CATTACGGCA AACAAACACT GACAACTGCA
     1201 CAAGTTAACG TATCAGCATC AGACAGCTCT TTGAACATCA ACGGTGTAGA GGATTATAAA
     1261 TCAATCTTTG ACGGTGACGG AAAAACGTAT CAAAATGTAC AGCAGTTCAT CGATGAAGGC
     1321 AACTACAGCT CAGGCGACAA CCATACGCTG AGAGATCCTC ACTACGTAGA AGATAAAGGC
     1381 CACAAATACT TAGTATTTGA AGCAAACACT GGAACTGAAG ATGGCTACCA AGGCGAAGAA
     1441 TCTTTATTTA ACAAAGCATA CTATGGCAAA AGCACATCAT TCTTCCGTCA AGAAAGTCAA
     1501 AAACTTCTGC AAAGCGATAA AAAACGCACG GCTGAGTTAG CAAACGGCGC TCTCGGTATG
     1561 ATTGAGCTAA ACGATGATTA CACACTGAAA AAAGTGATGA AACCGCTGAT TGCATCTAAC
     1621 ACAGTAACAG ATGAAATTGA ACGCGCGAAC GTCTTTAAAA TGAACGGCAA ATGGTACCTG
     1681 TTCACTGACT CCCGCGGATC AAAAATGACG ATTGACGGCA TTACGTCTAA CGATATTTAC
     1741 ATGCTTGGTT ATGTTTCTAA TTCTTTAACT GGCCCATACA AGCCGCTGAA CAAAACTGGC
     1801 CTTGTGTTAA AAATGGATCT TGATCCTAAC GATGTAACCT TTACTTACTC ACACTTCGCT
     1861 GTACCTCAAG CGAAAGGAAA CAATGTCGTG ATTACAAGCT ATATGACAAA CAGAGGATTC
     1921 TACGCAGACA AACAATCAAC GTTTGCGCCT AGCTTCCTGC TGAACATCAA AGGCAAGAAA
     1981 ACATCTGTTG TCAAAGACAG CATCCTTGAA CAAGGACAAT TAACAGTTAA CAAATAAAAA
     2041 CGCAAAAGAA AATGCCGATA TCCTATTGGC ATTGACGGTC TCCAGTAAAG GTGGATACGG
     2101 ATCCGAATTC GAGCTCCGTC GACAAGCTTG CGGCCGCACT CGAGCACCAC CACCACCACC
     2161 ACTGAGATCC GGCTGCTAAC AAAGCCCGAA AGGAAGCTGA GTTGGCTGCT GCCACCGCTG
     2221 AGCAATAACT AGCATAACCC CTTGGGGCCT CTAAACGGGT CTTGAGGGGT TTTTTGCTGA
     2281 AAGGAGGAAC TATATCCGGA TTGGCGAATG GGACGCGCCC TGTAGCGGCG CATTAAGCGC
     2341 GGCGGGTGTG GTGGTTACGC GCAGCGTGAC CGCTACACTT GCCAGCGCCC TAGCGCCCGC
     2401 TCCTTTCGCT TTCTTCCCTT CCTTTCTCGC CACGTTCGCC GGCTTTCCCC GTCAAGCTCT
     2461 AAATCGGGGG CTCCCTTTAG GGTTCCGATT TAGTGCTTTA CGGCACCTCG ACCCCAAAAA
     2521 ACTTGATTAG GGTGATGGTT CACGTAGTGG GCCATCGCCC TGATAGACGG TTTTTCGCCC
     2581 TTTGACGTTG GAGTCCACGT TCTTTAATAG TGGACTCTTG TTCCAAACTG GAACAACACT
     2641 CAACCCTATC TCGGTCTATT CTTTTGATTT ATAAGGGATT TTGCCGATTT CGGCCTATTG
     2701 GTTAAAAAAT GAGCTGATTT AACAAAAATT TAACGCGAAT TTTAACAAAA TATTAACGCT
     2761 TACAATTTAG GTGGCACTTT TCGGGGAAAT GTGCGCGGAA CCCCTATTTG TTTATTTTTC
     2821 TAAATACATT CAAATATGTA TCCGCTCATG AATTAATTCT TAGAAAAACT CATCGAGCAT
     2881 CAAATGAAAC TGCAATTTAT TCATATCAGG ATTATCAATA CCATATTTTT GAAAAAGCCG
     2941 TTTCTGTAAT GAAGGAGAAA ACTCACCGAG GCAGTTCCAT AGGATGGCAA GATCCTGGTA
     3001 TCGGTCTGCG ATTCCGACTC GTCCAACATC AATACAACCT ATTAATTTCC CCTCGTCAAA
     3061 AATAAGGTTA TCAAGTGAGA AATCACCATG AGTGACGACT GAATCCGGTG AGAATGGCAA
     3121 AAGTTTATGC ATTTCTTTCC AGACTTGTTC AACAGGCCAG CCATTACGCT CGTCATCAAA
     3181 ATCACTCGCA TCAACCAAAC CGTTATTCAT TCGTGATTGC GCCTGAGCGA GACGAAATAC
     3241 GCGATCGCTG TTAAAAGGAC AATTACAAAC AGGAATCGAA TGCAACCGGC GCAGGAACAC
     3301 TGCCAGCGCA TCAACAATAT TTTCACCTGA ATCAGGATAT TCTTCTAATA CCTGGAATGC
     3361 TGTTTTCCCG GGGATCGCAG TGGTGAGTAA CCATGCATCA TCAGGAGTAC GGATAAAATG
     3421 CTTGATGGTC GGAAGAGGCA TAAATTCCGT CAGCCAGTTT AGTCTGACCA TCTCATCTGT
     3481 AACATCATTG GCAACGCTAC CTTTGCCATG TTTCAGAAAC AACTCTGGCG CATCGGGCTT
     3541 CCCATACAAT CGATAGATTG TCGCACCTGA TTGCCCGACA TTATCGCGAG CCCATTTATA
     3601 CCCATATAAA TCAGCATCCA TGTTGGAATT TAATCGCGGC CTAGAGCAAG ACGTTTCCCG
     3661 TTGAATATGG CTCATAACAC CCCTTGTATT ACTGTTTATG TAAGCAGACA GTTTTATTGT
     3721 TCATGACCAA AATCCCTTAA CGTGAGTTTT CGTTCCACTG AGCGTCAGAC CCCGTAGAAA
     3781 AGATCAAAGG ATCTTCTTGA GATCCTTTTT TTCTGCGCGT AATCTGCTGC TTGCAAACAA
     3841 AAAAACCACC GCTACCAGCG GTGGTTTGTT TGCCGGATCA AGAGCTACCA ACTCTTTTTC
     3901 CGAAGGTAAC TGGCTTCAGC AGAGCGCAGA TACCAAATAC TGTCCTTCTA GTGTAGCCGT
     3961 AGTTAGGCCA CCACTTCAAG AACTCTGTAG CACCGCCTAC ATACCTCGCT CTGCTAATCC
     4021 TGTTACCAGT GGCTGCTGCC AGTGGCGATA AGTCGTGTCT TACCGGGTTG GACTCAAGAC
     4081 GATAGTTACC GGATAAGGCG CAGCGGTCGG GCTGAACGGG GGGTTCGTGC ACACAGCCCA
     4141 GCTTGGAGCG AACGACCTAC ACCGAACTGA GATACCTACA GCGTGAGCTA TGAGAAAGCG
     4201 CCACGCTTCC CGAAGGGAGA AAGGCGGACA GGTATCCGGT AAGCGGCAGG GTCGGAACAG
     4261 GAGAGCGCAC GAGGGAGCTT CCAGGGGGAA ACGCCTGGTA TCTTTATAGT CCTGTCGGGT
     4321 TTCGCCACCT CTGACTTGAG CGTCGATTTT TGTGATGCTC GTCAGGGGGG CGGAGCCTAT
     4381 GGAAAAACGC CAGCAACGCG GCCTTTTTAC GGTTCCTGGC CTTTTGCTGG CCTTTTGCTC
     4441 ACATGTTCTT TCCTGCGTTA TCCCCTGATT CTGTGGATAA CCGTATTACC GCCTTTGAGT
     4501 GAGCTGATAC CGCTCGCCGC AGCCGAACGA CCGAGCGCAG CGAGTCAGTG AGCGAGGAAG
     4561 CGGAAGAGCG CCTGATGCGG TATTTTCTCC TTACGCATCT GTGCGGTATT TCACACCGCA
     4621 ATGGTGCACT CTCAGTACAA TCTGCTCTGA TGCCGCATAG TTAAGCCAGT ATACACTCCG
     4681 CTATCGCTAC GTGACTGGGT CATGGCTGCG CCCCGACACC CGCCAACACC CGCTGACGCG
     4741 CCCTGACGGG CTTGTCTGCT CCCGGCATCC GCTTACAGAC AAGCTGTGAC CGTCTCCGGG
     4801 AGCTGCATGT GTCAGAGGTT TTCACCGTCA TCACCGAAAC GCGCGAGGCA GCTGCGGTAA
     4861 AGCTCATCAG CGTGGTCGTG AAGCGATTCA CAGATGTCTG CCTGTTCATC CGCGTCCAGC
     4921 TCGTTGAGTT TCTCCAGAAG CGTTAATGTC TGGCTTCTGA TAAAGCGGGC CATGTTAAGG
     4981 GCGGTTTTTT CCTGTTTGGT CACTGATGCC TCCGTGTAAG GGGGATTTCT GTTCATGGGG
     5041 GTAATGATAC CGATGAAACG AGAGAGGATG CTCACGATAC GGGTTACTGA TGATGAACAT
     5101 GCCCGGTTAC TGGAACGTTG TGAGGGTAAA CAACTGGCGG TATGGATGCG GCGGGACCAG
     5161 AGAAAAATCA CTCAGGGTCA ATGCCAGCGC TTCGTTAATA CAGATGTAGG TGTTCCACAG
     5221 GGTAGCCAGC AGCATCCTGC GATGCAGATC CGGAACATAA TGGTGCAGGG CGCTGACTTC
     5281 CGCGTTTCCA GACTTTACGA AACACGGAAA CCGAAGACCA TTCATGTTGT TGCTCAGGTC
     5341 GCAGACGTTT TGCAGCAGCA GTCGCTTCAC GTTCGCTCGC GTATCGGTGA TTCATTCTGC
     5401 TAACCAGTAA GGCAACCCCG CCAGCCTAGC CGGGTCCTCA ACGACAGGAG CACGATCATG
     5461 CGCACCCGTG GGGCCGCCAT GCCGGCGATA ATGGCCTGCT TCTCGCCGAA ACGTTTGGTG
     5521 GCGGGACCAG TGACGAAGGC TTGAGCGAGG GCGTGCAAGA TTCCGAATAC CGCAAGCGAC
     5581 AGGCCGATCA TCGTCGCGCT CCAGCGAAAG CGGTCCTCGC CGAAAATGAC CCAGAGCGCT
     5641 GCCGGCACCT GTCCTACGAG TTGCATGATA AAGAAGACAG TCATAAGTGC GGCGACGATA
     5701 GTCATGCCCC GCGCCCACCG GAAGGAGCTG ACTGGGTTGA AGGCTCTCAA GGGCATCGGT
     5761 CGAGATCCCG GTGCCTAATG AGTGAGCTAA CTTACATTAA TTGCGTTGCG CTCACTGCCC
     5821 GCTTTCCAGT CGGGAAACCT GTCGTGCCAG CTGCATTAAT GAATCGGCCA ACGCGCGGGG
     5881 AGAGGCGGTT TGCGTATTGG GCGCCAGGGT GGTTTTTCTT TTCACCAGTG AGACGGGCAA
     5941 CAGCTGATTG CCCTTCACCG CCTGGCCCTG AGAGAGTTGC AGCAAGCGGT CCACGCTGGT
     6001 TTGCCCCAGC AGGCGAAAAT CCTGTTTGAT GGTGGTTAAC GGCGGGATAT AACATGAGCT
     6061 GTCTTCGGTA TCGTCGTATC CCACTACCGA GATATCCGCA CCAACGCGCA GCCCGGACTC
     6121 GGTAATGGCG CGCATTGCGC CCAGCGCCAT CTGATCGTTG GCAACCAGCA TCGCAGTGGG
     6181 AACGATGCCC TCATTCAGCA TTTGCATGGT TTGTTGAAAA CCGGACATGG CACTCCAGTC
     6241 GCCTTCCCGT TCCGCTATCG GCTGAATTTG ATTGCGAGTG AGATATTTAT GCCAGCCAGC
     6301 CAGACGCAGA CGCGCCGAGA CAGAACTTAA TGGGCCCGCT AACAGCGCGA TTTGCTGGTG
     6361 ACCCAATGCG ACCAGATGCT CCACGCCCAG TCGCGTACCG TCTTCATGGG AGAAAATAAT
     6421 ACTGTTGATG GGTGTCTGGT CAGAGACATC AAGAAATAAC GCCGGAACAT TAGTGCAGGC
     6481 AGCTTCCACA GCAATGGCAT CCTGGTCATC CAGCGGATAG TTAATGATCA GCCCACTGAC
     6541 GCGTTGCGCG AGAAGATTGT GCACCGCCGC TTTACAGGCT TCGACGCCGC TTCGTTCTAC
     6601 CATCGACACC ACCACGCTGG CACCCAGTTG ATCGGCGCGA GATTTAATCG CCGCGACAAT
     6661 TTGCGACGGC GCGTGCAGGG CCAGACTGGA GGTGGCAACG CCAATCAGCA ACGACTGTTT
     6721 GCCCGCCAGT TGTTGTGCCA CGCGGTTGGG AATGTAATTC AGCTCCGCCA TCGCCGCTTC
     6781 CACTTTTTCC CGCGTTTTCG CAGAAACGTG GCTGGCCTGG TTCACCACGC GGGAAACGGT
     6841 CTGATAAGAG ACACCGGCAT ACTCTGCGAC ATCGTATAAC GTTACTGGTT TCACATTCAC
     6901 CACCCTGAAT TGACTCTCTT CCGGGCGCTA TCATGCCATA CCGCGAAAGG TTTTGCGCCA
     6961 TTCGATGGTG TCCGGGATCT CGACGCTCTC CCTTATGCGA CTCCTGCATT AGGAAGCAGC
     7021 CCAGTAGTAG GTTGAGGCCG TTGAGCACCG CCGCCGCAAG GAATGGTGCA TGCAAGGAGA
     7081 TGGCGCCCAA CAGTCCCCCG GCCACGGGGC CTGCCACCAT ACCCACGCCG AAACAAGCGC
     7141 TCATGAGCCC GAAGTGGCGA GCCCGATCTT CCCCATCGGT GATGTCGGCG ATATAGGCGC
     7201 CAGCAACCGC ACCTGTGGCG CCGGTGATGC CGGCCACGAT GCGTCCGGCG TAGAGGATCG
     7261 AGATCTCGAT CCCGCGAAAT
//
```

</details>

3. Construct the V-PIPE PCR product, which is the overlapping region of the downstream of the primer pair.
Either copy and paste the sequence manually, but I find doing an In Sillico PCR is easier in UGENE and
it copies all the annotations to the product automatically.

<BottomCaption text="Fig. 2.a. Screenshot of UGENE In Sillico V-PIPE PCR input and output.">
    <img src="/img/20209-4-ipipe-primer-pNIC28-Bsa4-VPIPE-InSPCR.jpg" />
</BottomCaption>

:::note
UGENE warned about the high -ddG on forward primer self-dimer. 
IDT [recommendation](https://www.idtdna.com/pages/support/faqs/how-do-i-use-the-oligoanalyzer-tool-to-analyze-possible-hairpins-and-dimers-formed-by-my-oligo)
is no worse than <Measure unit="kcal/mol">9</Measure>.

This can potentially be a problem in V-PIPE PCR.
:::

4. Load the Gene Insert gBLOCK sequence into UGENE.

```
>FtFBA-MF-oligo
ATGGCGCTGGTTAGCCTGCGTCAGCTGCTCGATCACGCGGCAGAACACGGTTACGGTCTGCCGGC
GTTCAACGTAAACAACCTGGAACAGGTTCGTGCGGTAATGGAAGCAGCGGACAAAGTTAATAGCC
CGGTTATCCTGCAAGGTTCTGCTGGTGCTCGTAAATACGCGGGTGCGTCTTTCATCCGTCATCTG
GTACTGGCGGCGATCGAAGAATACCCGCATATCCCGGTTTGTATGCACCAGGACCACGGTACCTC
TCCGTCCGTTTGCCAGCGTTCTATCCAACTGGGTTTCTCCTCTGTTATGATGGATGGCAGCCTGA
AATCTGACGGTAAAACCCCGGCTGACTACGAATACAACGTCAATGTAACCAAAACCGTTTCTGAC
ATGGCGCACGCCTGTGGTGTTTCTGTTGAAGGTGAACTGGGCTGCCTGGGTTCTCTGGAAACCGG
TCAGGCGGGTGAGGAAGACGGTATCGGTGCGGAAGGTACGCTGAGCATGGACCAGCTCCTGACGG
ACCCTGAGGAGGCTGCGGACTTCGTTCGTCGTACCAAAGTTGACGCACTGGCCATTGCGATCGGC
ACCTCTCACGGTGCGTACAAATTCACGAAACCGCCTACCGGTGATGTGCTGTCTATCAAACGTGT
TAAGGAGATTCACGCGCGCATCCCGGACACCCACCTGGTTATGCACGGCTCTAGCTCTGTCCCTC
AGGACTGGCTGGAAGTTATCAACACCTACGGTGGTGCAATGGGTGAAACCTATGGTGTTCCGGTA
GAGGAAATCGTTGAAGCGATCAAATACTCTGTTCGTAAGATTAACATTGATACCGACCTGCGTAT
GGCCGCCACTGGCGCGATCCGCCGCTTCCTGGCGGAAAATCCAGCGGAATTCGACCCACGCAAAT
ACAATGCGGTTGCCAAAGCCGCGATGTCTGAGATTTGTGCAGCCCGCTATGAGGCGTTCGGTTCC
GCAGGTATGGCTAGCAAAATCAAACCGATCTCTCTCGAAATCATGTTTCAGCGTTACGAATCTGG
CGAACTGGACCCGATCGTCAAATAA
```

5. Construct the final plasmid with gene insert by linking the V-PIPE PCR product
and the gene insert together. Also, this is the same as pasting the sequences together
in a text editor but I found UGENE more robust (harder to mess up).

<BottomCaption text="Fig 3.a. Input for constructing FtFBA-pNIC28-Bsa4 recombinant plasmid.">
    <img src="/img/20209-4-construct-FtFBA-pNIC28-Bsa4-.jpg" />
</BottomCaption>

The vector insert (V-PIPE PCR product) should be inversed because the forward primer in V-PIPE
PCR is downstream of the gene insertion site, inversing it makes the insertion site flip to the end
 and in frame with the T7 promoter and 6xHis Tag.

6. Reset the origin of the recombinant plasmid to the origin of pNIC-Bsa4 for consistency. This can be achieved by searching
for the nucleotides at the origin of pNIC-Bsa4 file and set them as origin in the recombinant plasmid.

7. Inspect the recombinant plasmid, check:

- The size should roughly be that of (pNIC28-Bsa4 - SacB + FtFBA), indicating that the right parts were joined together.
- The T7 construct was present and upstream of FtFBA. (The directions fragments were joined were correct)
  - Inspect the circular plasmid map and check the directions of CDS+Promoter annotations are expected.
- 6xHis Tag and TEV site in frame with the inserted CDS (For the work that has be done by hand like inputting primer sequences, 
missing a base can lead to frame shifts.)
  - Translate sequence in frame with CDS, verify "HHHHHH" on 6xHis tag.


<BottomCaption text={(
    "Fig 4.a. Overview of the constructed FtFBA-pNIC-Bsa4 " +
      "with annotations of " +
        "(1) CDS of FtFBA oligo sequence. " +
        "(2) T7 gene construct, 6xHis Tag, TEV site from pNIC28-Bsa4. " +
        "(3) Primer sequences of V-PIPE Primers. " +
      "Refer to circular view for corresponding colors of annotations in the sequence view."
)}>
    <img src="/img/20209-4-FtFBA-pNIC28-Bsa4-construct-insert-overview.jpg" />    
</BottomCaption>


8. Construct primers for the CDS that has tails matching the vector insert.

The I-PIPE primers should "bridge across" the gene insert and accepting vector
so that when they were used to amplify the gene insert they will attach a tail that
matches the accepting vector.

Visually, the relations of the primer to the recombinant plasmid should be:
<BottomCaption text={(
    "Fig 5.a. Closeup of I-PIPE forward primer position in FtFBA-pNIC28-Bsa4 in " +
    "circular view. Immediately downstream of TEV site is FtFBA CDS."
)}>
    <img src="/img/20209-4-construct-FtFBA-pNIC28-Bsa4-upstream-closeup.jpg" />
</BottomCaption>

<BottomCaption text={(
    "Fig 5.b. Closeup of I-PIPE reverse primer position in FtFBA-pNIC28-Bsa4 in " +
    "circular view. Immediately upstream of V-PIPE-Primer+ is FtFBA CDS."
)}>
    <img src="/img/20209-4-construct-FtFBA-pNIC28-Bsa4-downstream-closeup.jpg" />
</BottomCaption>

The primer sequences are:

```
>FtFBA-pNIC28-Bsa4-IPIPE-ForPCR
TGTACTTCCAATCCATGGCGCTGGTTAG
```

```
>FtFBA-pNIC28-Bsa4-IPIPE-RevPCR
GTATCCACCTTTACTGTTATTTGACGATCGGG
```

<details><summary>
Primer quality control from UGENE:
</summary>


```

Criteria Valid Values            Forward        Reverse
% GC      50-60                  50             43.75
Tm (°C)   55-80                  61.39          61.83
GC Clamp  >=1 G or C at 3' end   2              4
Runs      <=4 base runs          2              3

Self-dimers: 
Delta G: -11.7 kcal/mole Base Pairs: 7
TGTACTTCCAATCCATGGCGCTGGTTAG
       :    ||||||    :       
  GATTGGTCGCGGTACCTAACCTTCATGT
Delta G: -11.9 kcal/mole Base Pairs: 7
GTATCCACCTTTACTGTTATTTGACGATCGGG
                        ||||||                        
                      GGGCTAGCAGTTTATTGTCATTTCCACCTATG
```
</details>

Tm @ <Measure unit="mmol">2</Measure> Mg2+ was <Measure unit="degC">69.6</Measure> 
and <Measure unit="degC">67.9</Measure>
for forward and reverse primer respectively based on the IDT(R) OligoAnalyzer.

<details><summary>
FtFBA-pNIC-Bsa28 sequence+annotations in GenBank format. I-PIPE + V-PIPE Primer pairs annotated.
</summary>

```
LOCUS       Constructed_FtFBA-pNIC-Bsa4-from-oligo 6417 bp   circular 17-SEP-2020
UNIMARK     new_mol_1 annotations
            Constructed_FtFBA-pNIC-Bsa4-from-oligo
FEATURES             Location/Qualifiers
     primer_bind     1..20
                     /label="T7"
                     /note="T7 promoter, forward primer"
     promoter        1..19
                     /label="T7 promoter"
                     /note="promoter for bacteriophage T7 RNA polymerase"
     protein_bind    20..44
                     /label="lac operator"
                     /bound_moiety="lac repressor encoded by lacI"
                     /note="The lac repressor binds to the lac operator to 
                     inhibit transcription in E. coli. This inhibition can be 
                     relieved by adding lactose or 
                     isopropyl-beta-D-thiogalactopyranoside (IPTG)."
     RBS             59..81
                     /note="efficient ribosome binding site from bacteriophage
                     T7 gene 10 (Olins and Rangwala, 1989)"
     CDS             92..109
                     /codon_start=1
                     /product="6xHis affinity tag"
                     /label="6xHis"
                     /translation="HHHHHH"
     primer          complement(125..154)
                     /note="primer"
                     /ugene_name="V-PIPE-Primer-"
                     /ugene_group="misc_feature"
     CDS             134..154
                     /codon_start=1
                     /product="tobacco etch virus (TEV) protease recognition
                     andcleavage site"
                     /label="TEV site"
                     /translation="ENLYFQS"
     primer          141..168
                     /ugene_name="IPIPE-Primer+"
                     /ugene_group="FtFBA-oligo-cds"
     CDS             155..1219
                     /ugene_name="FtFBA-oligo-cds"
     misc_feature    155..1219
                     /source_doc="FtFBA-MF-oligo.gb"
                     /ugene_name="FtFBA-MF-oligo\ Fragment\ (1-1065)"
     primer          complement(1204..1235)
                     /ugene_name="IPIPE-Primer-"
                     /ugene_group="FtFBA-oligo-cds"
     primer          1220..1251
                     /note="primer"
                     /ugene_name="V-PIPE-Primer+"
                     /ugene_group="misc_feature"
     misc_feature    join(1220..6417,1..154)
                     /source_doc="pNIC28-Bsa4_2083-154.gb"
                     /ugene_name="pNIC28-Bsa4:2083-154\ Fragment\ (1-5352)"
     misc_feature    join(1220..6417,1..1219)
                     /comment="Molecule is created with Unipro UGENE v35.0"
                     /ugene_name="source"
     CDS             1282..1299
                     /codon_start=1
                     /product="6xHis affinity tag"
                     /label="6xHis"
                     /translation="HHHHHH"
     primer_bind     complement(1352..1370)
                     /label="T7 Term"
                     /note="T7 terminator, reverse primer"
     terminator      1366..1413
                     /label="T7 terminator"
                     /note="transcription terminator for bacteriophage T7 RNA 
                     polymerase"
     rep_origin      1450..1905
                     /direction="RIGHT"
                     /label="f1 ori"
                     /note="f1 bacteriophage origin of replication; arrow 
                     indicates direction of (+) strand synthesis"
     primer_bind     complement(1537..1556)
                     /label="F1ori-R"
                     /note="F1 origin, reverse primer"
     primer_bind     1747..1768
                     /label="F1ori-F"
                     /note="F1 origin, forward primer"
     CDS             complement(1997..2812)
                     /codon_start=1
                     /gene="aph(3')-Ia"
                     /product="aminoglycoside phosphotransferase"
                     /label="KanR"
                     /note="confers resistance to kanamycin in bacteria or
                     G418 (Geneticin(R)) in eukaryotes"
                     /translation="MSHIQRETSCSRPRLNSNMDADLYGYKWARDNVGQSGATIYRLY
                     GKPDAPELFLKHGKGSVANDVTDEMVRLNWLTEFMPLPTIKHFIRTPDDAWLLTTAIP
                     GKTAFQVLEEYPDSGENIVDALAVFLRRLHSIPVCNCPFNSDRVFRLAQAQSRMNNGL
                     VDASDFDDERNGWPVEQVWKEMHKLLPFSPDSVVTHGDFSLDNLIFDEGKLIGCIDVG
                     RVGIADRYQDLAILWNCLGEFSPSLQKRLFQKYGIDNPDMNKLQFHLMLDEFF"
     primer_bind     2720..2739
                     /label="Kan-R"
                     /note="Kanamycin resistance gene, reverse primer"
     primer_bind     2804..2823
                     /label="pENTR-R"
                     /note="pENTR vectors, reverse primer"
     rep_origin      2934..3522
                     /direction="RIGHT"
                     /label="ori"
                     /note="high-copy-number ColE1/pMB1/pBR322/pUC origin of 
                     replication"
     primer_bind     3423..3442
                     /label="pBR322ori-F"
                     /note="pBR322 origin, forward primer"
     primer_bind     3676..3693
                     /label="L4440"
                     /note="L4440 vector, forward primer"
     misc_feature    3708..3847
                     /label="bom"
                     /note="basis of mobility region from pBR322"
     primer_bind     complement(3773..3792)
                     /label="pRS-marker"
                     /note="pRS vectors, use to sequence yeast selectable 
                     marker"
     primer_bind     3933..3955
                     /label="pGEX 3'"
                     /note="pGEX vectors, reverse primer"
     CDS             complement(3949..4140)
                     /codon_start=1
                     /gene="rop"
                     /product="Rop protein, which maintains plasmids at low
                     copynumber"
                     /label="rop"
                     /translation="MTKQEKTALNMARFIRSQTLTLLEKLNELDADEQADICESLHDH
                     ADELYRSCLARFGDDGENL"
     CDS             complement(4949..6031)
                     /codon_start=1
                     /gene="lacI"
                     /product="lac repressor"
                     /label="lacI"
                     /note="The lac repressor binds to the lac operator to 
                     inhibit transcription in E. coli. This inhibition can be 
                     relieved by adding lactose or 
                     isopropyl-beta-D-thiogalactopyranoside (IPTG)."
                     /translation="MKPVTLYDVAEYAGVSYQTVSRVVNQASHVSAKTREKVEAAMAE
                     LNYIPNRVAQQLAGKQSLLIGVATSSLALHAPSQIVAAIKSRADQLGASVVVSMVERS
                     GVEACKAAVHNLLAQRVSGLIINYPLDDQDAIAVEAACTNVPALFLDVSDQTPINSII
                     FSHEDGTRLGVEHLVALGHQQIALLAGPLSSVSARLRLAGWHKYLTRNQIQPIAEREG
                     DWSAMSGFQQTMQMLNEGIVPTAMLVANDQMALGAMRAITESGLRVGADISVVGYDDT
                     EDSSCYIPPLTTIKQDFRLLGQTSVDRLLQLSQGQAVKGNQLLPVSLVKRKTTLAPNT
                     QTASPRALADSLMQLARQVSRLESGQ"
     primer_bind     5993..6012
                     /label="LacI-R"
                     /note="LacI, reverse primer"
     promoter        complement(6032..6109)
                     /gene="lacI"
                     /label="lacI promoter"
     primer_bind     6315..6334
                     /label="pBRrevBam"
                     /note="pBR322 vectors, tet region, downstream of BamHI, 
                     reverse primer"
ORIGIN
        1 TAATACGACT CACTATAGGG GAATTGTGAG CGGATAACAA TTCCCCTCTA GAAATAATTT
       61 TGTTTAACTT TAAGAAGGAG ATATACATAT GCACCATCAT CATCATCATT CTTCTGGTGT
      121 AGATCTGGGT ACCGAGAACC TGTACTTCCA ATCCATGGCG CTGGTTAGCC TGCGTCAGCT
      181 GCTCGATCAC GCGGCAGAAC ACGGTTACGG TCTGCCGGCG TTCAACGTAA ACAACCTGGA
      241 ACAGGTTCGT GCGGTAATGG AAGCAGCGGA CAAAGTTAAT AGCCCGGTTA TCCTGCAAGG
      301 TTCTGCTGGT GCTCGTAAAT ACGCGGGTGC GTCTTTCATC CGTCATCTGG TACTGGCGGC
      361 GATCGAAGAA TACCCGCATA TCCCGGTTTG TATGCACCAG GACCACGGTA CCTCTCCGTC
      421 CGTTTGCCAG CGTTCTATCC AACTGGGTTT CTCCTCTGTT ATGATGGATG GCAGCCTGAA
      481 ATCTGACGGT AAAACCCCGG CTGACTACGA ATACAACGTC AATGTAACCA AAACCGTTTC
      541 TGACATGGCG CACGCCTGTG GTGTTTCTGT TGAAGGTGAA CTGGGCTGCC TGGGTTCTCT
      601 GGAAACCGGT CAGGCGGGTG AGGAAGACGG TATCGGTGCG GAAGGTACGC TGAGCATGGA
      661 CCAGCTCCTG ACGGACCCTG AGGAGGCTGC GGACTTCGTT CGTCGTACCA AAGTTGACGC
      721 ACTGGCCATT GCGATCGGCA CCTCTCACGG TGCGTACAAA TTCACGAAAC CGCCTACCGG
      781 TGATGTGCTG TCTATCAAAC GTGTTAAGGA GATTCACGCG CGCATCCCGG ACACCCACCT
      841 GGTTATGCAC GGCTCTAGCT CTGTCCCTCA GGACTGGCTG GAAGTTATCA ACACCTACGG
      901 TGGTGCAATG GGTGAAACCT ATGGTGTTCC GGTAGAGGAA ATCGTTGAAG CGATCAAATA
      961 CTCTGTTCGT AAGATTAACA TTGATACCGA CCTGCGTATG GCCGCCACTG GCGCGATCCG
     1021 CCGCTTCCTG GCGGAAAATC CAGCGGAATT CGACCCACGC AAATACAATG CGGTTGCCAA
     1081 AGCCGCGATG TCTGAGATTT GTGCAGCCCG CTATGAGGCG TTCGGTTCCG CAGGTATGGC
     1141 TAGCAAAATC AAACCGATCT CTCTCGAAAT CATGTTTCAG CGTTACGAAT CTGGCGAACT
     1201 GGACCCGATC GTCAAATAAC AGTAAAGGTG GATACGGATC CGAATTCGAG CTCCGTCGAC
     1261 AAGCTTGCGG CCGCACTCGA GCACCACCAC CACCACCACT GAGATCCGGC TGCTAACAAA
     1321 GCCCGAAAGG AAGCTGAGTT GGCTGCTGCC ACCGCTGAGC AATAACTAGC ATAACCCCTT
     1381 GGGGCCTCTA AACGGGTCTT GAGGGGTTTT TTGCTGAAAG GAGGAACTAT ATCCGGATTG
     1441 GCGAATGGGA CGCGCCCTGT AGCGGCGCAT TAAGCGCGGC GGGTGTGGTG GTTACGCGCA
     1501 GCGTGACCGC TACACTTGCC AGCGCCCTAG CGCCCGCTCC TTTCGCTTTC TTCCCTTCCT
     1561 TTCTCGCCAC GTTCGCCGGC TTTCCCCGTC AAGCTCTAAA TCGGGGGCTC CCTTTAGGGT
     1621 TCCGATTTAG TGCTTTACGG CACCTCGACC CCAAAAAACT TGATTAGGGT GATGGTTCAC
     1681 GTAGTGGGCC ATCGCCCTGA TAGACGGTTT TTCGCCCTTT GACGTTGGAG TCCACGTTCT
     1741 TTAATAGTGG ACTCTTGTTC CAAACTGGAA CAACACTCAA CCCTATCTCG GTCTATTCTT
     1801 TTGATTTATA AGGGATTTTG CCGATTTCGG CCTATTGGTT AAAAAATGAG CTGATTTAAC
     1861 AAAAATTTAA CGCGAATTTT AACAAAATAT TAACGCTTAC AATTTAGGTG GCACTTTTCG
     1921 GGGAAATGTG CGCGGAACCC CTATTTGTTT ATTTTTCTAA ATACATTCAA ATATGTATCC
     1981 GCTCATGAAT TAATTCTTAG AAAAACTCAT CGAGCATCAA ATGAAACTGC AATTTATTCA
     2041 TATCAGGATT ATCAATACCA TATTTTTGAA AAAGCCGTTT CTGTAATGAA GGAGAAAACT
     2101 CACCGAGGCA GTTCCATAGG ATGGCAAGAT CCTGGTATCG GTCTGCGATT CCGACTCGTC
     2161 CAACATCAAT ACAACCTATT AATTTCCCCT CGTCAAAAAT AAGGTTATCA AGTGAGAAAT
     2221 CACCATGAGT GACGACTGAA TCCGGTGAGA ATGGCAAAAG TTTATGCATT TCTTTCCAGA
     2281 CTTGTTCAAC AGGCCAGCCA TTACGCTCGT CATCAAAATC ACTCGCATCA ACCAAACCGT
     2341 TATTCATTCG TGATTGCGCC TGAGCGAGAC GAAATACGCG ATCGCTGTTA AAAGGACAAT
     2401 TACAAACAGG AATCGAATGC AACCGGCGCA GGAACACTGC CAGCGCATCA ACAATATTTT
     2461 CACCTGAATC AGGATATTCT TCTAATACCT GGAATGCTGT TTTCCCGGGG ATCGCAGTGG
     2521 TGAGTAACCA TGCATCATCA GGAGTACGGA TAAAATGCTT GATGGTCGGA AGAGGCATAA
     2581 ATTCCGTCAG CCAGTTTAGT CTGACCATCT CATCTGTAAC ATCATTGGCA ACGCTACCTT
     2641 TGCCATGTTT CAGAAACAAC TCTGGCGCAT CGGGCTTCCC ATACAATCGA TAGATTGTCG
     2701 CACCTGATTG CCCGACATTA TCGCGAGCCC ATTTATACCC ATATAAATCA GCATCCATGT
     2761 TGGAATTTAA TCGCGGCCTA GAGCAAGACG TTTCCCGTTG AATATGGCTC ATAACACCCC
     2821 TTGTATTACT GTTTATGTAA GCAGACAGTT TTATTGTTCA TGACCAAAAT CCCTTAACGT
     2881 GAGTTTTCGT TCCACTGAGC GTCAGACCCC GTAGAAAAGA TCAAAGGATC TTCTTGAGAT
     2941 CCTTTTTTTC TGCGCGTAAT CTGCTGCTTG CAAACAAAAA AACCACCGCT ACCAGCGGTG
     3001 GTTTGTTTGC CGGATCAAGA GCTACCAACT CTTTTTCCGA AGGTAACTGG CTTCAGCAGA
     3061 GCGCAGATAC CAAATACTGT CCTTCTAGTG TAGCCGTAGT TAGGCCACCA CTTCAAGAAC
     3121 TCTGTAGCAC CGCCTACATA CCTCGCTCTG CTAATCCTGT TACCAGTGGC TGCTGCCAGT
     3181 GGCGATAAGT CGTGTCTTAC CGGGTTGGAC TCAAGACGAT AGTTACCGGA TAAGGCGCAG
     3241 CGGTCGGGCT GAACGGGGGG TTCGTGCACA CAGCCCAGCT TGGAGCGAAC GACCTACACC
     3301 GAACTGAGAT ACCTACAGCG TGAGCTATGA GAAAGCGCCA CGCTTCCCGA AGGGAGAAAG
     3361 GCGGACAGGT ATCCGGTAAG CGGCAGGGTC GGAACAGGAG AGCGCACGAG GGAGCTTCCA
     3421 GGGGGAAACG CCTGGTATCT TTATAGTCCT GTCGGGTTTC GCCACCTCTG ACTTGAGCGT
     3481 CGATTTTTGT GATGCTCGTC AGGGGGGCGG AGCCTATGGA AAAACGCCAG CAACGCGGCC
     3541 TTTTTACGGT TCCTGGCCTT TTGCTGGCCT TTTGCTCACA TGTTCTTTCC TGCGTTATCC
     3601 CCTGATTCTG TGGATAACCG TATTACCGCC TTTGAGTGAG CTGATACCGC TCGCCGCAGC
     3661 CGAACGACCG AGCGCAGCGA GTCAGTGAGC GAGGAAGCGG AAGAGCGCCT GATGCGGTAT
     3721 TTTCTCCTTA CGCATCTGTG CGGTATTTCA CACCGCAATG GTGCACTCTC AGTACAATCT
     3781 GCTCTGATGC CGCATAGTTA AGCCAGTATA CACTCCGCTA TCGCTACGTG ACTGGGTCAT
     3841 GGCTGCGCCC CGACACCCGC CAACACCCGC TGACGCGCCC TGACGGGCTT GTCTGCTCCC
     3901 GGCATCCGCT TACAGACAAG CTGTGACCGT CTCCGGGAGC TGCATGTGTC AGAGGTTTTC
     3961 ACCGTCATCA CCGAAACGCG CGAGGCAGCT GCGGTAAAGC TCATCAGCGT GGTCGTGAAG
     4021 CGATTCACAG ATGTCTGCCT GTTCATCCGC GTCCAGCTCG TTGAGTTTCT CCAGAAGCGT
     4081 TAATGTCTGG CTTCTGATAA AGCGGGCCAT GTTAAGGGCG GTTTTTTCCT GTTTGGTCAC
     4141 TGATGCCTCC GTGTAAGGGG GATTTCTGTT CATGGGGGTA ATGATACCGA TGAAACGAGA
     4201 GAGGATGCTC ACGATACGGG TTACTGATGA TGAACATGCC CGGTTACTGG AACGTTGTGA
     4261 GGGTAAACAA CTGGCGGTAT GGATGCGGCG GGACCAGAGA AAAATCACTC AGGGTCAATG
     4321 CCAGCGCTTC GTTAATACAG ATGTAGGTGT TCCACAGGGT AGCCAGCAGC ATCCTGCGAT
     4381 GCAGATCCGG AACATAATGG TGCAGGGCGC TGACTTCCGC GTTTCCAGAC TTTACGAAAC
     4441 ACGGAAACCG AAGACCATTC ATGTTGTTGC TCAGGTCGCA GACGTTTTGC AGCAGCAGTC
     4501 GCTTCACGTT CGCTCGCGTA TCGGTGATTC ATTCTGCTAA CCAGTAAGGC AACCCCGCCA
     4561 GCCTAGCCGG GTCCTCAACG ACAGGAGCAC GATCATGCGC ACCCGTGGGG CCGCCATGCC
     4621 GGCGATAATG GCCTGCTTCT CGCCGAAACG TTTGGTGGCG GGACCAGTGA CGAAGGCTTG
     4681 AGCGAGGGCG TGCAAGATTC CGAATACCGC AAGCGACAGG CCGATCATCG TCGCGCTCCA
     4741 GCGAAAGCGG TCCTCGCCGA AAATGACCCA GAGCGCTGCC GGCACCTGTC CTACGAGTTG
     4801 CATGATAAAG AAGACAGTCA TAAGTGCGGC GACGATAGTC ATGCCCCGCG CCCACCGGAA
     4861 GGAGCTGACT GGGTTGAAGG CTCTCAAGGG CATCGGTCGA GATCCCGGTG CCTAATGAGT
     4921 GAGCTAACTT ACATTAATTG CGTTGCGCTC ACTGCCCGCT TTCCAGTCGG GAAACCTGTC
     4981 GTGCCAGCTG CATTAATGAA TCGGCCAACG CGCGGGGAGA GGCGGTTTGC GTATTGGGCG
     5041 CCAGGGTGGT TTTTCTTTTC ACCAGTGAGA CGGGCAACAG CTGATTGCCC TTCACCGCCT
     5101 GGCCCTGAGA GAGTTGCAGC AAGCGGTCCA CGCTGGTTTG CCCCAGCAGG CGAAAATCCT
     5161 GTTTGATGGT GGTTAACGGC GGGATATAAC ATGAGCTGTC TTCGGTATCG TCGTATCCCA
     5221 CTACCGAGAT ATCCGCACCA ACGCGCAGCC CGGACTCGGT AATGGCGCGC ATTGCGCCCA
     5281 GCGCCATCTG ATCGTTGGCA ACCAGCATCG CAGTGGGAAC GATGCCCTCA TTCAGCATTT
     5341 GCATGGTTTG TTGAAAACCG GACATGGCAC TCCAGTCGCC TTCCCGTTCC GCTATCGGCT
     5401 GAATTTGATT GCGAGTGAGA TATTTATGCC AGCCAGCCAG ACGCAGACGC GCCGAGACAG
     5461 AACTTAATGG GCCCGCTAAC AGCGCGATTT GCTGGTGACC CAATGCGACC AGATGCTCCA
     5521 CGCCCAGTCG CGTACCGTCT TCATGGGAGA AAATAATACT GTTGATGGGT GTCTGGTCAG
     5581 AGACATCAAG AAATAACGCC GGAACATTAG TGCAGGCAGC TTCCACAGCA ATGGCATCCT
     5641 GGTCATCCAG CGGATAGTTA ATGATCAGCC CACTGACGCG TTGCGCGAGA AGATTGTGCA
     5701 CCGCCGCTTT ACAGGCTTCG ACGCCGCTTC GTTCTACCAT CGACACCACC ACGCTGGCAC
     5761 CCAGTTGATC GGCGCGAGAT TTAATCGCCG CGACAATTTG CGACGGCGCG TGCAGGGCCA
     5821 GACTGGAGGT GGCAACGCCA ATCAGCAACG ACTGTTTGCC CGCCAGTTGT TGTGCCACGC
     5881 GGTTGGGAAT GTAATTCAGC TCCGCCATCG CCGCTTCCAC TTTTTCCCGC GTTTTCGCAG
     5941 AAACGTGGCT GGCCTGGTTC ACCACGCGGG AAACGGTCTG ATAAGAGACA CCGGCATACT
     6001 CTGCGACATC GTATAACGTT ACTGGTTTCA CATTCACCAC CCTGAATTGA CTCTCTTCCG
     6061 GGCGCTATCA TGCCATACCG CGAAAGGTTT TGCGCCATTC GATGGTGTCC GGGATCTCGA
     6121 CGCTCTCCCT TATGCGACTC CTGCATTAGG AAGCAGCCCA GTAGTAGGTT GAGGCCGTTG
     6181 AGCACCGCCG CCGCAAGGAA TGGTGCATGC AAGGAGATGG CGCCCAACAG TCCCCCGGCC
     6241 ACGGGGCCTG CCACCATACC CACGCCGAAA CAAGCGCTCA TGAGCCCGAA GTGGCGAGCC
     6301 CGATCTTCCC CATCGGTGAT GTCGGCGATA TAGGCGCCAG CAACCGCACC TGTGGCGCCG
     6361 GTGATGCCGG CCACGATGCG TCCGGCGTAG AGGATCGAGA TCTCGATCCC GCGAAAT
//
```
</details>

9. Verify I-PIPE PCR product with In Sillico PCR.

<BottomCaption text="Fig. 6.a. Screenshot of UGENE In Sillico I-PIPE PCR input and output.">
    <img src="/img/20209-4-construct-FtFBA-pNIC28-Bsa4-IPIPE-InsPCR.jpg" />
</BottomCaption>

## Discussions

### Primer Quality control

My biggest concern of the I-PIPE primers I designed would still be primer dimers.
This can be a problem especially since the template gBLOCKs may not have a large enough 
quantity to somewhat "compete" with primer dimers. I introduced some silent mutations in the
primer to make self-dimers have ddG better than <Measure unit="kcal/mol">-9</Measure>. sequences
of those are on the IDT wishlist with an `-opt` appended to the end of the name.

I would definitely consider mutating the gBLOCKs sequence to make them more PCRable.

### The Uncertainty of Tm

Looks like there is not a very precise way to calculate the exact value of Tm, as it is
affected by multiple environmental factors that are hard to be all accounted for. Maybe
consider using a gradient PCR protocol if the initial PCR did not yield good results.

### Use of Bioinformatics tools

I found using a bioinformatics tool to manipulate sequences better than doing it with a simple
text editor.

While a text editor provides the ultimate freedom on how you manipulate your sequences, I found it has a few big issues:
- Can not automatically inverse a DNA sequence. Doing it by hand makes it very error-prone.
- Can't add or visualize annotations on sequences. I found annotations not only telling me more information about the sequence,
it also gives me a "sense-of-direction" in the plasmid. 
- Looking at plain sequence texts makes it much harder to confirm if the sequences is in the "expected" state, such as if we
accidentally shifted the frame or put a sequence in reverse. Thus, I found I spend much longer 
time checking for errors on a plain text editor while I can have much more confidence with a bioinformatics tool.

### Next Steps

I don't know how the stream will handle the workflow, but if I were to decide what happens next, I would:
- Order the gBLOCKs and I-PIPE primers with the corresponding mutations to fix self-dimer problem.
- Perform the I-PIPE PCR on gBLOCKs to amplify gene insert. Quality control on PCR.
- Anneal the gene insert to accepting vector by PCRing the amplified gene insert and the accepting vector. Quality control to confirm that recombinant plasmid were made.
- Remove non-combinant plasmids by either digesting SacB gene or perform negative selection on SacB after transformation.
- Transformation into _E. coli K12_. 
- Selection for recombinants.