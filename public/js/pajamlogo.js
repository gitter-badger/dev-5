var pajamLogo = document.getElementById("pajam-logo");

function pajamLogoAdd(x) {
  pajamLogo.innerHTML = x;
}

function pajamLogoAnim() {
  setTimeout(pajamLogoAdd, 0, "p%");
  setTimeout(pajamLogoAdd, 50, "p@&");
  setTimeout(pajamLogoAdd, 100, "p{</");
  setTimeout(pajamLogoAdd, 150, "p*|@#");
  setTimeout(pajamLogoAdd, 200, "pajam");
}

function pajamLogoClear() {
  pajamLogo.innerHTML = "p";
}

pajamLogo.onmouseover = function(event) {
  pajamLogoAnim();
}

pajamLogo.onmouseout = function(event) {
  setTimeout(pajamLogoClear, 201);
}
