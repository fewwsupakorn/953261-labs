# 953261 Lab 1 — First Node.js Server

| | |
|---|---|
| **Name** | Mr.Supakorn Buthsak |
| **Nickname** | Phil |
| **Student ID** | 692115042 |
| **Section** | 701 |

## How to run

```bash
cd lab01
npm start
```

Then open <http://localhost:3000> and <http://localhost:3000/api/me>.

## Check the routes

With the server running, use another terminal to check the JSON route and the 404 response:

```bash
curl -i http://localhost:3000/api/me
curl -i http://localhost:3000/nope
```

The first request should return `200 OK` with JSON. The second should return `404 Not Found`.

## What I learned today

When I open a URL, the browser sends an HTTP request to the server. The server checks the requested path and sends back a response with a status code, headers, and content. The browser uses that response to display the page.

## AI-use statement 

I used ChatGPT to help complete the routes and align the repository setup with the lab sheet.
