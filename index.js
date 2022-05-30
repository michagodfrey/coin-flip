var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  const page = req.url;

  if (page === '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else if (page === "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page === "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  }
  else if (page === "/flip") {
    let flipResult = Math.ceil(Math.random() * 2) === 1 ? "heads" : "tails";
    console.log(flipResult);
    res.writeHead(200, { "Content-Type": "application/json" });
    const objToJson = {
      flip: flipResult,
    }
  }
  else if (page === "/images/heads.png") {
    fs.readFile("images/heads.png", function (err, data) {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.write(data);
      res.end();
    })
  }
  else if (page === "/images/tails.png") {
    fs.readFile("images/tails.png", function (err, data) {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.write(data);
      res.end();
    })
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
}).listen(3000);
