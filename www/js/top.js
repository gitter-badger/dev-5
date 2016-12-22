var topLi = document.querySelector(".artcl-menu-top");
var topToggle = document.querySelector(".artcl-menu-top-toggle");

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
  if(top > 250) {
    topLi.style.left="0vw";
  } else {
    topLi.style.left="50vw";
  }
  setTimeout(run, 500);
}, 500);
