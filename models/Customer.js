const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Customer Schema
const CustomerSchema = new Schema({
  customerName: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: false,
  },
  emailAdress: {
    type: String,
    require: false,
  },
  productDescription: {
    type: String,
    require: true,
  },
  productPrice: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  userID: {
    type: String,
    require: true,
  },
});

module.exports = Customer = mongoose.model("customer", CustomerSchema);
