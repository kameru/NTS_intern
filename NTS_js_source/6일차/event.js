var test = document.getElementById("test");
var color = test.style.color;

var func = function() {
  //otherColor은 closure변수가 된다.
  var otherColor = "red";
  test.addEventListener("click", function() {
    if (test.style.color === color){
      test.style.color = otherColor;
    }
    else if (test.style.color === otherColor){
      test.style.color = color;
    }
  }, false);

  return 0;
};

func();
