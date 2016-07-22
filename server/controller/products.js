var mongoose = require('mongoose');

var products = mongoose.model('products');

function ProductsController(){
  this.get_products = function(req,res){
    products.find({}, function(err, products){
      if(err){
        console.log("error retrieving all products", err);
      }
      else{
        console.log("This is the response to get all products:", products);
        res.json(products);
      }
    })
  },

  this.addProduct = function(req,res){
    product = new products(req.body);
    product.save(function(err, result){
      if(err){
        console.log("error inserting new product to db", err);
      }
      else{
        console.log("inserted new product");
        res.json(result);
      }
    })
  }
}
module.exports = new ProductsController(); 