function myMethod() {
  // console.log(this);
  return this;
}

console.log(this);

var obj = {
  name: "codesquad",
  myMethod: function() {
    console.log(this);
    return this;
  }
}

obj.myMethod();

var obj = {
  name: "jisu"
}

var myBindMethod = myMethod.bind(obj);
myBindMethod();

var result1 = myMethod();
var result2 = new myMethod();

// console.log(result1);
// console.log(result2);

function myMethod () {
    this.name = "joe";
}
myMethod.prototype.getName = function() {
  return this.name;
}
var result = new myMethod();
result.getName();
