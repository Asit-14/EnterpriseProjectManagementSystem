import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

// MongoDB connection string

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // stop server if DB fails
    }
};

app.get("/", (req, res) => {
    res.send("This is home page");
});

// Start server only after DB connection
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
