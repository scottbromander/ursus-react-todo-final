const express = require("express");
const router = express.Router();
const todoItems = require("../modules/task.data");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/complete/:id", (req, res) => {
  res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  res.send(todoItems);
}); // END GET Route

module.exports = router;
