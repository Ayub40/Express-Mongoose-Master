"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./app/todos/todos.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const todosRouter = express.Router();
// const userRouter = express.Router();
app.use("/todos", todos_routes_1.todosRouter);
// app.use("/users", userRouter)
app.get('/', (req, res) => {
    // console.log(req, res);
    res.send('Welcome to Todos App');
});
// demo.txt file e kiso likha ase
// [app]-[express.json()]-[todosRouter]-[Root Route "/"]-[GET "/todos"]-[POST Create ToDo]
// [todosRouter]-[get all todos /todos GET]-[create todo /todos/create-todo POST todo]
exports.default = app;
/**
 * Basic File Structure
 * server - server handling like - starting, closing error handling of server. Only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */ 
