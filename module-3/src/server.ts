import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
require('dotenv').config();
const mongoose = require('mongoose');

let server;
const port = 5000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uxvdig6.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const bootstrap = async () => {
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap()



