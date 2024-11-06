const validUsername = "admin";
const validPassword = "admin";
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.location.href = "cc.html";
    } else {
        errorMessage.style.display = "block";
    }
}
