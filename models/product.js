const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  brand: {
    type: String,
    enum: {
      values: ["death-wish", "costa", "illy", "lavazza"],
      message: "{VALUE} is not supported",
    },
  },
  description: {
    type: String,
    required: [true, "product description must be provided"],
  },
  img: {
    type: String,
    required: [true, "product image must be provided"],
  },
  type: {
    type: String,
    default: "ground",
  },
  quantity: {
    type: Number,
    default: "1",
  },
});

module.exports = mongoose.model("Product", productSchema);
