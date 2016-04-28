var Product = require("./product.js");
var Order = require("./order.js");
var Cart = require("./cart.js");
var User = require("./user.js");

module.exports = {

    addProduct: function(request, response, next) {
        var newProduct = new Product(request.body);
        newProduct.save(request.body, function(error, responseServer) {
            if(error) {
                return response.status(500).json(error);
            }
            else {
                return response.json(responseServer);
            }
        });
    },

    displayProducts: function(request, response, next) {
        Product.find(function(error, responseServer) {
            if (error) {
                return response(500).json(error);
            }
            else {
                return response.json(responseServer);
            }
        });
    },

displayProductsById: function(request, response, next) {
    Product.findById(request.params.id, function(error, responseServer) {
        if (error) {
            return response.status(500).json(error);
        }
        else {
            return response.json(responseServer);
        }
    });
},

updateProductsById: function(request, response, next) {
    Product.findByIdAndUpdate(request.params.id, request.body, function(error, responseServer) {
        if (error) {
            response.status(500).json(error);
        }
        else {
            return response.json(responseServer);
        }
    });
},

deleteProductsById: function(request, response, next) {
    Product.findByIdAndRemove(request.params.id, request.body, function(error, responseServer) {
        if (error) {
            response.status(500).json(error);
        }
        else {
            response.status(200).json(responseServer);
        }
    });
},

// Step 3------------------------------------------------------

addOrder: function(request, response, next) {
    var newOrder = new Order(request.body);
    newOrder.save(function(error, serverResponse) {
        if (error) {
            response.status(500).json(error);
        } else {
            response.json(serverResponse);
        }
    });
},

displayOrder: function(request, response, next) {
    Order.find().populate({path: "products"}).exec(function(error, serverResponse) {
        if (error) {
            response.status(500).json(error);
        } else {
            response.json(serverResponse);
        }
    });
},

addCart: function(request, response, next) {
    User.findById(request.params.userId, function(error, user) {

        if (error) {
            return response.status(500).json(error);
        } else {
            console.log(user.cart);
            // user.cart
            return response.json(serverResponse);
        }
    });
},



login: function(request, response, next) {
    User.findOne({email: request.body.email})
        .populate("cart.products.id")
        .exec (function(error, user) {
        if (user.password === request.body.password) {
            return response.json(user);
        }
        else {
            console.log(error);
            return response.status(404).json(error);
        }
    });
},

updateUser: function(request, response, next) {
    User.findByIdAndUpdate(request.params.id, request.body, function(error, serverResponse) {
        if (error) {
            return response.status(500).json(error);
        } else {
            return response.json(serverResponse);
        }
    });
}


};  // exports tag
