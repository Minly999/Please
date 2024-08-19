const Scheduled = require("../models/scheduledModel");

const getScheduleds = async (req, res) => {
  try {
    const scheduleds = await Scheduled.find({});
    res.status(200).json(scheduleds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getScheduled = async (req, res) => {
  try {
    const { id } = req.params;
    const scheduled = await Scheduled.findById(id);

    if (!scheduled) {
      return res.status(404).json({ message: "Scheduled not found" });
    }
    res.status(200).json(scheduled);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createScheduled = async (req, res) => {
  try {
    const scheduled = await Scheduled.create(req.body);
    res.status(200).json(scheduled);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteScheduled = async (req, res) => {
  try {
    const { id } = req.params;
    const scheduled = await Scheduled.findByIdAndDelete(id);

    if (!scheduled) {
      return res.status(404).json({ message: "Scheduled is not found" });
    }

    res.status(200).json({ message: "OK" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateScheduled = async (req, res) => {
  try {
    const { id } = req.params;
    const scheduled = await Scheduled.findByIdAndUpdate(id, req.body);

    if (!scheduled) {
      return res.status(400).json({ message: "Scheduled not found" });
    }

    const updatedscheduled = await Scheduled.findById(id);
    res.status(200).json(updatedscheduled);
  } catch (error) {
    res.status(500).json({ message: "pizdez" });
  }
};

module.exports = {
  getScheduleds,
  getScheduled,
  createScheduled,
  deleteScheduled,
  updateScheduled,
};
