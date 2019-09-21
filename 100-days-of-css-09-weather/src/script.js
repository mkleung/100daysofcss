var body = document.querySelector("body");

var interval = window.setInterval(function() {
  var drop = document.createElement("div");
  drop.style.left = Math.round(Math.random() * 1024) + "px";
  body.appendChild(drop);
  drop.className = "drop layer" + Math.floor(Math.random() * 3);
}, 100);

window.setTimeout(function() {
  window.clearInterval(interval);
}, 15000);