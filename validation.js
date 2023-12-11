const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const body = document.querySelector("#main-body");
var isPassValid = false;
var isEmailValid = false;

form.addEventListener("submit", (e) => {
  // to prevent the form from submiting because we need to validate before it
  e.preventDefault();

  flag=validateInput();
    if(flag){
        email.value='';
        password.value='';
        window.location.assign("test.html");
    }
});


body.addEventListener("click",(e)=>{
    if(email.value.length != 0  || password.value.length!=0){
        validateInput();
    }
});


// used for setting error message
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
};


// when there's no error it removes the 'error'
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';
};


// this function is used to validate the input
const validateInput = () => {
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const passRegex = /(.*)/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // validations for email
    if (emailVal === "") {
        isEmailValid = false;
        setError(email, "Email is required");
    } 
    else if (!emailRegex.test(emailVal)) {
        isEmailValid = false;
        setError(email, "Email is not valid");
    } 
    else {
        isEmailValid = true;
        setSuccess(email);
    }

    // validations for password
    if (passwordVal === "") {
        isPassValid = false;
        setError(password, "Password is required");
    } 
    else if (passwordVal.length < 8) {
        isPassValid = false;
        setError(password, "Too Short");
    } 
    else if(passRegex.test(passwordVal) && passwordVal.length >= 8) {
        isPassValid = true;
        setSuccess(password);
    }

    //to check if login is successful, if successful return true
    if(isEmailValid && isPassValid)
    {
        return true;
    }

};
