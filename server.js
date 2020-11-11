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
    mongodb+srv://shay:<tvi6ppHXWUnLT98>@monez-cluster.dvbt7.mongodb.net/<Monez-Cluster>?retryWrites=true&w=majority,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.log("Error when trying to connect to mongodb: ", err)
  );

// use routes
app.use("/api/customers", customers);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
