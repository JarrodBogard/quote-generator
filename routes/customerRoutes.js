const express = require("express");
const router = express.Router();
const {
  list,
  show,
  create,
  update,
  remove,
} = require("../controllers/customerControllers");

router.get("/customers", list);
router.get("/customers/:id", show);
router.post("/customers", create);
router.post("/customers/:id", update);
router.post("/customers/:id", remove);

module.exports = router;
