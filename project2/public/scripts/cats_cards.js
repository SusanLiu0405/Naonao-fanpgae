"use script";
(function () {
    // form validation
    const formEl = document.querySelector('.subscribe');
    const emailInputEl = document.querySelector('.subscribe--email__input');
    const confirmInputEl = document.querySelector('.subscribe--confirm__input');

    //Add element named emailError and also add classes in span
    const emailErrorEl = document.querySelector('.subscribe--email__error__message')
    const confirmErrorEl = document.querySelector('.subscribe--confirm__error__message')

    // use these two functions
    // validate value in the email input box and the confirm input box
    function isInvalidEmail(email) {
        if (email === "") {
            emailErrorEl.innerText = "This Field is Required";
            return true;
        }
        if (email.search("@") === -1) {    // alternative: !emailInputEl.includes("@")
            emailErrorEl.innerText = "This field must be a valid email address including @";
            return true;
        } else {
            emailErrorEl.innerText = "";
            return false;
        }
    };

    function isInvalidConfirm(email, confirm) {
        if (confirm === "") {
            confirmErrorEl.innerText = "This Field is Required";
            return false;
        }
        if (confirm === email && email !== "" && confirm != "") {
            confirmErrorEl.innerText = "";
            return false;
        } else {
            confirmErrorEl.innerText = "This field must match the email address above!";
            return true;
        }
    };

    // use change event to prevent from submitting the form when validation fails
    // and also shows error message
    emailInputEl.addEventListener('change', (event) => {
        if (isInvalidEmail(emailInputEl.value)) {
            event.preventDefault();
        }
    });
    confirmInputEl.addEventListener('change', (event) => {
        if (isInvalidConfirm(emailInputEl.value, confirmInputEl.value)) {
            event.preventDefault();
        }
    });

    // use submit event to prevent from submitting the form when validation fails
    // and shows error message
    formEl.addEventListener('submit', (event) => {
        let isInvalid = false;
        if (isInvalidEmail(emailInputEl.value)) {
            isInvalid = true;
        }
        if (isInvalidConfirm(emailInputEl.value, confirmInputEl.value)) {
            isInvalid = true;
        }
        if (isInvalid) {
            event.preventDefault();
        }
    });

    // open or close the dialog
    const modalEl = document.querySelector('.modal');
    const openEl = document.querySelector('.cards');

    const closeEl = document.querySelector('.modal__dialog--close');

    openEl.addEventListener('click', (e) => {
        // as there are many open buttons in cards class
        // so we need to set querySelector('.cards')
        // and use e.target.classList.contains('modal--open') to select every open button
        // thx to Brett!
        if (e.target.classList.contains('modal--open')) {
            modalEl.showModal();
        }
    });
    closeEl.addEventListener('click', () => {
        modalEl.close();
    });

    // Hamburger Menu
    const hamburgerEl = document.querySelector('.toggle-active');
    const dropdownContentEl = document.querySelector('.dropdownContent');
    hamburgerEl.addEventListener('click', function () {
        dropdownContentEl.classList.toggle('active');
    });


})();