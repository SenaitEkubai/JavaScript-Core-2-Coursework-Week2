function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  let unOrderListTag = document.createElement("ol");
  unOrderListTag.id = "ul-id"; // gives an id name
  document.getElementById("content").appendChild(unOrderListTag);
  for (var i = 0; i < arrayOfPeople.length; i++) {
    const list = document.createElement("li");
    const listText = document.createTextNode(
      `${arrayOfPeople[i].name}-${arrayOfPeople[i].job}`
    );
    list.style.fontSize = "30px";
    list.appendChild(listText);
    document
      .getElementById("content")
      .getElementsByTagName("ol")[0]
      .appendChild(list);
    let h1Tag = document.createElement("h1");
    h1Tag.style.background = "grey"; //change background color
    h1Tag.style.textAlign = "center"; // align h1 element center

    let h1Text = document.createTextNode(arrayOfPeople[i].name);
    h1Tag.appendChild(h1Text);
    document.getElementById("content").appendChild(h1Tag);
    let h2Tag = document.createElement("h2");
    h2Tag.style.textAlign = "center";
    let h2Text = document.createTextNode(`${arrayOfPeople[i].job}`);
    h2Tag.appendChild(h2Text);
    document.getElementById("content").appendChild(h2Tag);
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

/* let name = document.createElement("h1");
let job = document.createTextNode(`${people[0].name}`);
name.appendChild(job);
document.getElementById("content").appendChild(name);
let x = document.createTextNode("h2", "this is my text");
document.body.appendChild(x); */
