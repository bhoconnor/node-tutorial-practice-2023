const http = require("http");

// req & res are common, could be different if wanted; req is like if client was requesting something from webpage; res is what we're sending back
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for!</p>
  <a href="/">back home<a>
  `);
});

// 8080 is arbitary in this case
server.listen(8080);
