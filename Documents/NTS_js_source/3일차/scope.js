// var globalName = "Kim";
//
// function setName(lastName) {
//   firstName = "youn";
//   console.log('my name is', firstName + lastName);
// }
//
// setName(globalName);
//
// console.log(globalName);
// console.log(firstName);


function setName(lastName) {
  function printName() {
    var firstName = "youn";
    console.log('my name is', firstName + lastName);
  }

  printName();
  console.log(firstName);
}
