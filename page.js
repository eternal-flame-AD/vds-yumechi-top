document.loadICMNow = function(id) {
    act = new ActiveIcmJS(id);
    act.projectFile = document.getElementById(id).getAttribute("data-file")
}

document.loadChemicalView = function(mol, id) {
    (document.moledit || (document.moledit = {}))[id] = new ChemicalView(mol,id,600,600)
}