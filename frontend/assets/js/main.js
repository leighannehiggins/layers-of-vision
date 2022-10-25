// Dark/Light mode switcher
// Ref: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

// GF edits to detect system/user-agent mode
// const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

const toggleSwitch = document.querySelector(
  '.switch.theme input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

// Check for saved user preference, if any, on load of the website
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
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
