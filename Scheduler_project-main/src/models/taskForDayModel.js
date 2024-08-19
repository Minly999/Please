const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskForDaySchema = new Schema({
  date: { type: String, require: true },
  task: { type: String, require: true },
  type: { type: String, require: true },
});

const TaskForDayModel = mongoose.model("TaskForDay", TaskForDaySchema);

module.exports = TaskForDayModel;
