angular.module('ecommerce').controller('controller', function($scope, service) {


// displaying all available products on the main view
$scope.displayProducts = function() {
    service.getProducts().then(function(response) {
        $scope.products = response;
    });
};

$scope.displayProducts();

// add a product
$scope.product = {};
$scope.addProduct = function(product) {
    service.addProduct(product).then(function(response) {
        $scope.displayProducts();
        $scope.product = {};
        alert("Product has been added");
    });
};


// update a product
$scope.selected = {};
$scope.updateProduct = function(product) {
    service.updateProduct(product).then(function(response) {
        $scope.displayProducts();
        $scope.selected = {};
        alert("Product has been updated");
    });
};

// delete a product
$scope.selected = {};
$scope.removeProduct = function(product) {
    service.removeProduct(product).then(function(response) {
        $scope.displayProducts();
        $scope.selected = {};
        alert("Product has been removed");
    });
};

// select function
$scope.onClick = function(product){
    $scope.selected = product;
};


// Add to cart
$scope.total = 0;
$scope.cart = [];
$scope.addToCart = function(product) {
    $scope.cart.push(product);
    $scope.empty = "";
    $scope.total += product.price;
    $scope.selected = {};
    alert("Added to cart");
};

// Cart is empty message
$scope.empty = "Your shopping cart is empty. Buy some stuff!";

// deleting cart
$scope.deleteCart = function() {
    $scope.cart = [];
    $scope.total = 0;
    $scope.empty = "Your shopping cart is empty. Buy some stuff!";
    alert("Your items have been removed");
};

});  // closing controller
