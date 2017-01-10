var test = document.getElementById("test");

var func = function() {
  test.addEventListener("click", function(evt) {
    console.log("clicked");
  }, false);

  return 0;
};

document.addEventListener("DOMContentLoaded", function(evt) {
  console.log("loaded");
  func();
});
