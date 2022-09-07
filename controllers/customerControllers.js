const { customers } = require("../data/data");

const list = (req, res) => {
  res.json(customers);
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
  remove
};
