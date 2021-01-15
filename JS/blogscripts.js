//Get blog's name and move it to Popular posts list
//Set correct href for list element
function blogName() {
    //1st popular
    document.getElementById("firstPopular").innerHTML = document.getElementsByClassName("card")[2].firstElementChild.innerHTML;
    var h = "#" + document.getElementsByClassName("card")[2].id;
    document.getElementById("firstPopular").setAttribute("href", h);

    //2nd popular
    document.getElementById("secondPopular").innerHTML = document.getElementsByClassName("card")[1].firstElementChild.innerHTML;
    var i = "#" + document.getElementsByClassName("card")[1].id;
    document.getElementById("secondPopular").setAttribute("href", i);

    //3rd popular
    document.getElementById("thirdPopular").innerHTML = document.getElementsByClassName("card")[4].firstElementChild.innerHTML;
    var j = "#" + document.getElementsByClassName("card")[4].id;
    document.getElementById("thirdPopular").setAttribute("href", j);
}
blogName();