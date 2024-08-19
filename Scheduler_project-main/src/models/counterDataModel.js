const mongoose = require("mongoose");
const { Schema } = mongoose;

const counterDataSchema = new Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
  createdData: { type: String, required: true },
});

const counterDataModel = mongoose.model("conterDataModel", counterDataSchema);

module.exports = counterDataModel;
