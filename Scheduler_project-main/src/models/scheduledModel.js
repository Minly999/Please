const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  accurateTime: { type: String, required: true },
  taskText: { type: String, required: true },
  bgColor: { type: String, required: true },
  textColor: { type: String, required: true },
});

const TaskForDayScheduledSchema = new Schema({
  date: { type: String, required: true },
  tasks: [
    {
      time: { type: String, required: true },
      task: [TaskSchema],
    },
  ],
  type: { type: String, required: true },
});

const ScheduledModel = mongoose.model('TaskForDayScheduled', TaskForDayScheduledSchema);

module.exports = ScheduledModel;