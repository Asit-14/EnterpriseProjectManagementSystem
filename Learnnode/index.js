import express from "express";

const app = express();
const port = 3000;

// =======================
// MIDDLEWARE
// =======================

// JSON body ko read karne ke liye
app.use(express.json());


// =======================
// DUMMY DATABASE
// =======================

let users = [
  { id: 1, name: "Rahul", email: "rahul@gmail.com" },
  { id: 2, name: "Priya", email: "priya@gmail.com" },
  { id: 3, name: "Amit", email: "amit@gmail.com" }
];


// =======================
// READ ALL USERS
// =======================
// GET → http://localhost:3000/users
app.get("/users", (req, res) => {
    res.json(users);
});


// =======================
// READ SINGLE USER (PARAMS)
// =======================
// GET → http://localhost:3000/user/2
app.get("/user/:id", (req, res) => {

    // URL se id milti hai (string hoti hai)
    const id = Number(req.params.id);

    // users array me se id match kar rahe hain
    const user = users.find(u => u.id === id);

    // agar user nahi mila
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});


// =======================
// CREATE USER
// =======================
// POST → http://localhost:3000/user
// BODY → { "name": "Neha", "email": "neha@gmail.com" }
app.post("/user", (req, res) => {

    const { name, email } = req.body;

    // simple validation
    if (!name || !email) {
        return res.status(400).json({ message: "Name and email required" });
    }

    // new user object
    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    // database (array) me add kar diya
    users.push(newUser);

    res.status(201).json(newUser);
});


// =======================
// UPDATE USER
// =======================
// PUT → http://localhost:3000/user/2
// BODY → { "name": "Priya Sharma" }
app.put("/user/:id", (req, res) => {

    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // jo data aaye wahi update karo
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    res.json(user);
});


// =======================
// DELETE USER
// =======================
// DELETE → http://localhost:3000/user/1
app.delete("/user/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    // array se user remove
    users.splice(index, 1);

    res.json({ message: "User deleted successfully" });
});


// =======================
// QUERY PARAMETERS
// =======================
// GET → http://localhost:3000/search?name=Rahul
app.get("/search", (req, res) => {

    // ? ke baad ka data
    const { name } = req.query;

    // filter example
    const result = users.filter(u =>
        u.name.toLowerCase().includes(name?.toLowerCase() || "")
    );

    res.json(result);
});


// =======================
// SERVER START
// =======================

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
    