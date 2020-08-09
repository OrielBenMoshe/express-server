// const http = require("http").Server;
// const myServer = new http();

// myServer.listen(3000);
// myServer.on("request", (req, res) => {
//   res.end("Hello fox!!");
// });

const http = require("http");
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

http
  .createServer(async (request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });

    try {
      const data = await readFile("./products.json");
      response.end(data);
    } catch (error) {
      console.log(error);
    }
  })
  .listen(8000);

console.log("server raunnig at http://127.0.0.1:8000");
