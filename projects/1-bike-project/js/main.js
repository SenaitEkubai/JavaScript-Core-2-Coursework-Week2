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
const submitButton = document.getElementById("submit-button");
function checkFields(event) {
  event.preventDefault(); // prevents default browser behavior
  const emailInput = document.querySelector("#exampleInputEmail1");
  const nameInput = document.querySelector("#example-text-input");
  const describeYourSelfInput = document.querySelector("#exampleTextarea");
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // valid email regular expression
  let nameAndDescriptionRegex = /[a-zA-Z]{1,}/;
  // check if email field is valid
  if (!regex.test(emailInput.value)) {
    emailInput.value = "";
    emailInput.style.background = "red";
  }
  //check if name field is not empty and valid
  if (
    nameInput.value.length == 0 ||
    !nameAndDescriptionRegex.test(nameInput.value)
  ) {
    nameInput.style.background = "red";
  }
  // check description field is not empty
  if (
    describeYourSelfInput.value.length == 0 ||
    !nameAndDescriptionRegex.test(describeYourSelfInput.value)
  ) {
    describeYourSelfInput.style.background = "red";
  }
  // check if fields are filled
  if (
    emailInput.value.length > 0 &&
    nameInput.value.length > 0 &&
    describeYourSelfInput.value.length > 0
  ) {
    alert("Thank you for filling out the form");
    // clear the input forms after the alert message
    nameInput.value = "";
    emailInput.value = "";
    describeYourSelfInput.value = "";
  }

  // this can also be done using for loop
  /* 
  let arrayOfInputs = [emailInput, nameInput, describeYourSelfInput];
  for (var i = 0; i < arrayOfInputs.length; i++) {
    if (
      arrayOfInputs[i] === emailInput &&
      !regex.test(arrayOfInputs[i].value)
    ) {
      arrayOfInputs[i].value = "";
      arrayOfInputs[i].style.background = "red";
    }
    if (
      arrayOfInputs[i] === nameInput &&
      arrayOfInputs[i].value.length == 0 &&
      !nameAndDescriptionRegex.test(arrayOfInputs[i].value)
    ) {
      arrayOfInputs[i].style.background = "red";
    }
    if (
      arrayOfInputs[i] === describeYourSelfInput &&
      arrayOfInputs[i].value.length == 0
    ) {
      arrayOfInputs[i].style.background = "red";
    }
  } */
}
submitButton.addEventListener("click", checkFields); // event listener when button clicked
