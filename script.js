"use strict";

function darkMode() {
  document.body.classList.toggle("dark-mode");
}

// Einfacher Slider
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", darkMode);

// Slider mit SVG Icons
const DmToggle = document.getElementById("dm-toggle");
DmToggle.addEventListener("change", darkMode);

const secondToggle = document.getElementById("second-toggle");
secondToggle.addEventListener("change", darkMode);
