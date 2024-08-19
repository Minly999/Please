const Counter = require("../models/counterDataModel");

const getCounters = async (req, res) => {
  try {
    const counters = await Counter.find({});
    res.status(200).json(counters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCounter = async (req, res) => {
  try {
    const { id } = req.params;
    const counter = await Counter.findById(id);
    if (!counter) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(counter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCounter = async (req, res) => {
  try {
    const counter = await Counter.create(req.body);
    res.status(200).json(counter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCounter = async (req, res) => {
  try {
    const { id } = req.params;
    const counter = await Counter.findByIdAndDelete(id);

    if (!counter) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "OK" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCounter = async (req, res) => {
  try {
    const { id } = req.params;
    const counter = await Counter.findByIdAndUpdate(id, req.body);
    if (!counter) {
      return res.status(404).json({ message: "Not found" });
    }
    const updatedcounter = await Counter.findById(id);
    res.status(200).json(updatedcounter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCounter,
  getCounters,
  createCounter,
  deleteCounter,
  updateCounter,
};
