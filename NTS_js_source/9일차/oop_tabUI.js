var ClassName = {
  tab : "selectedTab",
  section : "eleDisplayShow"
}

Object.freeze(ClassName);

document.addEventListener("DOMContentLoaded", set, false);

function set() {
  var tabList = document.querySelectorAll(".tab");
  var startTab = new UISet(tabList[0].id);
  startTab.select();
  for (var i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener("click", clickEvent, false);
  }
}

function clickEvent(evt) {
  var target = evt.target;
  if (target.tagName === "SPAN") {
    target = target.parentElement;
  }
  var targetId = target.id;

  var currentUI = new UISet(targetId);
  var prevUI = new UISet(document.querySelector("." + ClassName.tab).id);

  currentUI.select();
  prevUI.unselect();
}

/* UI item set */
function UISet(id) {
  this.eleTab = new TabItem(id);
  this.eleSection = new SectionItem(id);
}

UISet.prototype.select = function() {
  this.eleTab.addClass(ClassName.tab);
  this.eleSection.addClass(ClassName.section);
  this.eleSection.loadInfo();
}
UISet.prototype.unselect = function() {
  this.eleTab.removeClass(ClassName.tab);
  this.eleSection.removeClass(ClassName.section);
}

/* Tab Item */
function TabItem(id) {
  this.item = document.getElementById(id);
}

TabItem.prototype.addClass = function(className) {
  this.item.classList.add(className);
}
TabItem.prototype.removeClass = function(className) {
  this.item.classList.remove(className);
}

/* Section item */
function SectionItem(id) {
  this.id = id;
  this.item = document.getElementById("my_" + id);
}

SectionItem.prototype.sectionMap = {
  "position": 1,
  "friend": 2,
  "theme": 3,
  "news": 4
};

SectionItem.prototype.loadInfo = function() {
  var savedItem = JSON.parse(localStorage.getItem(this.id));

  if (savedItem === null || new Date() - Date.parse(savedItem.time) > 60000) {
    var oReq = new XMLHttpRequest;
    var targetNum = this.sectionMap[this.id];
    var baseUrl = "http://jsonplaceholder.typicode.com/posts/";
    var self = this;

    oReq.addEventListener("load", function(evt) {
      self.update(oReq, this.id);
    });
    oReq.open("GET", baseUrl + targetNum);
    oReq.send();
  } else {
    this.setItem(savedItem.content);
  }
}
SectionItem.prototype.update = function(oReq, id) {
  var obj = JSON.parse(oReq.responseText);
  var str = "<ul ><li><div class=\"myName\"><%=title%></div><div class=\"myDesc\" ><%=body%></div></li></ul>";
  var template = _.template(str);
  var result = template(obj);

  this.item.innerHTML = result;

  var newItem = {"content":result, "time": new Date()};
  localStorage.setItem(id, JSON.stringify(newItem));
}

SectionItem.prototype.setItem = function(text) {
  this.item.InnerHTML = text;
}
SectionItem.prototype.addClass = function(className) {
  this.item.classList.add(className);
}
SectionItem.prototype.removeClass = function(className) {
  this.item.classList.remove(className);
}
