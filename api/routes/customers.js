const express = require("express");
const router = express.Router();

// Customer model import
const Customer = require("../../models/Customer");

// route GET api/customers

// get all customers deals
router.get("/", (req, res) => {
  Customer.find()
    .sort({ date: -1 })
    .then((customer) => res.json(customer));
});

// route post api/customers
// save new customer to DB
router.post("/", (req, res) => {
  try {
    console.log("request was received by the server:", req.body);
    const newCustomer = new Customer({
      customerName: req.body.customerName,
      phoneNumber: req.body.phoneNumber,
      emailAdress: req.body.emailAdress,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      quantity: req.body.quantity,
      date: req.body.date,
      userID: req.body.userID,
    });

    // save item to db
    newCustomer.save().then((item) => res.json(item));
  } catch (error) {
    console.log("error msg in handling post req:", error);
  }
});

// route delete api/customers/id
// delete customer
router.delete("/delete/:id", (req, res) => {
  Customer.findById(req.params.id).then((customer) =>
    customer.remove().then(() => {
      res
        .json({ success: true })
        .catch((err) => res.status(404).json({ message: err }));
    })
  );
});

module.exports = router;
