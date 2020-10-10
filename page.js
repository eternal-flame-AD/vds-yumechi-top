document.loadICMNow = function(id) {
    act = new ActiveIcmJS(id);
    act.projectFile = document.getElementById(id).getAttribute("data-file")
}