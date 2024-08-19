const express = require("express");
const router = express.Router();
const {
  getCounter,
  getCounters,
  createCounter,
  deleteCounter,
  updateCounter,
} = require("../controllers/counterDataController");

router.get("/", getCounters);

router.post("/", createCounter);

router.get("/:id", getCounter);

router.delete("/:id", deleteCounter);

router.patch("/:id", updateCounter);

module.exports = router;
