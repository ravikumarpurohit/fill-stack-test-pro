const mongoose = require('mongoose');
const Joi = require('joi');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
});

const Task = mongoose.model('Task', taskSchema);

const validateTask = (task) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow(''),
    status: Joi.string().valid('To Do', 'In Progress', 'Done').default('To Do'),
  });
  return schema.validate(task);
};

module.exports = { Task, validateTask };
