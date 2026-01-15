import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());

// Allow only frontend origin
// app.use(cors({
//     origin: "http://localhost:5173"
// }));

// app.get("/", (req, res) => {
//     res.json({
//         name: "Asit Kumar",
//         class: "B.Tech",
//         age: 33,
//         city: "Noida"
//     });
// });

// app.post("/", (req, res) => {
//     console.log(req.body);   // ✅ data received here
//     res.send({ success: true });
// });

const password = "asit1234";
app.use((req, res, next) => {
    if (req.body.pass != password) {
        res.send("password  does not  same ")
    }
    next();
})


app.post("/", (req, res) => {
    res.status.send({success : true})
})

app.listen(port, () => {
    console.log("Server running on port 3000");
});
