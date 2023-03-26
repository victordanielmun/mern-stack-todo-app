const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const Task = require("../model/taskModel");
const router = express.Router();

//create a task

router.post("/api/tasks", createTask);

  //Get tasks
router.get("/api/tasks", getTasks);

//get Task

router.get("/api/tasks/:id", getTask);

//delete Task
router.delete("/api/tasks/:id", deleteTask);

//delete Task
router.put("/api/tasks/:id", updateTask);

module.exports = router;