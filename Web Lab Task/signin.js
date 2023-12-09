const correctUsername = "user";
const correctPassword = "password";

let remainingTrials = 5;

function validateCredentials() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        window.location.href = "portfolio.html";
    } else {
        remainingTrials--;

        if (remainingTrials > 0) {
            alert(`Incorrect credentials. ${remainingTrials} trials remaining.`);
        } else {
            alert("You've exceeded the maximum number of trials. The form will be disabled.");
            document.getElementById('signInForm').querySelectorAll('input, button').forEach(element => {
                element.disabled = true;
            });
        }

        document.getElementById('trialCounter').innerText = `Remaining trials: ${remainingTrials}`;
    }
}