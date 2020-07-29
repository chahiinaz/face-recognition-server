const express = require("express");

const app = express();

const database={
  users:[
    {
    id:"1",
    name:"Piet"
    email:"piet@piet.com"
    password:"1234"
    entries:0
    joined: new Date()
    },
    {
    id:"2",
    name:"Jan"
    email:"jan@jan.com"
    password:"1234"
    entries:0
    joined: new Date()
    }

  ]
}

app.get("/", (req, res) => {
  res.send("this is working");
});
app.post("/signin", (req, res) => {
  res.send("singin");
});
app.listen(3000, () => {
  console.log("app is running on port 300");
});
