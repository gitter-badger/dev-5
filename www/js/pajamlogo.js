var pajamLogo = document.getElementById("pajam-logo");
var pajamTrigger = document.querySelector(".bar-logo-link");

function pajamLogoAdd(x) {
  pajamLogo.innerHTML = x;
}

function pajamLogoAnim() {
  setTimeout(pajamLogoAdd, 0, "p%j*^");
  setTimeout(pajamLogoAdd, 100, "p@&am");
  setTimeout(pajamLogoAdd, 200, "p{<a/");
  setTimeout(pajamLogoAdd, 300, "*a\@#");
  setTimeout(pajamLogoAdd, 400, "pajam");
}

pajamTrigger.onmouseover = function(event) {
  pajamLogoAnim();
}
