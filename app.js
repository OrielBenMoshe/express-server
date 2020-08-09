const fs = require("fs");

// Read users.json file
fs.readFile("products.json", function (err, data) {
  // Check for errors
  if (err) throw err;

  // Converting to JSON
  const products = JSON.parse(data);

  console.log(products); // Print users
});

// STEP 1: Reading JSON file
const products = require("./products.json");

// Defining new user
let product = {
  id: products.length + 1,
  title: "ZX5 Multirotor Drone",
  image:
    "https://www.droneality.com/wp-content/uploads/2015/08/ZX5-MultiRotor-Rendering.jpeg",
  quantity: 30,
  price: 5000,
};

// STEP 2: Adding new data to users object
products.push(product);

// STEP 3: Writing to a file
fs.writeFile("products.json", JSON.stringify(products), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});
