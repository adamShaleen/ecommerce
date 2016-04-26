var Product = require("./product");

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
}



};  // exports tag
