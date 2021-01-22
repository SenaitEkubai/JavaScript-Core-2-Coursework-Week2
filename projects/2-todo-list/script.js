let list = document.getElementById("todo-list");
function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  // all elements that needed to be created and their classnames

  // for loop
  for (var i = 0; i < todos.length; i++) {
    //This for loop will create a list,a span, and two <i> elements. assign class name to every element and take the task property value to the list text content
    let listElement = document.createElement("li");
    listElement.className =
      "list-group-item d-flex justify-content-between align-items-center";
    let spanElementTag = document.createElement("span");
    spanElementTag.className = "badge bg-primary rounded-pill";
    let check = document.createElement("i");
    check.className = "fa fa-check";
    let trash = document.createElement("i");
    trash.className = "fa fa-trash";
    listElement.innerHTML = `${todos[i].task}`;
    // appending every element
    list.appendChild(listElement);
    listElement.appendChild(spanElementTag);
    spanElementTag.appendChild(check);
    spanElementTag.appendChild(trash);
    // event listener for check button
    check.addEventListener("click", function () {
      if (listElement.style.textDecoration === "none") {
        listElement.style.textDecoration = "line-through";
      } else {
        listElement.style.textDecoration = "none";
      }
    });
    trash.addEventListener("click", function () {
      listElement.remove();
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputField = document.getElementById("todoInput");
  let regex = /[a-zA-Z]/; // checks if valid input and not empty
  if (inputField.value.length > 0 && regex.test(inputField.value)) {
    todos.push({ task: `${inputField.value}`, completed: false }); // pushes the new input field value into the todos array
    let added = todos.splice(todos.length - 1); // removes the pushed element and changes the todos array. at this point the array only contains the input field value
    populateTodoList(added); // calls the function
    inputField.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
let removeButton = document.getElementById("remove-button");
function deleteAllCompletedTodos() {
  // Write your code here...
  let allTasks = document.getElementsByClassName("list-group-item");
  for (var i = 0; i < allTasks.length; i++) {
    if (allTasks[i].style.textDecoration === "line-through") {
      allTasks[i].remove();
      i--;
    }
  }
  if (allTasks.length == 0) {
    removeButton.remove(); // removes button after deleted all  tasks
  }
}

removeButton.addEventListener("click", deleteAllCompletedTodos);
