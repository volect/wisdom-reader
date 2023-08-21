window.addEventListener('DOMContentLoaded', (event) => showWisdom());
function showWisdom() {
    document.getElementById("javascriptWarning").remove();
    b = document.getElementById("billboard");
    t = document.getElementById("billboardH1");
    c = document.getElementById("configPanel");

    if(!localStorage.getItem('wiselines')) {
        b.style.display="none";
        c.style.display="block";
    }
    else {
        text = localStorage.getItem('wiselines');
        lines = text.split("\n");
        n = getRandomInt(0,lines.length);
        t.innerText = lines[n];

        c.style.display="none";
        b.style.display="block";
        title = document.getElementsByClassName("title")[0].innerText="";
        document.getElementsByClassName("header")[0].style.display="none";
    }
}
function saveLines() {
    l = document.getElementById("wiselinesTextArea").value;
    localStorage.setItem('wiselines', l);
    document.location.reload();
}
function editLines() {
    t = document.getElementById("wiselinesTextArea");
    l = localStorage.getItem('wiselines');
    t.value = l;
    c.style.display="block";
    b.style.display="none";

   document.getElementsByClassName("title")[0].innerText="Wisdom Reader";
   document.getElementsByClassName("header")[0].style.display="";
}
function clearLines() {
   localStorage.removeItem('wiselines');
   document.location.reload();
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
