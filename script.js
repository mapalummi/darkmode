'use strict';

function darkMode(){
    document.body.classList.toggle('dark-mode');
}

const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', darkMode);