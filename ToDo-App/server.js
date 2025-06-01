const http = require("http");
const path = require("path");
// file system theke data read korar jonno "fs" dorker,,
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname

    // console.log(url, "url");
    // console.log(req.url, req.method);

    //GET All todos
    // server theke data send kora, 1. application/json , 2. html etc. dia data send kora jai
    if (pathname === "/todos" && req.method === "GET") {
        const data = fs.readFileSync(filePath, { encoding: "utf-8" });
        res.writeHead(200, {
            "content-type": "application/json",
        });

        res.end(data);
    }
    //POST a ToDO
    else if (pathname === "/todos/create-todo" && req.method === "POST") {
        let data = "";

        req.on("data", (chunk) => {
            data = data + chunk;
        });
        // console.log(data);

        req.on("end", () => {
            // console.log(data);
            const { title, body } = JSON.parse(data);
            // console.log({ title, body });
            const createdAt = new Date().toLocaleString();

            const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
            const parsedAllTodos = JSON.parse(allTodos);
            console.log(allTodos);

            parsedAllTodos.push({ title, body, createdAt });

            fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {
                encoding: "utf-8",
            });

            res.end(JSON.stringify({ title, body, createdAt }, null, 2));
        })

        // const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });


    }
    else if (pathname === "/todo" && req.method === "GET") {
        const title = url.searchParams.get("title");
        console.log(title);
        const data = fs.readFileSync(filePath, { encoding: "utf-8" });
        const parsedData = JSON.parse(data);

        const todo = parsedData.find((todo) => todo.title === title);

        const stringifiedTodo = JSON.stringify(todo);
        res.writeHead(200, {
            "content-type": "application/json",
        });

        // server theke 1 ta (res) send kora jabe,,, res.end() ,eta eki option theke 1 bar send kora jabe

        // res.end(data);
        res.end(stringifiedTodo);
        // res.end("Single Todo");
    }

    // Update Todo
    else if (pathname === "/todos/update-todo" && req.method === "PATCH") {
        const title = url.searchParams.get("title");
        let data = "";

        req.on("data", (chunk) => {
            data = data + chunk;
        });
        // console.log(data);

        req.on("end", () => {
            // console.log(data);
            const { body } = JSON.parse(data);
            // console.log({ title, body });

            const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
            const parsedAllTodos = JSON.parse(allTodos);
            // console.log(allTodos);

            const todoIndex = parsedAllTodos.findIndex(
                (todo) => todo.title === title
            );

            // console.log(todoIndex);

            parsedAllTodos[todoIndex].body = body;

            fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {
                encoding: "utf-8",
            });

            res.end(JSON.stringify({ title, body, createdAt: parsedAllTodos[todoIndex].createdAt }, null, 2));
        })

        // const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    }

    // Delete Todo
    // else if (pathname === "/todos/delete-todo" && req.method === "DELETE") {
    //     const title = url.searchParams.get("title");
    // }

    else {
        res.end("Route Not Found");
    }
})

server.listen(5000, "127.0.0.1", () => {
    console.log("Server listening to port 5000");
})








// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

// 13-7 Routing in node js
// 13-8 Set response headers

// const http = require("http")

// const server = http.createServer((req, res) => {
//     // console.log({ req, res });
//     console.log(req.url, req.method);
//     // res.end("Welcome to ToDo App Server")

//     // server theke data send kora, 1. application/json , 2. html etc. dia data send kora jai
//     if (req.url === "/todos" && req.method === "GET") {
//         res.writeHead(200, {
//             // "content-type": "text/plain",
//             // "content-type": "text/html",
//             "content-type": "application/json",
//             // "email": "ak420@gmail.com"
//             // "content-type": "application/json",
//         });

//         // ======================================
//         // res.end("Hello Todos");
//         // res.end("All Todos Here");
//         // res.end(`<h1>Hello World</h1> <h1>Hello World</h1> <h1>Hello World</h1>`)
//         res.end(JSON.stringify(data));

//         // another way for create head

//         // res.setHeader("content-type", "text/plain");
//         // res.setHeader("email", "pk42@gmail.com");
//         // res.statusCode = 201;

//     } else if (req.url === "/todos/create-todo" && req.method === "POST") {
//         res.end("Todo Created");
//     } else {
//         res.end("Route Not Found");
//     }
// })

// server.listen(5000, "127.0.0.1", () => {
//     console.log("Server listening to port");
// })

/**
 *  /todos - GET - All Todo
 *  /todo/create-todo POST Create Todo
 * 
 */

