const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);

const userRouter = require("./user/router");
app.use(userRouter);

app.get("/", (req, res) => {
  res.json("its working!!!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
