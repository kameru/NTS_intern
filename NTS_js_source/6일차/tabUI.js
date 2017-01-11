
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

  prevTab.classList.remove(tabClass);
  target.classList.add(tabClass);

  prevSection.classList.remove(sectionClass);
  targetSection.classList.add(sectionClass);

  loadInfo(targetId);
}

function setEvent() {
  var tabList = document.querySelectorAll(".tab");
  loadInfo(tabList[0].id);
  for (var i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener("click", clickEvent, false);
  }
}

document.addEventListener("DOMContentLoaded", setEvent, false);

function loadInfo(id) {
  var savedItem = JSON.parse(localStorage.getItem(id));

  if (savedItem !== null && new Date() - Date.parse(savedItem.time) < 60000) {
    document.getElementById("my_" + id).innerHTML = savedItem.content;
  } else {
    var sectionMap = {
      "position": 1,
      "friend": 2,
      "theme": 3,
      "news": 4
    };

    var oReq = new XMLHttpRequest;
    var targetNum = sectionMap[id];
    var baseUrl = "http://jsonplaceholder.typicode.com/posts/";

    oReq.addEventListener("load", function(evt) {
      update(evt.target, id);
    });
    oReq.open("GET", baseUrl + targetNum);
    oReq.send();
  }
}

function update(oReq, id) {
  var obj = JSON.parse(oReq.responseText);
  var str = "<ul ><li><div class=\"myName\"><%=title%></div><div class=\"myDesc\" ><%=body%></div></li></ul>";
  var template = _.template(str);
  var result = template(obj);

  document.getElementById("my_" + id).innerHTML = result;

  var newItem = {"content":result, "time": new Date()};
  localStorage.setItem(id, JSON.stringify(newItem));
}
