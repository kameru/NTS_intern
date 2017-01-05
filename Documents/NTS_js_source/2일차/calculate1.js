
function calculate (a, b, oper) {
  if (arguments.length !== 3) {
    return "Please input 2 number and 1 operator."
  }
  debugger;
  if (Object.getPrototypeOf(a) !== Number.prototype || Object.getPrototypeOf(b) !== Number.prototype) {
    return "Please input number.";
  }

  var result;
  switch (oper) {
    case "plus":
      result = a + b;
      break;
    case "minus":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    default:
      result = "wrong operator";
  }

  return result;
}

console.log(calculate(10, 20, "plus"));
console.log(calculate(10, 20, "minus"));
console.log(calculate(10, 20, "multiply"));
console.log(calculate(10, 30, "multiply"));
console.log(calculate(10, 20, "plusss"));
console.log(calculate(10, "plus"));
console.log(calculate("10", "20", "plus"));
