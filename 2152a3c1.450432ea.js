(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{133:function(t,e,a){"use strict";a.r(e),e.default=a.p+"assets/files/20209-3-vs-phosphatase-results-8b706255c70de98a2e86cf1b7e0714a6.xlsx"},134:function(t,e,a){"use strict";a.r(e),e.default=a.p+"assets/images/20209-3-vs-phosphatase-RMSd_plot-bf4e031f4bf14fc19e217f76545152e5.jpg"},65:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return i})),a.d(e,"rightToc",(function(){return o})),a.d(e,"default",(function(){return d}));var n=a(2),l=a(6),r=(a(0),a(97)),b=a(99),c={id:"20209-3-vs-phosphatase",title:"Fall20-W3 VS Phosphatase",tags:["Virtual Screening","GOLD"]},i={unversionedId:"research-pages/20209-3-vs-phosphatase",id:"research-pages/20209-3-vs-phosphatase",isDocsHomePage:!1,title:"Fall20-W3 VS Phosphatase",description:"09/09/2020",source:"@site/docs/research-pages/20209-week3-vs-phosphatase.md",slug:"/research-pages/20209-3-vs-phosphatase",permalink:"/docs/research-pages/20209-3-vs-phosphatase",editUrl:"https://github.com/eternal-flame-AD/vds-yumechi-top/edit/master/docs/research-pages/20209-week3-vs-phosphatase.md",version:"current",sidebar:"someSidebar",previous:{title:"Fall20-W2 V-PIPE PCR",permalink:"/docs/research-pages/20209-2-vpipe-pcr"},next:{title:"Fall20-W3 Oligo and gBlocks Design",permalink:"/docs/research-pages/20209-3-oligo-optimize"}},o=[{value:"Objective",id:"objective",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Discussion",id:"discussion",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],O={rightToc:o};function d(t){var e=t.components,c=Object(l.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,c,{components:e,mdxType:"MDXLayout"}),Object(r.b)(b.c,{color:"#1877F2",mdxType:"Date"},"09/09/2020"),Object(r.b)("h2",{id:"objective"},"Objective"),Object(r.b)("p",null,"This objective of this lab is to perform a virtual screening of a slice of ChemBridge library on the active site of the YopH phosphatase."),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Five control ligands were selected to evaluate the quality of docking.")),Object(r.b)(b.i,{text:"Table 1. Control Ligands Definition",mdxType:"TopCaption"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SDF File Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compound Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"+"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CID1240534pos1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","[(3aR,4R,7S,7aS)-2-(4-bromophenyl)-1,3-dioxo-7,7a-dihydro-3aH-4,7-epoxyisoindol-4-yl]","-acetyloxymethyl] acetate")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"+"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CID1766712pos2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[(3R,3aR,5R,8aR,9aR)-5,8a-dimethyl-2-oxo-3,3a,5,6,7,8,9,9a-octahydrobenzo","[f][1]","benzofuran-3-yl]methyl-(furan-2-ylmethyl)-","[(4-methoxyphenyl)methyl]","azanium")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"+"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"52941593"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[4-[3-","[Difluoro(phosphono)methyl]","phenyl]phenyl]methoxyazanium")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2244"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4-nitrophenyl phosphate")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"378"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aspirin"))))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Run GOLD against the control ligands. ")),Object(r.b)("details",null,Object(r.b)("summary",null,"gold.conf (ChemPLP+GoldScore consensus scoring, GA=15)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  GOLD CONFIGURATION FILE\n\n  AUTOMATIC SETTINGS\nautoscale = 1\n\n  POPULATION\npopsiz = auto\nselect_pressure = auto\nn_islands = auto\nmaxops = auto\nniche_siz = auto\n\n  GENETIC OPERATORS\npt_crosswt = auto\nallele_mutatewt = auto\nmigratewt = auto\n\n  FLOOD FILL\nradius = 10\norigin = 0 0 0\ndo_cavity = 1\nfloodfill_atom_no = 0\ncavity_file = YI2Extracted.mol2\nfloodfill_center = cavity_from_ligand\n\n  DATA FILES\nligand_data_file controls.sdf 15\nparam_file = DEFAULT\nset_ligand_atom_types = 1\nset_protein_atom_types = 0\ndirectory = .\ntordist_file = DEFAULT\nmake_subdirs = 0\nsave_lone_pairs = 1\nfit_points_file = fit_pts.mol2\nread_fitpts = 1\nbestranking_list_filename = goldsoln_control.lst\n\n  FLAGS\ninternal_ligand_h_bonds = 0\nflip_free_corners = 0\nmatch_ring_templates = 0\nflip_amide_bonds = 0\nflip_planar_n = 1 flip_ring_NRR flip_ring_NHR\nflip_pyramidal_n = 0\nrotate_carboxylic_oh = flip\nuse_tordist = 1\npostprocess_bonds = 1\nrotatable_bond_override_file = DEFAULT\nsolvate_all = 1\n\n  TERMINATION\nearly_termination = 1\nn_top_solutions = 3\nrms_tolerance = 1.5\n\n  CONSTRAINTS\nforce_constraints = 0\n\n  COVALENT BONDING\ncovalent = 0\n\n  SAVE OPTIONS\nsave_score_in_file = 1\nsave_protein_torsions = 1\nconcatenated_output = goldsoln_control.sdf\nclean_up_option delete_all_solutions\nclean_up_option save_top_n_solutions 10\n#clean_up_option save_best_ligands 5\nclean_up_option delete_redundant_log_files\nclean_up_option delete_all_initialised_ligands\nclean_up_option delete_empty_directories\nclean_up_option delete_all_log_files\noutput_file_format = MACCS\n\n  FITNESS FUNCTION SETTINGS\ninitial_virtual_pt_match_max = 3\nrelative_ligand_energy = 1\ngold_fitfunc_path = consensus_score\nstart_vdw_linear_cutoff = 6\nscore_param_file = DEFAULT\ndocking_fitfunc_path = plp\ndocking_param_file = DEFAULT\nrescore_fitfunc_path = goldscore\nrescore_param_file = DEFAULT\n\n  PROTEIN DATA\nprotein_datafile = 2Y2F_protein.mol2\n"))),Object(r.b)("details",null,Object(r.b)("summary",null,"rms_calc.sh"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\n\n\nobabel $1 -o txt | cut -d\'|\' -f 1,2,3,4 | uniq > mols.txt || exit 1\ncurIdx=1\n\nwhile read p; do\n        let curEnd=curIdx+9\n        echo "curIdx is ${curIdx}, curEnd is ${curEnd}"\n        obabel $1 --filter "title=\\"${p}|*\\""  -O out.sdf\n        obabel -m out.sdf -O out_split.sdf\n        let curIdx=curIdx+$(ls out_split*.sdf | wc -l)\n        ~/CCDC/Discovery_2020/bin/rms_analysis -method group_average out_split*.sdf | tail -n 1 >> results.txt\n        rm ./*.sdf\ndone < mols.txt\n'))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Run GOLD against the sliced library. (Workspace compiled with ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/eternal-flame-AD/batch-vs-runner"}),"batch-vs-runner")," for parallel processing)")),Object(r.b)("details",null,Object(r.b)("summary",null,"gold.conf.tpl (ChemPLP+GoldScore consensus scoring, GA=15)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  GOLD CONFIGURATION FILE\n\n  AUTOMATIC SETTINGS\nautoscale = 1\n\n  POPULATION\npopsiz = auto\nselect_pressure = auto\nn_islands = auto\nmaxops = auto\nniche_siz = auto\n\n  GENETIC OPERATORS\npt_crosswt = auto\nallele_mutatewt = auto\nmigratewt = auto\n\n  FLOOD FILL\nradius = 10\norigin = 0 0 0\ndo_cavity = 1\nfloodfill_atom_no = 0\ncavity_file = YI2Extracted.mol2\nfloodfill_center = cavity_from_ligand\n\n  DATA FILES\nligand_data_file job.sdf 15\nparam_file = DEFAULT\nset_ligand_atom_types = 1\nset_protein_atom_types = 0\ndirectory = .\ntordist_file = DEFAULT\nmake_subdirs = 0\nsave_lone_pairs = 1\nfit_points_file = fit_pts.mol2\nread_fitpts = 1\nbestranking_list_filename = goldsoln_from{{ .CumulativeStartIdx }}_to{{ .CumulativeEndIdx }}.lst\n\n  FLAGS\ninternal_ligand_h_bonds = 0\nflip_free_corners = 0\nmatch_ring_templates = 0\nflip_amide_bonds = 0\nflip_planar_n = 1 flip_ring_NRR flip_ring_NHR\nflip_pyramidal_n = 0\nrotate_carboxylic_oh = flip\nuse_tordist = 1\npostprocess_bonds = 1\nrotatable_bond_override_file = DEFAULT\nsolvate_all = 1\n\n  TERMINATION\nearly_termination = 1\nn_top_solutions = 3\nrms_tolerance = 1.5\n\n  CONSTRAINTS\nforce_constraints = 0\n\n  COVALENT BONDING\ncovalent = 0\n\n  SAVE OPTIONS\nsave_score_in_file = 1\nsave_protein_torsions = 1\nconcatenated_output = goldsoln_from{{ .CumulativeStartIdx }}.sdf\nclean_up_option delete_all_solutions\nclean_up_option save_top_n_solutions 10\n#clean_up_option save_best_ligands 5\nclean_up_option delete_redundant_log_files\nclean_up_option delete_all_initialised_ligands\nclean_up_option delete_empty_directories\nclean_up_option delete_all_log_files\noutput_file_format = MACCS\n\n  FITNESS FUNCTION SETTINGS\ninitial_virtual_pt_match_max = 3\nrelative_ligand_energy = 1\ngold_fitfunc_path = consensus_score\nstart_vdw_linear_cutoff = 6\nscore_param_file = DEFAULT\ndocking_fitfunc_path = plp\ndocking_param_file = DEFAULT\nrescore_fitfunc_path = goldscore\nrescore_param_file = DEFAULT\n\n  PROTEIN DATA\nprotein_datafile = 2Y2F_protein.mol2\n"))),Object(r.b)("details",null,Object(r.b)("summary",null,"rms_calc.sh"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\n\n\nobabel $1 -o txt | cut -d\'|\' -f 1,2,3,4 | uniq > mols.txt || exit 1\ncurIdx=1\n\nwhile read p; do\n        let curEnd=curIdx+9\n        echo "curIdx is ${curIdx}, curEnd is ${curEnd}"\n        obabel $1 --filter "title=\\"${p}|*\\""  -O out.sdf\n        obabel -m out.sdf -O out_split.sdf\n        let curIdx=curIdx+$(ls out_split*.sdf | wc -l)\n        ~/CCDC/Discovery_2020/bin/rms_analysis -method group_average out_split*.sdf | tail -n 1 >> results.txt\n        rm ./*.sdf\ndone < mols.txt\n'))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Collect results, plot out calculated RMSd between solutions and output score."),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{target:"_blank",href:a(133).default},"Full result (xlsx)")),Object(r.b)(b.b,{text:"Fig 2: Scatter plot of ChemPLP Fitness Score vs. RMSd between solutions for each ligand. Positive controls indicated with yellow dots, negative controls indicated with grey dots.",mdxType:"BottomCaption"},Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(134).default}))),Object(r.b)("p",{parentName:"li"},"From this plot we can observe that:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Positive controls all scored significantly higher than the negative controls, indicating a good accuracy on the prediction."),Object(r.b)("li",{parentName:"ol"},"RMSd-to-score correlation was hard to conclude for control ligands, but 2/3 of the positive controls has excessively high RMSd, indicating a low reliability on the prediction."),Object(r.b)("li",{parentName:"ol"},"RMSd-to-score correlation on the experiment group was positive, indicating a low reliability on the prediction."),Object(r.b)("li",{parentName:"ol"},"The placement of the experiment ligands were mostly close to the negative controls, indicating that no particularly interesting potential binders were found in this experiment.")))),Object(r.b)("details",null,Object(r.b)("summary",null,Object(r.b)("h1",{id:"required-extra-tables--figures"},"Required Extra Tables & Figures")),Object(r.b)(b.i,{text:"Table 2. GOLD scores for top 10 novel ligands + 5 controls",mdxType:"TopCaption"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Ligand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Image"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Score"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"S(PLP)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"S(hbond)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"S(metal)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"DE(clash)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"DE(tors)"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC02831197"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"02831197",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"91.37"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-58.36"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12.47"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.11")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC12244440"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"12244440",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"85.21"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-82.14"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.87")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC71752759"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"71752759",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"81.28"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-66.48"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.79"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC14542938"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"14542938",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80.79"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-81.42"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.99"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC11697932"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"11697932",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80.55"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-78.55"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC12588355"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"12588355",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"79.2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-74.67"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.18"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC82107749"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"82107749",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"79.09"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-74.09"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.52"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC12191733"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"12191733",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"78.86"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-81.79"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.16")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC12244438"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"12244438",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"78.8"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-76.38"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.94"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC20864536"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"20864536",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"77.3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-73.85"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.77"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3.12")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Ligand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Image"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Score"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"S(PLP)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"S(hbond)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"S(metal)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"DE(clash)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"DE(tors)"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CID1240534pos1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"CC(=O)OC([C@]12C=C[C@H](O1)[C@@H]3[C@H]2C(=O)N(C3=O)C4=CC=C(C=C4)Br)OC(=O)C",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"133.79"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-126.4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3.65"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1652.47")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CID1766712pos2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"C[C@@H]1CCC[C@]2(C1=C[C@H]3[C@@H](C2)OC(=O)[C@H]3C[NH+](CC4=CC=C(C=C4)OC)CC5=CC=CO5)C",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"99.35"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-86.97"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.22"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1012.7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2244"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"CC(=O)OC1=CC=CC=C1C(=O)O",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"44.93"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-28.91"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.68"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"378"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"C1=CC(=CC=C1[N+](=O)[O-])OP(=O)(O)O",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"59.32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-33.75"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8.8"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"52941593"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"C1=CC(=CC(=C1)C(F)(F)P(=O)(O)O)C2=CC=C(C=C2)CO[NH3+]",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"85.04"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-63.44"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8.59"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.29"))))),Object(r.b)(b.i,{text:"Table 3. Linpski's Rule Data for top 10 Novel Ligands and Controls",mdxType:"TopCaption"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Image"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"LogP"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Hacc"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Hdon"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Mol Weight"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC02831197"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"02831197",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.845"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"442.582")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC12244440"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"12244440",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.648"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"479.65")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC71752759"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"71752759",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.273"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"389.442")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC14542938"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"14542938",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.428"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"492.623")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC11697932"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"11697932",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.717"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"378.411")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC12588355"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"12588355",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.695"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"442.604")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC82107749"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"82107749",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3.849"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"356.51")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC12191733"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"12191733",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.457"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"423.492")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC12244438"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"12244438",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.512"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"471.964")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ZINC20864536"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.j,{id:"20864536",mdxType:"ZincImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3.613"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"386.411")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CID1240534pos1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"CC(=O)OC([C@]12C=C[C@H](O1)[C@@H]3[C@H]2C(=O)N(C3=O)C4=CC=C(C=C4)Br)OC(=O)C",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"450.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CID1766712pos2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"C[C@@H]1CCC[C@]2(C1=C[C@H]3[C@@H](C2)OC(=O)[C@H]3C[NH+](CC4=CC=C(C=C4)OC)CC5=CC=CO5)C",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.8"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"450.6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2244"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"CC(=O)OC1=CC=CC=C1C(=O)O",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"180.16")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"378"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"C1=CC(=CC=C1[N+](=O)[O-])OP(=O)(O)O",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"219.09")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"52941593"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(b.g,{smiles:"C1=CC(=CC(=C1)C(F)(F)P(=O)(O)O)C2=CC=C(C=C2)CO[NH3+]",mdxType:"SmileImg"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-1.1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"330.24"))))),Object(r.b)(b.b,{text:"Fig 4.a. PyMOL representation of the GOLD-predicted binding pose for the 1st-highest-scoring ligand (ZINC02731197). Polar contacts between ligand and receptor were indicated with yellow dashes.",mdxType:"BottomCaption"},Object(r.b)("img",{src:"/img/20209-3-vs-phosphatase-best_1.jpg"})),Object(r.b)(b.b,{text:"Fig 4.b. PyMOL representation of the GOLD-predicted binding pose for the 2nd-highest-scoring ligand (ZINC12244440). Polar contacts between ligand and receptor were indicated with yellow dashes.",mdxType:"BottomCaption"},Object(r.b)("img",{src:"/img/20209-3-vs-phosphatase-best_2.jpg"}))),Object(r.b)("h2",{id:"discussion"},"Discussion"),Object(r.b)("p",null,"This looks like a pretty typical dock with no good candidates found. This is expected because only 1000 candidates were screened. "),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"This experiment did not yield interesting results for further study."),Object(r.b)("p",null,"If I were asked to make more adjustments to improve results quality, I might consider the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Find more positive controls and include them in the control dock. The current 3 positive controls are not enough to draw a confident conclusion on the quality of the dock run."),Object(r.b)("li",{parentName:"ul"},"Negative controls should have properties that resemble positive controls more. Consider using DUD(e) to generate negative controls."),Object(r.b)("li",{parentName:"ul"},"Consider docking with a different fitness function. The positive RMSd-to-score correlation indicates that the current fitness function is not outputting stable results for this protein+ligand combination.")))}d.isMDXComponent=!0},97:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=l.a.createContext({}),O=function(t){var e=l.a.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=O(t.components);return l.a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},j=l.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,b=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),d=O(a),j=n,m=d["".concat(b,".").concat(j)]||d[j]||p[j]||r;return a?l.a.createElement(m,c(c({ref:e},o),{},{components:a})):l.a.createElement(m,c({ref:e},o))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,b=new Array(r);b[0]=j;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,b[1]=c;for(var o=2;o<r;o++)b[o]=a[o];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},99:function(t,e,a){"use strict";a.d(e,"h",(function(){return r})),a.d(e,"c",(function(){return b})),a.d(e,"f",(function(){return c})),a.d(e,"d",(function(){return i})),a.d(e,"i",(function(){return o})),a.d(e,"b",(function(){return O})),a.d(e,"j",(function(){return d})),a.d(e,"g",(function(){return p})),a.d(e,"e",(function(){return j})),a.d(e,"a",(function(){return m}));var n=a(0),l=a.n(n);const r=({children:t,color:e})=>l.a.createElement("span",{style:{backgroundColor:e,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},l.a.createElement("i",{className:"fas fa-clock"})," ",t),b=({children:t,color:e})=>l.a.createElement("span",{style:{backgroundColor:e,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},l.a.createElement("i",{className:"fas fa-calendar-day"})," ",t),c=({children:t,color:e})=>l.a.createElement("span",{style:{backgroundColor:e,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},l.a.createElement("i",{className:"fas fa-vials"})," Already done by mentors."),i=({children:t,unit:e})=>{const a={um:"\u03bcM",ul:"\u03bcL",ml:"mL",degc:"\xb0C"};let n=e.split("/");return n=n.map((t=>{let e=t;for(let n in a)t.toLowerCase()==n.toLowerCase()&&(e=a[n]);return e})),l.a.createElement("span",null,t," ",n.join("/"))},o=({children:t,text:e})=>l.a.createElement("span",null,l.a.createElement("p",{style:{textAlign:"center",fontStyle:"italic",fontWeight:"bold"}},e),t),O=({children:t,text:e})=>l.a.createElement("span",null,l.a.createElement("div",{style:{textAlign:"center",marginRight:"5em",marginLeft:"5em"}},t),l.a.createElement("p",{style:{textAlign:"center",fontStyle:"italic"}},e)),d=({id:t})=>l.a.createElement("img",{src:`http://zinc.docking.org/substances/ZINC0000${t}.png`,height:200,width:200,style:{border:"2px solid"}}),p=({smiles:t})=>l.a.createElement("img",{src:"http://zinc.docking.org/apps/mol/draw.png?smiles="+encodeURIComponent(t),height:200,width:200,style:{border:"2px solid"}});class j extends n.Component{constructor(t){super(t),this.state={elID:"molEdit-"+1e5*Math.random()/1}}componentDidMount(){const t=document.createElement("script");let e=this.props.mol||"";t.innerHTML='(document.moledit || (document.moledit = {}))[decodeURI("'+encodeURI(e)+'")] = new ChemicalView(decodeURI("'+encodeURI(e)+'"), "'+this.state.elID+'", 600, 600);',document.getElementById(this.state.elID).appendChild(t)}render(){return l.a.createElement("div",{id:this.state.elID,className:"molEdit",style:{border:"2px solid grey",height:"900px",width:"800px",display:"block"}})}}class m extends n.Component{constructor(t){super(t),this.state={elID:"actICM-"+1e5*Math.random()/1}}componentDidMount(){const t=document.createElement("script");t.innerHTML="\n      function onLoadActiveIcm() {\n            document.loadICMNow(decodeURI("+encodeURI(this.state.elID)+"));\n      }\n      ",document.getElementById(this.state.elID).appendChild(t)}render(){return l.a.createElement("div",{id:this.state.elID,"data-file":this.props.mol||"",className:"actICM",style:{border:"2px solid grey",height:"900px",width:"800px",display:"block"}})}}}}]);