function readingList(books) {
  // Write your code here...
  const pageTag = document.createElement("h1");
  const pageTitle = document.createTextNode("Book list");
  pageTag.appendChild(pageTitle);
  document.getElementById("content").appendChild(pageTag);
  const unOrderedList = document.createElement("ul");
  unOrderedList.id = "ulId";
  document.getElementById("content").appendChild(unOrderedList);
  for (var i = 0; i < books.length; i++) {
    let listTag = document.createElement("li"); //list tag
    //all styles for ul and list tag
    listTag.style.height = "50%"; //sets the height
    listTag.style.width = "30%"; //sets the width
    document.getElementById("ulId").style.marginTop = "5%";
    document.getElementById("ulId").style.width = "75%";
    document.getElementById("ulId").style.listStyle = "none";
    document.getElementById("ulId").style.display = "flex";
    document.getElementById("ulId").style.height = "100%";
    document.getElementById("ulId").style.justifyContent = "space-around";

    const pTag = document.createElement("p"); //p tag inside list tag
    const pText = document.createTextNode(
      `${books[i].title} ${books[i].author}`
    ); //text inside p tag
    //p text style
    pTag.style.fontSize = "1.25rem";
    pTag.appendChild(pText); // text inside p tag is appended tp the p tag which is appended to the list tag
    listTag.appendChild(pTag);
    // adding image tag
    const imgTag = document.createElement("img");
    // images width and height
    imgTag.style.height = "65%";
    imgTag.style.width = "65%";
    // getting the source of the images using if statement
    if (books[i].title === "The Design of Everyday Things") {
      imgTag.src =
        "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
    }
    if (books[i].title === "The Most Human Human") {
      imgTag.src =
        "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg";
    }
    if (books[i].title === "The Pragmatic Programmer") {
      imgTag.src =
        "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg";
    }
    // end of if statements
    // placing  the img into the list tag
    listTag.append(imgTag);
    document
      .getElementById("content")
      .getElementsByTagName("ul")[0]
      .appendChild(listTag);
    // if statement that check if book has been already read and sets its color accordingly
    if (books[i].alreadyRead === true) {
      listTag.style.background = "green";
    }
    if (books[i].alreadyRead === false) {
      listTag.style.background = "red";
    }
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
/* Iterate through the list of books.
- For each book, create a `<p>` element with the book title and author and append it to the page.
- Use a `<ul>` and `<li>` to display the books.
- Add an `<img>` to each book that links to a URL of the book cover.
- Change the style of the book depending on whether you have read it (green) or not (red).
- All of your HTML should go inside the `<div>` with the id **"content"**.
 */
