var objData = [
{"id" : 23, "name" : "honux", "content" : "오늘의 커피는 왜 항상 맛있지?", "like" : 2, "comment" : ["^^", "i like this"]},
{"id" : 55, "name" : "nigayo", "content" : "드디어 출근!", "like" : 4, "comment" : ["이직 하셨나봐요? "]},
{"id" : 93, "name" : "jk", "content" : "어제 읽은 책이 아직도 ", "like" : 20, "comment" : ["잠자기 전에 만화책은 금물..", "그게 뭘까?"]},
{"id" : 4, "name" : "crong", "content" : "코드스쿼드가 정말 좋은 곳일까? 믿을 수가 없다..", "like" : 0, "comment" : ["누가 그러디"]}
]


function appendContent(myNewsObj, newContent) {
  myNewsObj.push(newContent);
}

function removeContent(myNewsObj, id) {
  myNewsObj.forEach(function(element, index){
    if (element["id"] === id) {
          myNewsObj.splice(index, 1);
    }
  });
}

function isContent(myNewsObj, id) {
  var result = false;
  myNewsObj.forEach(function(element) {
    if (element["id"] === id) {
      result = true;
    }
  });
  return result;
}

function checkObject(myNewsObj, correct) {
  function checkContent(element) {
    var correctKey = Object.keys(correct);
    var correctLen = correctKey.length;

    var keyList = Object.keys(element);

    if (keyList.length != correctLen) {
      return false;
    }
    for (var i = 0; i < correctLen; i++) {
      if (correctKey.indexOf(keyList[i]) == -1) {
        return false;
      }
      if (Object.getPrototypeOf(element[keyList[i]]) !== correct[keyList[i]].prototype) {
        return false;
      }
    }
    return true;
  }

  return myNewsObj.every(checkContent);
}

var newContent = {"id" : 88, "name" : "crong", "content" : "새로운글", "like" : 5, "comment" : ["댓글"]};

appendContent(objData, newContent);

console.log(objData);
console.log(isContent(objData, 88));

removeContent(objData, 88);

console.log(objData);
console.log(isContent(objData, 88));

console.log(checkObject(objData, {"id": Number, "name": String, "content": String, "like": Number, "comment": Array}));
