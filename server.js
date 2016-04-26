var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// var mongo = require('mongojs');
var mongoose = require("mongoose");
var product = require("./product");
var productController = require("./productController");
var Schema = mongoose.Schema;
var app = express();

app.use(bodyParser.json());
app.use(cors());

// mongsoose connection
mongoose.connect('mongodb://localhost/ecommerce', function(error) {
    console.log(error);
});
mongoose.set("debug", true);

// Points the backend to all the front end files in the public folder
app.use(express.static(__dirname + "/public"));

// var db = mongo('ecommerce', ['products']);

// creating database and collection
// var ecommerce = db.collection('products');

app.post("/api/products", productController.addProduct);

app.get("/api/products", productController.displayProducts);

app.get("/api/products/:id", productController.displayProductsById);

app.put("/api/products/:id", productController.updateProductsById);

app.delete("/api/products/:id", productController.deleteProductsById);

// ALL THESE ENDPOINTS ARE FOR MONGO-------------------------------------
// app.post('/api/products', function(request, response, next) {
//     ecommerce.save(request.body, function(error, response1) {
//         if(error) {
//             return response.status(500).json(error);
//         } else {
//              return response.json(response1);
//         }
//     });
// });

// app.get('/api/products', function(request, response, next) {
//     var query = request.query;
//     ecommerce.find(query, function(error, response1) {
//         if(error) {
//             response.status(500).json(error);
//         } else {
//             response.json(response1);
//         }
//     });
// });

// app.get('/api/products/:id', function(request, response, next){
//  var idObject = {_id: mongo.ObjectID(request.params.id)};
//    ecommerce.findOne(idObject, function(error, response1){
//        if(error) {
//            response.status(500).json(error);
//        } else {
//            response.json(response1);
//        }
//    });
// });


// app.put('/api/products/:id', function(request, response, next) {
//     var query = {_id: mongo.ObjectId(request.params.id)};
//     delete request.body._id;
//     ecommerce.update(query, request.body, function(error, response1) {
//         if (error) {
//             return response.status(500).json(error);
//         } else {
//             return response.json(response1);
//         }
//     });
// });

// app.delete('/api/products/:id', function(request, response, next) {
//     var query = {_id: mongo.ObjectId(request.params.id)};
//     ecommerce.remove(query, function(error, response1) {
//         if (error) {
//             return response.status(500).jason(error);
//         } else {
//             return response.json(response1);
//         }
//     });
// });

var port = 3000;
app.listen(port, function() {
    console.log("listening on port", port);
});  // clsoing server tag
