function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (var i = 0; i < arrayOfPeople.length; i++) {
    const list = document.createElement("li");
    const listText = document.createTextNode(
      `${arrayOfPeople[i].name}-${arrayOfPeople[i].job}`
    );
    list.appendChild(listText);
    document.body.appendChild(list);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

/* const elem = document.createElement("h1");
const elemText = document.createTextNode("List of names and their jobs");
elem.appendChild(elemText);
document.body.appendChild(elem); */
