const themeBtn = document.querySelector(".link-btn");
const themeText = document.querySelector("#current-theme-text");
const rootElement = document.documentElement;

// Define your available themes in order
const themes = ["light", "dark", "coral", "blue"];

// 1. Initialize: Load saved theme or default to index 0
let currentTheme = localStorage.getItem("user-theme") || themes[0];
applyTheme(currentTheme);

// 2. Event listener for the cycle button
themeBtn.addEventListener("click", () => {
  // Find the index of the current theme and move to the next one
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length;
  
  currentTheme = themes[nextIndex];
  
  applyTheme(currentTheme);
  localStorage.setItem("user-theme", currentTheme);
});

/**
 * Updates the data-theme attribute and UI text
 */
function applyTheme(theme) {
  rootElement.setAttribute("data-theme", theme);
  // Capitalize the first letter for the button text
  themeText.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
}