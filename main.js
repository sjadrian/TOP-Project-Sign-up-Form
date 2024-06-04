document.addEventListener("DOMContentLoaded", function() {

    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirmPassword').value;
    let error = document.getElementById("error");

    console.log(password);
    console.log(confirmPassword);

    if (password == "" && confirmPassword == "") {
        error.innerHTML ="*passwords do not match";
        console.log("initial load");
    } 

    const passwordInput = document.getElementById('password');
    const confPasswordInput = document.getElementById('confirmPassword');

    passwordInput.addEventListener('input', function() {

        let password = document.querySelector('#password').value;
        let confirmPassword = document.querySelector('#confirmPassword').value;


        console.log(password);
        console.log(confirmPassword);
        
        if (password == confirmPassword) {
            error.innerHTML = "";
            console.log("match");
        } else {
            error.innerHTML ="*passwords do not match";
        }
        console.log("hi");
    });

    confPasswordInput.addEventListener('input', function() {

        let password = document.querySelector('#password').value;
        let confirmPassword = document.querySelector('#confirmPassword').value;


        console.log(password);
        console.log(confirmPassword);
        
        if (password == confirmPassword) {
            error.innerHTML = "";
            console.log("match");
        } else {
            error.innerHTML ="*passwords do not match";
        }
        console.log("hi");
    });
})


