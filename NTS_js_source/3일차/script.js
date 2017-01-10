function plus(num1, nums) {
  if (checkargs(num1, num2, "number"))
    return num1 + num2;
  console.log("타입이 틀린 거 같아요");
}

function checkargs() {
  var len = arguments.length-1;
  var type = arguments[len];
  for (var i = 0; i < len; i++) {
    if (typeof arguments[i] !== type) {
      return false;
    }
  }
  return true;
}
