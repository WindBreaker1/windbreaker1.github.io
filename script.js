// ------------------------------------------ //
// Hide/Show Aside //

document.addEventListener('DOMContentLoaded', function() {
  let aside = document.querySelector(".aside");
  let mainPage = document.querySelector(".main-page");
  let menuIcon = document.querySelector(".menu-icon");

  if (!menuIcon || !aside || !mainPage) {
    console.error("Menu elements not found");
    return;
  }

  menuIcon.addEventListener("click", () => {
    aside.classList.toggle("hidden");
    mainPage.classList.toggle("expanded");
  });
});