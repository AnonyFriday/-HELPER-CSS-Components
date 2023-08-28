books = {
  aaaaa: 10,
  "Miss ya": 20,
};

// Function to comparing object and display data out of the screen
// - get object key
// - create new element and add to the body
// - add class to created element
function getData() {
  let username = document.getElementById("fname").value;

  let price;
  let pattern = /a+/;

  for (const key in books) {
    if (username.match(pattern)) {
      price = books[key];
      break;
    }
  }

  const nodePrice = document.createElement("p");
  const textNode = document.createTextNode(price);

  nodePrice.appendChild(textNode);
  nodePrice.classList.add("redtext");

  document.body.appendChild(nodePrice);
  return;
}
