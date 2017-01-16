var className = {
  searchField: ".input-field",
  clear: ".clear-query",
  search: ".button-wrap",
  ul: ".ul-wrap"
}

var listType = {
  auto: "auto-complete",
  recent: "recent-word"
}

var searchBar = {
  init: function() {
    this.textArea = document.querySelector(className.searchField);
    this.clearBtn = document.querySelector(className.clear);
    this.searchBtn = document.querySelector(className.search);
    this.autoList = document.querySelector("." + listType.auto + "-wrap");
    this.recentList = document.querySelector("." + listType.recent + "-wrap");
    this.result = "";
    this.setEvents();
  },

  setEvents: function() {
    this.clearBtn.addEventListener("click", this.clear.bind(this));
    this.searchBtn.addEventListener("click", this.saveEvent.bind(this));
    this.textArea.addEventListener("input", this.input.bind(this));
    this.textArea.addEventListener("click", this.showRecentEvent.bind(this));
  },

  show: function(ele) {
    ele.style.display = "inline-block";
  },

  hide: function(ele) {
    ele.style.display = "none";
  },

  clear: function() {
    this.textArea.value = "";
    this.hide(this.autoList);
    this.hide(this.clearBtn);
  },

  print: function(list) {
    var ulList = list.querySelector(className.ul);
    var len = this.result.length;
    var listHTML = "";
    for (var i = 0; i < len; i++) {
        listHTML += "<li>" + this.result[i] + "</li>";
    }
    ulList.innerHTML = listHTML;
    ulList.addEventListener("click", this.setValueEvent.bind(this), false);
  },

  input: function() {
    if (this.textArea.value === "") {
      this.clear();
    } else {
      this.hide(this.recentList);
      this.show(this.clearBtn);
      this.setAutoKeyword();
      this.show(this.autoList);
    }
  },

  setAutoKeyword: function() {
    var keyword = this.textArea.value;
    this.result = JSON.parse(localStorage.getItem("search:" + keyword));

    if (this.result === null) {
      var oReq = new XMLHttpRequest;
      var baseUrl = "http://localhost:8000/Documents/intern/middle_exam/data/";

      oReq.addEventListener("load", (function() {
        this.result = JSON.parse(oReq.responseText)[1];
        localStorage.setItem("search:" + keyword, JSON.stringify(this.result));
        this.print(this.autoList);
      }).bind(this));
      oReq.open("GET", baseUrl + keyword + ".json");
      oReq.send();
    } else {
      this.print(this.autoList);
    }
  },

  saveEvent: function() {
    var savedData = JSON.parse(localStorage.getItem("recent"));
    var newKeyword = this.textArea.value;

    if (savedData === null) {
      savedData = [];
    }

    if (!savedData.includes(newKeyword) && newKeyword !== "")
    savedData.push(newKeyword);

    localStorage.setItem("recent", JSON.stringify(savedData));
  },

  showRecentEvent: function() {
    if (this.textArea.value === "") {
      this.result = JSON.parse(localStorage.getItem("recent"));
      if (this.result !== null) {
        this.show(this.recentList);
        this.print(this.recentList);
      }
    }
  },

  setValueEvent: function(evt) {
    this.hide(this.recentList);
    this.hide(this.autoList);
    this.textArea.value = evt.target.innerText;
  }
}

searchBar.init();
document.addEventListener("click", getClickedElement.bind(searchBar), false);

function getClickedElement(evt) {
  if(evt.target !== this.textArea && evt.target !== this.recentList) {
    this.hide(this.recentList);
  }
}
