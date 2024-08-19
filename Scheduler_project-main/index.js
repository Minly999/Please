const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const scheduledRoute = require("./src/routers/scheduledRouter");
const taskForDayRoute = require("./src/routers/taskForDayRouter");
const counterDataRoute = require("./src/routers/counterDataRouter");

const cors = require("cors")
const app = express();

//Configs
dotenv.config();

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Routers
app.use("/apiv1/Scheduled", scheduledRoute);
app.use("/apiv2/TaskForDay", taskForDayRoute);
app.use("/apiv3/counterData", counterDataRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello there" });
});

// Database connection  (create file .env !!!)
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("MONGO_URI is not defined in the environment variables");
  process.exit(1);
}

mongoose
  .connect(mongoUri, {
    serverSelectionTimeoutMS: 4000,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  });

// server configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// shutdown
process.on("SIGINT", async () => {
  console.log("SIGINT signal received: closing MongoDB connection");
  await mongoose.connection.close();
  process.exit(0);
});
