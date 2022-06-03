const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.get("/flip", function (req, res) {
  let flipResult = Math.ceil(Math.random() * 2) === 1 ? "heads" : "tails";
  console.log(flipResult);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(flipResult));
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

// equivalent HTTP 
// const http = require("http");
// const { readFileSync } = require("fs");

// const homePage = readFileSync("index.html");
// const homeStyles = readFileSync("css/style.css");
// const homeLogic = readFileSync("js/main.js");
// const headsImage = readFileSync("images/heads.png");
// const tailsImage = readFileSync("images/tails.png");

// http
//   .createServer(function (req, res) {
//     const page = req.url;
//     if (page === "/") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(homePage);
//       return res.end();
//     } else if (page === "/css/style.css") {
//       res.write(homeStyles);
//       res.end();
//     } else if (page === "/js/main.js") {
//       res.writeHead(200, { "Content-Type": "text/javascript" });
//       res.write(homeLogic);
//       res.end();
//     } else if (page === "/flip") {
//       let flipResult = Math.ceil(Math.random() * 2) === 1 ? "heads" : "tails";
//       console.log(flipResult);
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(flipResult));
//     } else if (page === "/images/heads.png") {
//       res.writeHead(200, { "Content-Type": "image/png" });
//       res.write(headsImage);
//       res.end();
//     } else if (page === "/images/tails.png") {
//       res.writeHead(200, { "Content-Type": "image/png" });
//       res.write(tailsImage);
//       res.end();
//     } else {
//       res.writeHead(404, { "content-type": "text/html" });
//       res.write("<h1>page not found</h1>");
//       res.end();
//     }
//   })
//   .listen(3000);
