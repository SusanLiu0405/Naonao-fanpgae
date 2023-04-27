"use strict";
(function () {
    // Your code here!
    //nimabi
    const buttonEl = document.querySelector(".toggle-active");
    const demoEl = document.querySelector(".demo");
    buttonEl.addEventListener("click", function () {
        demoEl.classList.toggle("active");
    });

})();
