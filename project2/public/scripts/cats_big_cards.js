"use script";
(function () {
    const hamburgerEl = document.querySelector('.toggle-active');
    const dropdownContentEl = document.querySelector('.dropdownContent');
    hamburgerEl.addEventListener('click', function () {
        dropdownContentEl.classList.toggle('active');
    });

})();