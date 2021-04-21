const express = require("express");
const router = express.Router();
let todos = [];
router.get("/", function(req, res) {
  res.json("Get all customer.");
});
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
router.post("/", function(req, res) {
  res.json("Saved the customer.");
});

router.put("/:id", function(req, res) {
  res.json(`Updated customer ${req.params.id}`);
});

router.delete("/:id", function(req, res) {
  res.json(`Deleted customer ${req.params.id}`);
});

module.exports = router;
