var btn = document.querySelector(".toggle");
var box = document.querySelector(".my-layer");

var clickEvent = function(evt) {
  if(btn.innerText === "close") {
    btn.innerText = "open";
    box.style.display = "none";
  } else if(btn.innerText === "open") {
    btn.innerText = "close";
    box.style.display = "block";
  }
}

btn.addEventListener("click", clickEvent, false);


function getCssElement(element, property) {
  var style = window.getComputedStyle(element, null);
  return style.getPropertyValue(property);
}
