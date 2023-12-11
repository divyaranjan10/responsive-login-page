const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
var isPassValid = false;
var isEmailValid = false;

form.addEventListener("submit", (e) => {
  // to prevent the form from submiting becuase we need to validate before it
  e.preventDefault();

  validateInput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error-border");
  inputControl.classList.remove("success-border");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = '';
  inputControl.classList.add("success-border");
  inputControl.classList.remove("error-border");
};

// this function is used to validate the input
const validateInput = () => {
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
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
        setError(password, "Enter Password");
    } 
    else if (!passRegex.test(passwordVal)) {
        isPassValid = false;
        setError(password, "Password is not valid");
    } 
    else {
        isPassValid = true;
        setSuccess(password);
    }

    //to check if login is successful
    if(isEmailValid && isPassValid)
    {
        email.value='';
        password.value='';
        window.location.assign("test.html");
    }

};
