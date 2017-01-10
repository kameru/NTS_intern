function checkargs(a,b,type) {
  var checkResult;
  if(typeof a !== type || typeof b !== type) return false;
  else return true;
}

function multiplyDouble(num1,num2) {
  var DOUBLE = 2;
  var sum = num1 * num2;
  var result = sum * DOUBLE;

  return result;
}

function calculate(num1,num2, func) {
  if(!checkargs(num1,num2,"number")) return "not number..";
  if(typeof func !== "function") return "not function..";

  var result = func(num1,num2);
  console.log("result is ", result);
}

calculate(2,5,multiplyDouble);
calculate(10,3,multiplyDouble);
