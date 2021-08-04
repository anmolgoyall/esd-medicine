const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  medicineName:{
    type:String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  brandName:{
    type: String,
    required: true
  },
  manufacturingDate:{
    type: String,
    required: true
  },
  expiryDate:{
    type:String,
    required: true
  },
  prescription:{
    type:String,
    required: true
  }
})
const User = mongoose.model('medicine', userSchema)

module.exports = User