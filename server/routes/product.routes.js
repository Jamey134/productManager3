const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get("/", ProductController.testTest) //TESTING ROUTE
    
    app.get('/api/products', ProductController.findAllProducts); // Display all products
    
    app.post('/api/products', ProductController.createProduct); // Create a product
    
    app.get('/api/products/:id', ProductController.findOneProduct); // Display one product by ID
    
    app.put('/api/products/:id', ProductController.updateProduct); // Update the product info
    
    app.delete('/api/products/:id', ProductController.deleteProduct);  // Delete a product by ID
}