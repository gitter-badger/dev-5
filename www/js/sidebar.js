var artclMenuToggle = document.querySelector(".artcl-menu-toc-toggle");
var bottomMenuToggle = document.querySelector(".bottom-bar-toc-toggle");
var sideBar = document.querySelector(".sidebar");
var sideBarCloseToggle = document.querySelector(".side-toggle-close");
var overlay = document.querySelector(".artcl__overlay");

function sideBarOpen() {
  sideBar.style.right="0";
  overlay.style.right="0";
  overlay.style.opacity="0.8";
  document.body.style.overflow = "hidden";
}

function sideBarClose() {
  sideBar.style.right="-100%";
  overlay.style.right="-100%";
  overlay.style.opacity="0";
  document.body.style.overflow = "";
}

artclMenuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  sideBarOpen();
});

bottomMenuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  sideBarOpen();
});

sideBarCloseToggle.addEventListener("click", function(event) {
  event.preventDefault();
  sideBarClose();
});

overlay.addEventListener("click", function(event) {
  sideBarClose();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    sideBarClose();
  }
});
