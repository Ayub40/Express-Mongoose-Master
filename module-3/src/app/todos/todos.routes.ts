import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
// import { ObjectId } from "mongodb";
// import { client } from "../../config/mongodb";

const filePath = path.join(__dirname, "../../../db/todo.json");

export const todosRouter = express.Router()

todosRouter.get("/", (req: Request, res: Response) => {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });

    console.log("From Todos Router");
    res.json({
        message: "From Todos Router",
        data
    })
})

todosRouter.post('/create-todo', (req: Request, res: Response) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send('Hello World!')
})

// todosRouter.get("/:id");
// todosRouter.put("/update-todo/:id");
// todosRouter.delete("/delete-todo/:id");

