"use strict";

function darkMode() {
  document.body.classList.toggle("dark-mode");
}

const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", darkMode);

const DmToggle = document.getElementById("dm-toggle");
DmToggle.addEventListener("change", darkMode);

const secondToggle = document.getElementById("second-toggle");
secondToggle.addEventListener("change", darkMode);
