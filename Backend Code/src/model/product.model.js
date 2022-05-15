const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: true },
  imageUrl: [{ type: String, required: true }],
  desc: { type: String, required: true },
  Color: { type: String, required: false },
  details: {
    Colour: { type: String, required: false },
    Material: { type: String, required: false },
    'Suitable for': { type: String, required: false },
    'Size Dimension': { type: String, required: false },
    Thickness: { type: String, required: false },
  },
  fabric: { type: String, required: false },
  material: {
    Colour: { type: String, required: false },
    Material: { type: String, required: false },
    'Suitable for': { type: String, required: false },
    'Size Dimension': { type: String, required: false },
    Thickness: { type: String, required: false },
  },
});

module.exports = mongoose.model('products', productSchema);
