
function calculate (a, b, func) {
  if (arguments.length !== 3) {
    return
  }

  if (Object.getPrototypeOf(a) !== Number.prototype || Object.getPrototypeOf(b) !== Number.prototype) {
    return "Please input number.";
  }

  if (Object.getPrototypeOf(func) !== Function.prototype) {
    return "Please input function.";
  }

  return func(a, b);
}

var sum = function(a, b) {
  return a + b;
}

var minus = function(a, b) {
  return a - b;
}

var multiply = function(a, b) {
  return a * b;
}

var sumResult = calculate(10, 20, sum);
var minusResult = calculate(10, 20, minus);
var multiplyResult = calculate(10, 20, multiply);
var error = calculate(10, 20, "sum");

console.log("sum is " + sumResult);
console.log("minus is " + minusResult);
console.log("multiply is " + multiplyResult);
console.log(error);
