const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  salePrice: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  isDiscount: {
    type: Boolean,
    required: true,
  },
  percentDiscount: {
    type: Number,
    required: false,
  },
  rate: {
    type: Number,
    default: 0,
  },
  numberOfFeedbacks: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
