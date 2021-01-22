function listOfColours(colours) {
  // Write your code here...
  let selectTag = document.createElement("select");
  let pTag = document.createElement("p");
  for (let i = 0; i < colours.length; i++) {
    let optionTag = document.createElement("option");
    optionTag.innerHTML = `${colours[i]}`; // adds names of the colors the colors
    selectTag.appendChild(optionTag); // attaches the option tag to selectTag
  }
  selectTag.addEventListener("change", function (event) {
    pTag.style.fontSize = "x-large";
    pTag.innerHTML = `You have selected: ${event.target.value}`;
    pTag.style.color = event.target.value; //p tag color change
  });
  document.getElementById("content").appendChild(pTag); //appending p tag
  document.getElementById("content").appendChild(selectTag); // appending select tag
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
