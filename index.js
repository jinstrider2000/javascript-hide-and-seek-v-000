function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let collection = document.querySelectorAll(".ranked-list")
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].children.length; j++) {
      collection[i].children[j].innerHTML = `${parseInt(collection[i].children[j].innerHTML,10)+n}`;
    }
  }
}

function deepestChild() {
  let current_level = document.getElementById("grand-node");
  var next_level, deepest_level;
  let found = false;
  while (found === false) {
    next_level = current_level[0].children
    if (next_level == undefined) {
      deepest_level = current_level;
      found = true;
    }
    else {
      current_level = next_level;
    }
  }
  return deepest_level
}