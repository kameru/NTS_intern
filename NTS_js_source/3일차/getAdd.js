function getAdd(num1, num2) {
  var result = num1 + num2;
  return function() {
    console.log(result);
  }
}

var func = getAdd(10, 20);

func();
