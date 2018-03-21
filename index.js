function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let collection = document.querySelectorAll(".ranked-list")
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].length; j++) {
      collection[i].children[j].innerHTML = parseInt(collection[i].children[j].innerHTML,10)+n;
    }
  }
}

function deepestChild() {

}
