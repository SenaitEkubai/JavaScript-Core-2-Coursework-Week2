function shoppingList(arrayOfPeople) {
  // Write your code here...
  const title = document.createElement("h2");
  const text = document.createTextNode("Shopping list");
  title.appendChild(text);
  document.getElementById("content").appendChild(title);
  const unOrderedList = document.createElement("ul");
  document.getElementById("content").appendChild(unOrderedList);

  for (var i = 0; i < arrayOfPeople.length; i++) {
    const listTag = document.createElement("li");
    const listText = document.createTextNode(`${arrayOfPeople[i]}`);
    listTag.appendChild(listText);
    document
      .getElementById("content")
      .getElementsByTagName("ul")[0]
      .appendChild(listTag);
    listTag.style.fontSize = "28px";
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
