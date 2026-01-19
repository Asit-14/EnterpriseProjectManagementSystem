import express from "express";
import mongoose from "mongoose";
import  dotenv from "dotenv"
import User from "./model/user.model.js"
import connectDB from "./config/database.js";
import userRouter from "./routes/user.route.js";


dotenv.config();
const app = express();
const port = 3000;

app.use(express.json()); // converts JSON request body
app.use("/", userRouter);






// Start server after DB connection
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
