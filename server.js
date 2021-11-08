const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// const { DB_URI } = require("./secret_keys");

let setDBUri = process.env.URI;
// enable all cors requests
app.use(
  cors({
    origin: ["http://localhost:3000", "https://easypeasycrm.herokuapp.com/"],
  })
);

const customers = require("./api/routes/customers");
const leads = require("./api/routes/leads");

// Body-parser middleware
app.use(bodyParser.json());

// connect to mongodb
mongoose
  .connect(setDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.log("Error when trying to connect to mongodb: ", err)
  );

// use routes
app.use("/api/customers", customers);
app.use("/api/leads", leads);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, 3000, () => console.log(`server running on port ${PORT}`));
