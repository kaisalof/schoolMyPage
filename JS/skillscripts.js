//stars
function printStars() {
    var howManyStars = 0;

    for (var lists = 0; lists < 2; lists++) {
        var list = document.getElementsByTagName("ul")[lists];

        for (var i = 0; i < list.getElementsByTagName("li").length; i++) {

            switch (list.getElementsByTagName("li")[i].className) {
                case "onestar":
                    howManyStars = 1;
                    break;
                case "twostars":
                    howManyStars = 2;
                    break;
                case "threestars":
                    howManyStars = 3;
                    break;
                case "fourstars":
                    howManyStars = 4;
                    break;
                case "fivestars":
                    howManyStars = 5;
                    break;

            }
            var checkedStars = "";
            var notCheckedStars = "";

            for (var j = 0; j < howManyStars; j++) {
                checkedStars += "&#9733;".fontcolor("#FF6600");
            }
            for (var k = 0; k < (5 - howManyStars); k++) {
                notCheckedStars += "&#9733;".fontcolor("#BFBFBF");
            }

            list.getElementsByTagName("li")[i].innerHTML += (checkedStars + notCheckedStars).fontsize("5px");

        }
    }
}

function submitForm() {
    var listNumber;

    //Checks what kind of type the skill is
    if (document.getElementById("r1").checked) {
        listNumber = 0;
        document.getElementById("choose").innerHTML = "";
    } else if (document.getElementById("r2").checked) {
        listNumber = 1;
        document.getElementById("choose").innerHTML = "";
    } else {
        document.getElementById("choose").innerHTML = ("You have to choose a skill type").fontcolor("red");
    }

    //Gets the skills name
    var skillName = document.getElementById("sname").value;

    //Gets the amount of stars
    var numberOfStars = document.getElementById("stars").value;

    //Move to function that updates the list
    updateList(listNumber, skillName, numberOfStars);
}

//Updates the new skill to page
function updateList(listNumber, skillName, numberOfStars) {
    var list = document.getElementsByTagName("ul")[listNumber];
    var classStars;

    for (var i = (list.children.length - 1); i > 0; i--) {
        list.getElementsByTagName("li")[i].innerHTML = list.getElementsByTagName("li")[i - 1].innerHTML;
    }
    switch (numberOfStars) {
        case "1":
            classStars = "onestar";
            break;
        case "2":
            classStars = "twostars";
            break;
        case "3":
            classStars = "threestars";
            break;
        case "4":
            classStars = "fourstars";
            break;
        case "5":
            classStars = "fivestars";
            break;

    }

    list.getElementsByTagName("li")[0].className = classStars;

    var checkedStars = "";
    var notCheckedStars = "";

    for (var j = 0; j < numberOfStars; j++) {
        checkedStars += "&#9733;".fontcolor("#FF6600");
    }
    for (var k = 0; k < (5 - numberOfStars); k++) {
        notCheckedStars += "&#9733;".fontcolor("#BFBFBF");
    }

    list.getElementsByTagName("li")[0].innerHTML = skillName + (checkedStars + notCheckedStars).fontsize("5px");
}
printStars();