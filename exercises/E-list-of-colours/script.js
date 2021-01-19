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
/*We want to render a dropdown list of colours on the page. When a colour is selected, the selection will appear on screen e.g. 'You have selected: blue'.
The text informing the user of their selection will also change colour to match the selected colour e.g. 'You have selected: blue' will display all in blue. 'You have selected: green' will be green etc.

## Exercise

* Create a `<select>` element.
* Create a `<p>` element.
* Iterate through the array of colours.
* Each element in the array should add a `<option>` to the `<select>`, where the `<option>` is the element in the array.
* Each `<option>` should have a 'click' event listener to update the contents and colour of the `<p>` with the selected colour.
* All of your HTML should go inside the `<div>` with the id **"content"**.
 */
