function showInput(form) {
    document.getElementById("showName").innerHTML = "Name: " + document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    document.getElementById("showGender").innerHTML = "Gender: " + document.getElementById("gender").value;
    document.getElementById("showAge").innerHTML = "Age: " + document.getElementById("age").value;
    document.getElementById("showEmail").innerHTML = "Email: " + document.getElementById("email").value;
    document.getElementById("showWeb").innerHTML = "Website: " + document.getElementById("website").value;
    document.getElementById("showComment").innerHTML = "Comments: " + document.getElementById("comment").value;

    return false;
}