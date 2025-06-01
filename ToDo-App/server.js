const http = require("http")

const data = [
    {
        "title": "prisma",
        "body": "Learning prisma",
        "createdAt": "5/18/2025, 1:25:02 AM"
    },
    {
        "title": "typescript",
        "body": "learning node",
        "createdAt": "5/18/2025, 1:25:12 AM"
    }
];

const server = http.createServer((req, res) => {
    // console.log({ req, res });
    console.log(req.url, req.method);
    // res.end("Welcome to ToDo App Server")

    // server theke data send kora, 1. application/json , 2. html etc. dia data send kora jai
    if (req.url === "/todos" && req.method === "GET") {
        res.writeHead(200, {
            // "content-type": "text/plain",
            // "content-type": "text/html",
            "content-type": "application/json",
            // "email": "ak420@gmail.com"
            // "content-type": "application/json",
        });

        // ======================================
        // res.end("Hello Todos");
        // res.end("All Todos Here");
        // res.end(`<h1>Hello World</h1> <h1>Hello World</h1> <h1>Hello World</h1>`)
        res.end(JSON.stringify(data));

        // another way for create head

        // res.setHeader("content-type", "text/plain");
        // res.setHeader("email", "pk42@gmail.com");
        // res.statusCode = 201;

    } else if (req.url === "/todos/create-todo" && req.method === "POST") {
        res.end("Todo Created");
    } else {
        res.end("Route Not Found");
    }
})

server.listen(5000, "127.0.0.1", () => {
    console.log("Server listening to port");
})

/**
 *  /todos - GET - All Todo
 *  /todo/create-todo POST Create Todo
 * 
 */

