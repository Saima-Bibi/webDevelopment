function validateForm() {
    let x = document.forms["myForm"]["Name"].value;
    let y = document.forms["myForm"]["Email"].value;
    let z = document.forms["myForm"]["Phone"].value;
    let m = document.forms["myForm"]["Message"].value;
    let flag = 1;

    // Validation for name
    var np = /[A-Za-z]+$/;

    if (x.length < 5 || x.length > 12) {
        document.getElementById("nerror").innerHTML = "name must be between 5 to 12 characters";
        document.getElementById("Name").classList.add("error1");
        flag = 0;
    } else if (!x.match(np)) {
        document.getElementById("nerror").innerHTML = "name should contain alphabets only";
        document.getElementById("Name").classList.add("error1");
        flag = 0;
    } else {
        document.getElementById("nerror").innerHTML = "";
        document.getElementById("Name").classList.remove("error1");
    }

    // Validation for email
    if (y == "") {
        document.getElementById("eerror").innerHTML = "email field must be filled out";
        document.getElementById("Email").classList.add("error1");
        flag = 0;
    } else if (!y.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        document.getElementById("eerror").innerHTML = "email field must be filled with valid email";
        document.getElementById("Email").classList.add("error1");
        flag = 0;
    } else {
        document.getElementById("eerror").innerHTML = "";
        document.getElementById("Email").classList.remove("error1");
    }

    // Validation for Phone
    if (z.length != 11) {
        document.getElementById("perror").innerHTML = "phone number must be of 11 digits";
        document.getElementById("Phone").classList.add("error1");
        flag = 0;
    } else if (isNaN(z)) {
        document.getElementById("perror").innerHTML = "only digits are allowed";
        document.getElementById("Phone").classList.add("error1");
        flag = 0;
    } else {
        document.getElementById("perror").innerHTML = "";
        document.getElementById("Phone").classList.remove("error1");
    }

    return flag === 1;
}
