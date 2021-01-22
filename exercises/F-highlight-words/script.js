function highlightWords(paragraph, colours) {
  // Write your code here...
  let pElement = document.createElement("p"); //crete p tag
  let selectElement = document.createElement("select"); // create select tag
  //let optionElement = document.createElement("option");

  for (let i = 0; i < colours.length; i++) {
    let optionElement = document.createElement("option"); //create option element
    optionElement.innerHTML = `${colours[i]}`; // sets option text content
    selectElement.appendChild(optionElement); // appends option element to select element
  }
  let arrayOfWords = paragraph.split(" "); // change the ordinal array and store it in new variable
  for (var j = 0; j < arrayOfWords.length; j++) {
    let spanElement = document.createElement("span"); // span element created
    spanElement.innerHTML = `${arrayOfWords[j]} `; // crated span element for each word
    spanElement.addEventListener("click", function (event) {
      event.target.style.backgroundColor = selectElement.value;
      // if selected color is none, remove existing highlights
      if (selectElement.value == "none") {
        event.target.style.backgroundColor = "";
      }
    });
    pElement.appendChild(spanElement); /// append  to the p tag
  }
  document.getElementById("content").appendChild(selectElement); //appending select to the document
  document.getElementById("content").appendChild(pElement);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
