// const express = require('express')
import express, { Application, Request, Response } from 'express';
import fs from "fs";
import path from "path";
import { todosRouter } from './app/todos/todos.routes';
const app: Application = express()

app.use(express.json());

// const todosRouter = express.Router();
// const userRouter = express.Router();

app.use("/todos", todosRouter);
// app.use("/users", userRouter)



app.get('/', (req: Request, res: Response) => {
    // console.log(req, res);
    res.send('Welcome to Todos App')
})

// demo.txt file e kiso likha ase


// [app]-[express.json()]-[todosRouter]-[Root Route "/"]-[GET "/todos"]-[POST Create ToDo]
// [todosRouter]-[get all todos /todos GET]-[create todo /todos/create-todo POST todo]

export default app;

/**
 * Basic File Structure
 * server - server handling like - starting, closing error handling of server. Only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */