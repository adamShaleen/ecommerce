angular.module('ecommerce').service("service", function($http) {

this.getProducts = function() {
    return $http ({
        method: "GET",
        url: "/api/products"
    }).then(function(response) {
        return response.data;
    });
};


this.addProduct = function(product) {
    return $http ({
        method: "POST",
        url: "/api/products",
        data: product
    });
};

this.updateProduct = function(product) {
    return $http ({
        method: "PUT",
        url: "/api/products/" + product._id,
        data: product
    });
};


this.removeProduct = function(product) {
    return $http ({
        method: "DELETE",
        url: "/api/products/" + product._id,
    });
};


});  // closing tag
