const express = require('express');
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.post("/add", async(req, res) => {
  const {medicineName, price, brandName, manufacturingDate, expiryDate, prescription} = req.body

  if(!medicineName || !price || !brandName || !manufacturingDate || !expiryDate || !prescription){
    return res.status(422).json({error: "Fill all the fields"})
  }

  const user = new User({medicineName, price, brandName, manufacturingDate, expiryDate, prescription});
  await user.save();

  res.status(201).json({message: "Your medicine is registered"})
})


module.exports = router;