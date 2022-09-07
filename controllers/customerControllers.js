const { customers } = require("../data/data");
const pool = require("../sql/connection");

// const list = (req, res) => {
//   res.json(customers);
// };
const list = (req, res) => {
  pool.query("SELECT * FROM customers", (err, rows) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(rows);
  });
};

const show = (req, res) => {
  const user = customers.find((x) => x.id === req.params.id);
  res.json(user);
};

const create = (req, res) => {
  const { body } = req;

  let newUser = {
    ...body,
    id: v4(),
  };

  customers.push(newUser);
  res.send(newUser);
};

const update = (req, res) => {
  const user = customers.find((x) => x.id === req.params.id);
  const userIndex = customers.findIndex((x) => x.id === req.params.id);

  const { body } = req;

  let newUser = {
    ...user,
    ...body,
  };

  customers.splice(userIndex, 1, newUser);
  res.send(customers);
};

const remove = (req, res) => {
  const user = customers.find((x) => x.id === req.params.id);
  const userIndex = customers.findIndex((x) => x.id === req.params.id);

  customers.splice(userIndex, 1);
  res.send(customers);
};

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
