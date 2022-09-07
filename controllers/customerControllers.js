const { customers } = require("../data/data");
const pool = require("../sql/connection");
const mysql = require("mysql");

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

// const show = (req, res) => {
//   const user = customers.find((x) => x.id === req.params.id);
//   res.json(user);
// };
const show = (req, res) => {
  pool.query(
    `SELECT * FROM customers WHERE id = ${req.params.id}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

// const create = (req, res) => {
//   const { body } = req;

//   let newUser = {
//     ...body,
//     id: v4(),
//   };

//   customers.push(newUser);
//   res.send(newUser);
// };

const create = (req, res) => {
  const { first_name, last_name, email } = req.body;

  pool.query(
    `INSERT INTO customers (first_name, last_name, email) 
      VALUES ("${first_name}","${last_name}", "${email}")`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

// const update = (req, res) => {
//   const user = customers.find((x) => x.id === req.params.id);
//   const userIndex = customers.findIndex((x) => x.id === req.params.id);

//   const { body } = req;

//   let newUser = {
//     ...user,
//     ...body,
//   };

//   customers.splice(userIndex, 1, newUser);
//   res.send(customers);
// };
const update = (req, res) => {
  let sql = "UPDATE ?? SET ? WHERE ?? = ?";
  sql = mysql.format(sql, ["customers", req.body, "id", req.params.id]);
  pool.query(sql, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(row);
  });
};

const remove = (req, res) => {
  pool.query(
    `DELETE FROM customers WHERE id = ${req.params.id}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
