let passwordValid = document.querySelector('.validity');

function check() {
    var input = document.getElementById('confirm_password');
    if (input.value != document.getElementById('user_password').value) {
        // input.setCustomValidity('Password Must be Matching.')
        passwordValid.textContent = "*password doesnt match";
    } else {
        // input is valid -- reset the error message
        // input.setCustomValidity('');
        passwordValid.textContent = ''
    }
};