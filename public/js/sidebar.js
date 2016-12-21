var sideBar = document.querySelector(".artcl-sidebar");
var sideBarCloseToggle = document.querySelector(".side-toggle-close");
var sideBarBottomToggle = document.querySelector(".side-toggle-open");
var sideBarMenuToggle = document.querySelector(".artcl-menu-toc-toggle");
var bottomBar = document.querySelector(".bottom-bar");
var artclMenu = document.querySelector(".artcl-menu");
var overlay = document.querySelector(".overlay");

function sideBarOpen() {
  sideBar.style.top="0";
  overlay.style.left="0";
  overlay.style.opacity="0.8";
  document.body.style.overflow = "hidden";
}

function sideBarClose() {
  sideBar.style.top="-100vh";
  overlay.style.left="-100vw";
  overlay.style.opacity="0";
  document.body.style.overflow = "";
}

function bottomBarOpen() {
  bottomBar.style.bottom="0";
}

function bottomBarClose() {
  bottomBar.style.bottom="-50vh";
}

function artclMenuOpen() {
  artclMenu.style.right="0";
}

function artclMenuClose() {
  artclMenu.style.right="-50vw";
}

sideBarBottomToggle.addEventListener("click", function(event) {
  event.preventDefault();
  sideBarOpen();
  bottomBarClose();
  artclMenuClose();
});

sideBarMenuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  sideBarOpen();
  bottomBarClose();
  artclMenuClose();
});

sideBarCloseToggle.addEventListener("click", function(event) {
  event.preventDefault();
  sideBarClose();
  bottomBarOpen();
  artclMenuOpen();
});

overlay.addEventListener("click", function(event) {
  sideBarClose();
  bottomBarOpen();
  artclMenuOpen();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    sideBarClose();
    bottomBarOpen();
    artclMenuOpen();
  }
});
