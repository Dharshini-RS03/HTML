function login() {

    let name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("error").innerHTML =
            "Please enter your name!";
    }

    else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("error").innerHTML =
            "Please enter a valid name!";
    }

    else {
        window.location.href =
            "Validation.html?name=" + encodeURIComponent(name);
    }
}