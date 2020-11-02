const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Customer Schema
const CustomerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  packageType: {
    type: String,
    require: true,
  },
  numberOfLines: {
    type: Number,
    require: true,
  },
  revenue: {
    type: Number,
    require: true,
  },
  customerID: {
    type: Number,
    require: true,
  },
  userID: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

module.exports = Customer = mongoose.model("customer", CustomerSchema);
