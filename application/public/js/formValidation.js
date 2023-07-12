var valid = false;
var pass;

document.getElementById('username').addEventListener('input', function(ev) {

    var userInput = ev.target;
    userInput.setAttribute('required', '');
    var username = userInput.value;
    var letters = /^[A-Za-z]+$/;
    var alphanumerics = /^[0-9a-zA-Z]+$/;
    err =[];

    if(username.length < 3 || !username.charAt(0).match(letters) || !username.match(alphanumerics)){
        userInput.setAttribute("class", "invalid-input");
        err.push("Minimum length of 3 characters.")
        err.push("Username should start with an alphabet.");
        err.push("Username should only contain alphanumeric characters.");
        valid = false;
    }else{
        userInput.setAttribute("class", "valid-input");
        valid = true;
    }
    userInput.setCustomValidity(err.join("\n"));
    userInput.reportValidity();
})

document.getElementById('password').addEventListener('input', function(ev){

    var userInput = ev.target;
    var password = userInput.value;
    var upperCase = /(?=.*[A-Z])/;
    var lowerCase = /(?=.*[a-z])/;
    var numerics = /(?=.*[0-9])/;
    var special = /(?=.*[/*-+!@#$^&~\[|\]])/;
    err =[];

    if(password.length < 8 || !password.match(upperCase) || !password.match(lowerCase) || !password.match(numerics) || !password.match(special)) {
        userInput.setAttribute("class", "invalid-input");
        err.push("Minimum length of 8 characters.");
        err.push("Password should contain atleast 1 number.");
        err.push("Password should contain atleast 1 Upper Case letter.");
        err.push("Password should contain atleast 1 special character: (/ * - + ! @ # $ ^ & ~ [ ]).");
        valid = false;
    }else{
        userInput.setAttribute("class", "valid-input");
        valid = true;
    }

    userInput.setCustomValidity(err.join("\n"));
    userInput.reportValidity();

    pass = password;
    
    console.log(password);
})

document.getElementById('confirmPassword').addEventListener('input', function(ev) {
    var userInput = ev.target;
    var passwordConfirmation = userInput.value;
    err =[];
//Sukrit@123
    if(passwordConfirmation === pass){
        userInput.setAttribute("class", "valid-input");
        valid = true;
    }else{
        userInput.setAttribute("class", "invalid-input");
        err.push("Should be same as Password");
        valid = false;
    }

    userInput.setCustomValidity(err.join("\n"));
    userInput.reportValidity();
})

function requiredFunc() {
    document.getElementById('username').required = true;
    document.getElementById('password').required = true;
    document.getElementById('confirmPassword').required = true;
    document.getElementById('email').required = true;

}

document.getElementById('registration').addEventListener('submit', function(ev) {
    if(valid){
        ev.target.submit();
    }else{
        ev.preventDefault();
    }
})
