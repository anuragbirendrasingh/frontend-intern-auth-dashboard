const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

const { protect } = require("../middleware/authMiddleware");

router.post("/createTask", protect, createTask);

router.get("/getTasks", protect, getTasks);

router.put("/updateTask/:id", protect, updateTask);

router.delete("/deleteTask/:id", protect, deleteTask);

module.exports = router;
