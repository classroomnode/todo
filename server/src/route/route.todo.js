const express = require("express");
const router = express.Router();
let todos = [];

router.get("/todo", function(req, res) {
  let query = req.query.text;
  todos.push({
    name: query,
    id: Math.random(),
    date: new Date().toDateString()
  });
  res.send({
    value: `api response${query}`
  });
});
router.get("/todos", function(req, res) {
  res.send({
    todos: todos
  });
});
module.exports = router;
