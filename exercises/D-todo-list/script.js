function todoList(todos) {
  // Write your code here...
  let unOrderedListTag = document.createElement("ul");
  document.getElementById("content").appendChild(unOrderedListTag);
  for (var i = 0; i < todos.length; i++) {
    let listTag = document.createElement("li");
    let anchorTag = document.createElement("a"); // add link element
    anchorTag.id = "anchor"; // give the element an id
    let listText = document.createTextNode(`${todos[i].todo}`); // text inside a list
    anchorTag.appendChild(listText);
    listTag.appendChild(anchorTag);
    document
      .getElementById("content")
      .getElementsByTagName("ul")[0]
      .appendChild(listTag);
    // click function
    var clickFunction = function strikeThrough(event) {
      listTag.style.textDecoration = "line-through";
    };
    anchorTag.addEventListener("click", clickFunction);
  }
}
const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
