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
    topLi.style.display="block";
    menu.style.marginTop="0";
  } else {
    topLi.style.display="none";
    menu.style.marginTop="48px";
  }
  setTimeout(run, 100);
}, 100);
