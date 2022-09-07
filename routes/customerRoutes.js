const express = require("express");
const router = express.Router();
const {
  list,
  show,
  create,
  update,
  remove,
} = require("../controllers/customerControllers");

router.get("", list);
router.get("/:id", show);
router.post("", create);
router.post("/:id", update);
router.post("/:id", remove);

module.exports = router;
