import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();

mongoose.connect("mongodb://localhost:27017/firstapi");

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => {
    console.log("Listening on port 3000");
})