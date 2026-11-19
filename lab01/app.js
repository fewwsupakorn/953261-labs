// 953261 Lab 1 — My first Node.js server
// Run:  npm start   then open http://localhost:3000
//
// Lab 1 Part D: personal home page, JSON route, and 404 response.

import http from "node:http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><title>Phil · Lab 1</title></head>
  <body>
    <h1>Hello, I'm Phil!</h1>
    <p>Student ID: 692115042</p>
    <p>I'm learning how a web server responds to browser requests.</p>
    <p><a href="/api/me">View my profile as JSON</a></p>
  </body>
</html>`);
    return;
  }

  if (req.method === "GET" && req.url === "/api/me") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({
      name: "Supakorn Buthsak",
      studentId: "692115042",
      favouriteLanguage: "JavaScript",
    }));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<!doctype html><html lang=\"en\"><meta charset=\"utf-8\"><title>404 Not Found</title><h1>404 Not Found</h1><p>The requested page does not exist.</p></html>");
});

server.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
