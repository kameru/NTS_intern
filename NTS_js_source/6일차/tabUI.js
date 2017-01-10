var sectionMap = {
  "position": 1,
  "friend": 2,
  "theme": 3,
  "news": 4
}

function clickEvent(evt) {

  var tabClass = "selectedTab";
  var sectionClass = "eleDisplayShow";

  // var target = evt.target.closest(".tab");
  var target = evt.target;
  if (target.tagName === "SPAN") {
    target = target.parentElement;
  }

  var targetId = target.id;
  var targetSection = document.getElementById("my_" + targetId);

  var prevTab = document.querySelector("." + tabClass);
  var prevSection = document.querySelector("." + sectionClass);

  loadInfo(targetId);

  prevTab.classList.remove(tabClass);
  target.classList.add(tabClass);

  prevSection.classList.remove(sectionClass);
  targetSection.classList.add(sectionClass);
}

function setEvent() {
  var tabList = document.querySelectorAll(".tab");
  loadInfo(tabList[0].id)
  for (var i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener("click", clickEvent, false);
  }
}

document.addEventListener("DOMContentLoaded", setEvent, false);

function loadInfo(id) {
  var oReq = new XMLHttpRequest;
  var targetNum = sectionMap[id];
  var result;

  oReq.addEventListener("load", function() {
    update(oReq, id);
  });
  oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/" + targetNum);
  oReq.send();
}

function update(oReq, id) {
  var result = JSON.parse(oReq.responseText);
  var str = "<ul ><li><div class=\"myName\" ><%=title%></div><div class=\"myDesc\" ><%=body%></div></li></ul>"
  var template = _.template(str);
  console.log(template(result));
  document.getElementById("my_" + id).innerHTML = template(result);
}
