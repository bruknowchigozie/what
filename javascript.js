function togglePassword() {
    const passwordField = document.getElementById('toggler');
    const toggleIcon = document.querySelector('.toggle-password');


    if(passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.computedStyleMap.backgroundImage = 'url("close-eye.svg")'; 
    }else{
        passwordField.type='password';
        toggleIcon.syle.backgroundImage='url("open-eye.svg")';
    }
}