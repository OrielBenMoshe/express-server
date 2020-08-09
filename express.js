const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
// const util = require("util");
// const readFile = util.promisify(fs.readFile);

app.use(cors());
app.use(bodyParser.json());

app.get("/", (rec, res) => {
  res.send("Hello fox!! good to see you today.");
});

app.get("/products", (rec, res) => {
  fs.readFile("./products.json", (err, data) => {
    res.send(JSON.parse(data));
  });
});

app.post("/products", (req, res) => {
  let newProducts = req.body;

  fs.readFile("/products.json", (err, data) => {
    if (err) console.log(err);
    let productInventory = JSON.parse(data);
    // console.log("productInventory: ", productInventory);

    newProducts.map((product) => {
      product.id = productInventory.length + 1;
      productInventory.push({
        id: productInventory.length + 1,
        title: product.title,
        image: product.image,
        quantity: product.quantity,
        price: product.price,
      });
      // productInventory = [...productInventory, product];
    });
    console.log(productInventory);

    fs.writeFile("products.json", JSON.stringify(productInventory), (err) => {
      if (err) throw err;
      console.log("Done writing");
      productInventory = 0;
    });
  });
});

// app.delete("/products/:id", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     const productId = +req.params.id;
//     const productIndex = products.findIndex(
//       (product) => product.id === productId
//     );
//     products.splice(productIndex, 1);
//     fs.writeFile("./products.json", JSON.stringify(products), (err) => {
//       res.send("YOU SUCCEED!!");
//     });
//   });
//   res.send(req.params);
// });

// app.put("/products/:id", (req, res) => {fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     const productId = +req.params.id;
//     const productIndex = products.findIndex(
//       (product) => product.id === productId
//     );
//     products[productIndex].body = req.body;

//     fs.writeFile("./products.json", JSON.stringify(products), (err) => {
//       res.send("YOU SUCCEED!!");
//     });
//   })

app.listen(5050, () => {
  console.log("'CORS-enabled web server listening on port 5050");
});
