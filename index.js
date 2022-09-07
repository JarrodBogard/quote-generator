const express = require("express");
const app = express();
const { customers, trades } = require("./data/data.js");
const { v4 } = require("uuid");
const customRoutes = require("./routes/customerRoutes");
const tradeRoutes = require("./routes/tradeRoutes");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/customers", customRoutes);
app.use("/trades", tradeRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node!");
});

app.listen(PORT, () =>
  console.log(`I am listening on port http://localhost:${PORT}`)
);
