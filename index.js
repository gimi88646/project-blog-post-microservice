const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("hello world");
});
const posts = {};

app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  console.log("random id = " + id);
  const { title } = req.body;
  console.log(req.body);

  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
