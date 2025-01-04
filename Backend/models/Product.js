const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    stockLevel: { type: Number, required: true },
    reorderPoint: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
