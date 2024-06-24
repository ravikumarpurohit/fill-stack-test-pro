const { Task, validateTask } = require('../models/Task');

const getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
};

const createTask = async (req, res) => {
  const { error } = validateTask(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const task = new Task(req.body);
  await task.save();
  res.send(task);
};

const updateTask = async (req, res) => {
  // const { error } = validateTask(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!task) return res.status(404).send('Task not found');
  res.send(task);
};

const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).send('Task not found');
  res.send(task);
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
