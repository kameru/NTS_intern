var arr = ["크롱", "jk", "honux", [ "코니", "샐리"], "브라이언"];

var lineFriend = arr[3];
var sally = lineFriend[1];

console.log("샐리" === arr[3][1]);

function printArrayElement(arr) {
  var len = arr.length;
  function getArrayElement(element,index) {
    if(Array.isArray(element)) {
        var str = "array element는 " + index + "번째에 있으며, 그 값은 '";
        for (var i = 0; i < element.length; i++) {
          if (i != 0) {
            str += " ";
          }
          str += element[i];
        }
        str += "' 입니다.";
        console.log(str);
      }
    }
  arr.forEach(getArrayElement);
}

function getNotArrayElement(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      arr.splice(i, 1);
    }
  }
}
