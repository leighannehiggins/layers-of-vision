// Dark/Light mode switcher
// Ref: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

// GF edits to detect system/user-agent mode
// const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

const toggleSwitch = document.querySelector(
  '.switch.theme.desktop input[type="checkbox"]'
);
const toggleSwitchMob = document.querySelector(
  '.switch.theme.mob input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

// Check for saved user preference, if any, on load of the website
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleSwitchMob.checked = true;
  }
}

// Adding the event handlers and store the user preference for future visits
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
toggleSwitchMob.addEventListener("change", switchTheme, false);

// Resize font
let fontToggler = document.getElementById("font-switcher");
let fontTogglerMob = document.getElementById("font-switcher-mob");

function toggleFont() {
  document.getElementById("top").classList.toggle("zoom");
}

fontToggler.addEventListener("click", toggleFont);
fontTogglerMob.addEventListener("click", toggleFont);

// toggle aria-expanded attribute value for collapsed menu

let hamburgerMenu = document.querySelector(".navbar-burger");
let mainNav = document.querySelector(".main-nav");

function toggleMenuAttr() {
  let iconState = document
    .querySelector(".navbar-burger")
    .getAttribute("aria-expanded");
  if (iconState === "false") {
    hamburgerMenu.classList.toggle("opened");
    hamburgerMenu.setAttribute("aria-expanded", "true");
    mainNav.classList.toggle("show");
  } else {
    hamburgerMenu.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("show");
  }
}

hamburgerMenu.addEventListener("click", toggleMenuAttr);

// Trigger logo animation on homepage on first scroll only
let homeLogo = document.querySelector(".lov-logo");

function animateLogo() {
  homeLogo.classList.add("animation");
  homeLogo.classList.add("regular");
}

window.addEventListener("scroll", animateLogo, { once: true });
