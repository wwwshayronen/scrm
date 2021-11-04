const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: false,
  },
  notes: {
    type: String,
    require: false,
  },
  lane: {
    type: String,
    require: true,
  },
  userID: {
    type: String,
    require: true,
  }
});

module.exports = Customer = mongoose.model("lead", LeadSchema);
