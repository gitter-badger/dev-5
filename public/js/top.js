var topLi = document.querySelector(".artcl-menu-top");
var topToggle = document.querySelector(".artcl-menu-top-toggle");
var menu = document.querySelector(".artcl-menu");
var menuSpan = document.querySelector(".artcl-menu-link-toc");

var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

topToggle.addEventListener("click", function(event) {
  event.preventDefault();
  up();
});

setTimeout(function run() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 50) {
    topLi.style.left="0vw";
    menu.style.width="8%";
    menuSpan.style.display="none";
  } else {
    topLi.style.left="50vw";
    menu.style.width="25%";
    menuSpan.style.display="inline";
  }
  setTimeout(run, 100);
}, 100);
