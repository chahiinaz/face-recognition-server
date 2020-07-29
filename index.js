const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const database = {
  users: [
    {
      id: "1",
      name: "Piet",
      email: "piet@piet.com",
      password: "1234",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "2",
      name: "Jan",
      email: "jan@jan.com",
      password: "1234",
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send("this is working");
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("succes");
  } else {
    res.status(400).json("error logging in");
  }
});
app.listen(3000, () => {
  console.log("app is running on port 300");
});
