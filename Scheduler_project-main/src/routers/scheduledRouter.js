const express = require("express");
const router = express.Router();
const {
  getScheduleds,
  getScheduled,
  createScheduled,
  deleteScheduled,
  updateScheduled,
} = require("../controllers/scheduledController");

router.get("/", getScheduleds);

router.post("/", createScheduled);

router.get("/:id", getScheduled);

router.delete("/:id", deleteScheduled);

router.patch("/:id", updateScheduled);

module.exports = router;
