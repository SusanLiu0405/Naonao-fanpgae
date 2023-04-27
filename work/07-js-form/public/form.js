"use strict";
(function () {
    const formEl = document.querySelector('.register');

    const usernameGroupEl = document.querySelector('.register__username');
    const usernameInputEl = document.querySelector('.register-username__input');
    const emailInputEl = document.querySelector('.register-email__input');
    const confirmInputEl = document.querySelector('.register-confirm__input');
    const tierGroupEl = document.querySelector('.register__tier');
    const tierInputEl = document.querySelector('.register-tier__input');

    const emailErrorEl = document.querySelector('.register-email__error');
    const confirmErrorEl = document.querySelector('.register-confirm__error');


    // assume El variables are already defined
    formEl.addEventListener('submit', (event) => {

        let isInvalid = false

        usernameGroupEl.classList.remove('register-username--invalid');
        tierGroupEl.classList.remove('register-tier--invalid');

        if (!usernameInputEl.value) {
            usernameGroupEl.classList.add('register-username--invalid');
            isInvalid = true;
        }
        if (emailInputEl.value.search("@") === -1 || !emailInputEl.value) {
            emailErrorEl.innerText = "Error! This field requires an email address!";
            isInvalid = true;
        }

        if ((!confirmInputEl.value) || (confirmInputEl.value !== emailInputEl.value)) {
            confirmErrorEl.innerText = "Error! This field is not matching the email address!"
            isInvalid = true;
        }

        if (tierInputEl.value === "") {
            tierGroupEl.classList.add('register-tier--invalid');
            isInvalid = true;
        }

        if (isInvalid) {
            event.preventDefault();
        }
    });

})();
