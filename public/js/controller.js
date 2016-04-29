angular.module('ecommerce').controller('controller', function($scope, service) {


// displaying all available products on the public and admin view
$scope.displayProducts = function() {
    service.getProducts().then(function(response) {
        $scope.products = response;
    });
};

$scope.displayProducts();

// add a product on the admin view
$scope.product = {};
$scope.addProduct = function(product) {
    service.addProduct(product).then(function(response) {
        $scope.displayProducts();
        $scope.product = {};
    });
};


// update a product on the admin view
$scope.selected = {};
$scope.updateProduct = function(product) {
    service.updateProduct(product).then(function(response) {
        $scope.displayProducts();
        $scope.selected = {};
    });
};

// delete a product on the admin view
$scope.selected = {};
$scope.removeProduct = function(product) {
    service.removeProduct(product).then(function(response) {
        $scope.displayProducts();
        $scope.selected = {};
    });
};

$scope.toggle = false;

// login function
$scope.login = {email: "adamshaleen@gmail.com", password: "password"};  // remove this once ready to go
$scope.signIn = function(login) {
    service.login(login).then(function(response) {
        console.log(response);
        $scope.user = response;
        $scope.toggle = !$scope.toggle;
        $scope.cart = response.cart[0].products;
        $scope.total = $scope.cart.reduce(
            function(prev, cur){
                return prev + cur.id.price*cur.qty;
            },0);
        $scope.login = {};
    });
};

// Assigning the cart to user
function updateCart() {
    $scope.user.cart = [{products: $scope.cart}];
    service.updateUser($scope.user).then(function(response) {
        console.log("Updated Cart");
    });
}


// select a product from the list
$scope.onClick = function(product){
    $scope.selected = product;
};


// Add to cart on public view
$scope.total = 0;
$scope.cart = [];
$scope.addToCart = function(product) {
    console.log("push ", product, "to cart");
    $scope.cart.push({id:product, qty:1});
    $scope.empty = "";
    $scope.total += product.price;
    $scope.selected = {};
    updateCart();
};

// Cart is empty message on public view
$scope.empty = "Your shopping cart is empty. Buy some stuff!";

// deleting cart on public view
$scope.deleteCart = function() {
    $scope.cart = [];
    $scope.total = 0;
    $scope.empty = "Your shopping cart is empty. Buy some stuff!";
    updateCart();
};

});  // closing controller
