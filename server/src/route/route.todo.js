const express = require("express");
const router = express.Router();
const { data } = require("../todoData");

router.get("/todo", function (req, res) {
  res.send(data);
});
module.exports = router;
