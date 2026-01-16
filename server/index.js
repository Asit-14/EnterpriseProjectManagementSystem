import  express  from 'express';
import cors from 'cors';
let app = express();

app.use(express.json());

// let password = "12321";

const port = 8000;


// app.use((req, res, next) => {
//     if (req.body.pass != password) {
//         res.send("password does note match");
//     }                                                 //  coustom  middleware
//     next();
// })

// app.get("/", (req, res) => {
//     res.json({
//         name: "Asit Kumar ",
//         age: 32,
//         city: "noida"
//     })
// })


// app.post("/", (req, res) => {
    
//     console.log(req.body);
//     res.status(200).send({               //  used for the  custom  status
//         success: true
//     })
// })


// to  print  ithe  header

// app.get("/", (req, res) => {
//     console.log(req.get("user-agent")); //
//     res.json({
//         name: "Asit kumar",
//         age :21
//     })
    
// })

// coustomer  header 
app.get("/", (req, res) => {
    res.set("x-username", "asitkumar");  //  key  value  for a  beter  understiagin  use x-name of  heaader  for beteer  understanding

    res.json({
        name: "asit kumar",
        age: 21
    });
});



// remove  the  specific  hear that  are coustom  

app.get("/", (req, res) => {
    res.removeHeader("X-Powered-By");
    res.json({
        message: "Header removed"
    });
});




app.listen(port, () => {
    console.log("server  is started .....");
    
})