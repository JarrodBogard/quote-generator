const express = require("express");
const app = express();
const { customers, trades } = require("./data/data.js");
const { v4 } = require("uuid");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from node!");
});

// List all
app.get("/customers", (req, res) => {
  res.json(customers);
});

// List one - using route parameters
app.get("/customers/:id", (req, res) => {
  const user = customers.find((x) => x.id === req.params.id);
  res.json(user);
});

// Create one
app.post("/customers", (req, res) => {
  const { body } = req;

  let newUser = {
    ...body,
    id: v4(),
  };

  customers.push(newUser);
  res.send(newUser);
});

// Update one - Needs Route parameter
app.put("/customers/:id", (req, res) => {
  const user = customers.find((x) => x.id === req.params.id);
  const userIndex = customers.findIndex((x) => x.id === req.params.id);

  const { body } = req;

  let newUser = {
    ...user,
    ...body,
  };

  customers.splice(userIndex, 1, newUser);
  res.send(customers);
});

app.delete("/customers/:id", (req, res) => {
  const user = customers.find((x) => x.id === req.params.id);
  const userIndex = customers.findIndex((x) => x.id === req.params.id);

  customers.splice(userIndex, 1);
  res.send(customers);
});

app.listen(PORT, () =>
  console.log(`I am listening on port http://localhost:${PORT}`)
);
