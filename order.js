var mongoose = require("mongoose");

// Order schema and model
var Schema = mongoose.Schema;


var orderSchema = new Schema ({
    orderTotal: {type: Number, required: true},
    orderDate: {type: Date, required: true, default: Date.now()},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    products: [{type: Schema.Types.ObjectId, ref: "Product"}]
});

module.exports = mongoose.model("Order", orderSchema);
