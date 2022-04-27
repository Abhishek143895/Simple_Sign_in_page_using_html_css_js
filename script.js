const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;              //type ki gai value username name ke variable me li ja rahi hai.
    const password = loginForm.password.value;             //type kia gya passeord, password name ke variable me lia ja raha hai.

    if(username === "Abhishek1435" && password === "abhi05oct"){
        alert("You have successfully logged in.");
        location.reload();
    }
    else{
        loginErrorMsg.style.opacity = 1;
    }
})