const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Sheefat", email: "minjamin58@gmail.com" },
  { id: 2, name: "Sheeaat", email: "sheeat@gmail.com" },
  { id: 3, name: "Sheebat", email: "sheebat@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users Management Server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post API hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
