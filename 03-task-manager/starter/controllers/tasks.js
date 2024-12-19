const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getTask = async (req, res) => {
  res.send("get task");
  //   try {
  //     const { id: taskID } = req.params;
  //     const task = await Task.findOne({ _id: taskID });
  //     if (!task) {
  //       return res.status(404).json({ msg: `No task with id : ${taskID}` });
  //     }
  //     res.json({ task });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
};
const updateTask = async (req, res) => {
  res.send("update task");
  //   res.json({ oldname: req.body.name, name: "updated" });
  //   try {
  //     const { id: taskID } = req.params;
  //     const task = await Task.findOneAndUpdate({ _id: taskID });
  //     res.json({ task });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
};
const deleteTask = async (req, res) => {
  res.send("delete task");
  //   try {
  //     const { id: taskID } = req.params;
  //     const task = await Task.findOneAndDelete({ _id: taskID });
  //     if (!task) {
  //       return res.status(404).json({ msg: `No task with id : ${taskID}` });
  //     }
  //     res.status(200).json({ task });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
  //   res.json({
  //     success: true,
  //     message: `Task with id ${req.params.id} is deleted`,
  //   });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
