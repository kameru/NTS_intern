var friend = {name: "john", article: "asdf", comment: "qwerty", like: 10};

for (var obj in friend) {
  console.log(obj + ": " + friend[obj])
}
Object.keys(friend).forEach(function(key) {
  console.log(friend[key])
});

var objData = [
{"id" : 23, "name" : "honux", "content" : "오늘의 커피는 왜 항상 맛있지?", "like" : 2, "comment" : ["^^", "i like this"]},
{"id" : 55, "name" : "nigayo", "content" : "드디어 출근!", "like" : 4, "comment" : ["이직 하셨나봐요? "]},
{"id" : 93, "name" : "jk", "content" : "어제 읽은 책이 아직도 ", "like" : 20, "comment" : ["잠자기 전에 만화책은 금물..", "그게 뭘까?"]},
{"id" : 4, "name" : "crong", "content" : "코드스쿼드가 정말 좋은 곳일까? 믿을 수가 없다..", "like" : 0, "comment" : ["누가 그러디"]}
]
