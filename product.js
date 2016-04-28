var mongoose = require("mongoose");

// Product schema and model
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }                 // consider adding an image object with a type of string.  Points to URL locally with ng-source.
});

module.exports = mongoose.model("Product", productSchema);
