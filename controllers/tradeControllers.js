const { trades } = require("../data/data");

const list = (req, res) => {
  res.json(trades);
};

const show = (req, res) => {
  const trade = trades.find((x) => x.id === req.params.id);
  res.json(trade);
};

const create = (req, res) => {
  const { body } = req;

  let newTrade = {
    ...body,
    id: v4(),
  };

  trades.push(newTrade);
  res.json(newTrade);
};

const update = (req, res) => {
  const trade = trades.find((x) => x.id === req.params.id);
  const tradeIndex = trades.findIndex((x) => x.id === req.params.id);

  const { body } = req;

  let newTrade = {
    ...trade,
    ...body,
  };

  trades.splice(tradeIndex, 1, newTrade);
  res.json(trades);
};

const remove = (req, res) => {
  const trade = trades.find((x) => x.id === req.params.id);
  const tradeIndex = trades.findIndex((x) => x.id === req.params.id);

  trades.splice(tradeIndex, 1);
  res.json(trades);
};

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
