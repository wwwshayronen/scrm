const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// enable all cors requests
app.use(cors());

const customers = require("./api/routes/customers");

// Body-parser middleware
app.use(bodyParser.json());

// connect to mongodb
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://localhost:27017/scrm?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.log("Error when trying to connect to mongodb: ", err)
  );

// use routes
app.use("/api/customers", customers);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
