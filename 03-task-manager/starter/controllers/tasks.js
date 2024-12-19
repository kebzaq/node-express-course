const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

// initial version without asyncWrapper
// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({}); // this will get all documents/records
//     // res.status(200).json({ tasks });
//     // res.status(200).json({ tasks, amount: tasks.length });
//     res
//       .status(200)
//       .json({ status: true, data: { tasks, nbHits: tasks.length } });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
//
// asynWrapped version:
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
// create task withoyt asyn wrapper:
// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };
// create Task with asyncWrapper:
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});
// get single Task without asyncWrapper:
// const getTask = async (req, res) => {
//   // res.send("get task");
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });

//     if (!task) {
//       return res.status(404).json({ msg: `No task with id : ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// get Task with asyncWrapper:
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
// update Task
const updateTask = async (req, res) => {
  // res.send("update task");
  // res.json({ oldname: req.body.name, name: "updated" });
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      // overwrite: true  // this flag is used for PUT methods and will overwrite all fields are in the req.body
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// delete Task
const deleteTask = async (req, res) => {
  // res.send("delete task");
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    // res.status(200).json({ task });
    res.json({
      success: true,
      message: `Task with id ${req.params.id} is deleted`,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
