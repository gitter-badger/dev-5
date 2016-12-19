var sidebarOpen = document.querySelector(".side-toggle-open");
var sidebar = document.querySelector(".artcl-sidebar");
var sidebarClose = document.querySelector(".side-toggle-close");
var overlay = document.querySelector(".overlay");
var bottomBar = document.querySelector(".bottom-bar");

function openBar() {
  event.preventDefault();
  sidebar.style.top="0";
  bottomBar.style.bottom="-50vh";
  overlay.style.left="0";
  overlay.style.opacity="0.8";
  document.body.style.overflow = "hidden";
}

function closeBar() {
  event.preventDefault();
  sidebar.style.top="-100vh";
  bottomBar.style.bottom="0";
  overlay.style.left="200vw";
  overlay.style.opacity="0";
  document.body.style.overflow = "";
}

sidebarOpen.addEventListener("click", function(event) {
  openBar();
});

sidebarClose.addEventListener("click", function(event) {
  closeBar();
});

overlay.addEventListener("click", function(event) {
  closeBar();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    closeBar();
  }
});
