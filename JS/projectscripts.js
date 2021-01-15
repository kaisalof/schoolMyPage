function loading() {
    alert("Here you can find my projects!");
}
window.addEventListener('scroll', (Event) => {
    console.log("Page got scrolled");
});
document.getElementById("workLog").onmouseover = function() { mouseOver() };
document.getElementById("workLog").onmouseout = function() { mouseOut() };

function mouseOver() {
    document.getElementById("tooltiptext").style.visibility = "visible";
}

function mouseOut() {
    document.getElementById("tooltiptext").style.visibility = "hidden";
}
/*
const jokuNimi = () => {
    var joku = x == "moi" ? 1 : 2;
}*/