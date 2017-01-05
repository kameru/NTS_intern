function sumTo (end) {
  var sum = 0;
  for (var i = 1; i <= end; i++) {
    sum += i;
  }

  var i = 1;
  while (i <= 100) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(sumTo(100));

function primeSumTo (end) {
  var sum = 0;
  for (var i = 2; i <= end; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) {
        break;
      }
    }
    if (i == j) {
      sum += i;
    }
  }
  var i = 2;
  while (i <= end) {
    var j = 2;
    while (j < i) {
      if (i % j == 0) {
        break;
      }
      j++;
    }
    if (i == j) {
      sum += i;
    }
    i++;
  }

  return sum;
}

console.log(primeSumTo(100));
