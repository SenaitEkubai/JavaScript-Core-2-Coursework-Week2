// part 1
//start of blue button functionality
const blueButton = document.getElementById("blueBtn");
function clickFunctionForBlue() {
  let jumbotronSection = document.querySelector(".jumbotron");
  jumbotronSection.style.background = "#588fbd";
  let donateBikeToday = document.getElementById("donate-button");
  donateBikeToday.style.background = "#ffa500";
  let volunteer = document.getElementById("volunteer-button");
  volunteer.style.background = "black";
  volunteer.style.color = "white";
}
blueButton.addEventListener("click", clickFunctionForBlue);
//end of function
// start of orange function
const orangeButton = document.getElementById("orangeBtn");
function clickFunctionForOrange() {
  let jumbotronSection = document.querySelector(".jumbotron");
  jumbotronSection.style.background = "#f0ad4e";
  let donateBikeToday = document.getElementById("donate-button");
  donateBikeToday.style.background = "#5751fd";
  let volunteer = document.getElementById("volunteer-button");
  volunteer.style.background = "#8c9c08";
}
orangeButton.addEventListener("click", clickFunctionForOrange);
//end of orange function
const greenButton = document.getElementById("greenBtn");
function clickFunctionForGreen() {
  let jumbotronSection = document.querySelector(".jumbotron");
  jumbotronSection.style.background = "#87ca8a";
  let donateBikeToday = document.getElementById("donate-button");
  donateBikeToday.style.background = "black";
  let volunteer = document.getElementById("volunteer-button");
  volunteer.style.background = "#8c9c08";
}
greenButton.addEventListener("click", clickFunctionForGreen);

//part 2
