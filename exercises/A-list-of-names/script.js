function listOfNames(arrayOfPeople) {
  for (var i = 0; i < people.length; i++) {
    const h1Tag = document.createElement("h1");
    const h2Tag = document.createElement("h2");
    h1Tag.innerHTML = `${people[i].name}`;
    h2Tag.innerHTML = `${people[i].job}`;
    document.getElementById("content").appendChild(h1Tag);
    document.getElementById("content").appendChild(h2Tag);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
