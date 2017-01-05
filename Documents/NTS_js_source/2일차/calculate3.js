function calculateAvg() {
  var time = arguments.length;
  var sum = 0;
  for (i = 0; i < time; i++) {
    sum += arguments[i];
  }

  return sum/time;
}

console.log(calculateAvg(10, 20, 30));
