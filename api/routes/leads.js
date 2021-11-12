const express = require("express");
const router = express.Router();

// Customer model import
const Lead = require("../../models/Lead");

// get all leads
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ date: -1 });
    console.log("leads: ", leads);
    res.send(leads);
  } catch (error) {
    console.log(
      "Catched an error when try to handling get request that gets all leads: ",
      e
    );
  }
});

// add new lead to DB
router.post("/add", (req, res) => {
  try {
    console.log("request was received by the client:", req.body);
    if (req.body.name && req.body.phoneNumber) {
      const newLead = new Lead({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        notes: req.body.notes,
        lane: req.body.lane,
        userID: req.body.userID,
      });

      // save item to db
      newLead.save().then((item) => res.json(item));
    }
  } catch (error) {
    console.log("error msg in handling post req:", error);
  }
});

// route delete api/leads/delete/id
// delete lead
router.delete("/delete/:id", (req, res) => {
  console.log("req.params: ", req.params);
  Lead.findById(req.params.id).then((lead) =>
    lead.remove().then(() => {
      res
        .json({ success: true })
        .catch((err) => res.status(404).json({ message: err }));
    })
  );
});

// route edit api/leads/edit/id
// edit lead
router.put("/edit/:id", async (req, res) => {
  try {
    const id = req.body._id;
    console.log(`user id: ${id}, user name: ${req.body.name}`);
    const lead = new Lead({
      _id: id,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      notes: req.body.notes,
      lane: req.body.lane,
      userID: req.body.userID,
    });

    Lead.findOneAndUpdate(
      { _id: id },
      lead,
      { runValidators: true, useFindAndModify: false, new: true },
      (error, result) => {
        if (error) {
          console.log("error");
          return res.status(400).send(error);
        }

        res.status(200).send(result);
      }
    );

    // res.status(201).json({
    //   message: "Lead updated successfully!",
    // });
  } catch (err) {
    console.log(`error when trying to edit document: ${err}`);
    res.status(500).send(err);
  }
});

module.exports = router;
