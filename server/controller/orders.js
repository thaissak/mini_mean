var mongoose = require('mongoose');

var orders = mongoose.model('orders');
var products = mongoose.model('products');

function OrdersController(){
  this.get_orders = function(req,res){
    orders.find({}).populate('_customer_name _prod_name').exec(function(err, orders){
        if(err){
          console.log("error retrieving all orders", err);
        }
        else{
          console.log("This is the response to get all orders:", orders);
          res.json(orders);
        }
      })
  },

  this.addOrder = function(req,res){
    order = new orders(req.body);
    console.log("thats my order req body", req.body);
    console.log("in addOrder server", order);
    order.save(function(err){
      if(err){
        console.log("error saving order", err);
      }
      else{
        console.log("This is the response to save order");
        res.json({status: 'ok'});
      }
    })
  }

    // order = new orders(req.body);
    // products.find({prod_name:'req.body.prod_name'}, function(err, product){
    //   if(err){
    //     console.log("error retrieving product for order", err);
    //   }
    //   else{
    //     console.log("This is the response to get the product for order:", product);
    //     console.log(req.body.quantity, product.quantity);
    //     if(req.body.quantity > product.quantity){
    //       res.json({quantity:'greater'});
    //     }
    //     else{
    //       order.save(function(err, result){
    //         if(err){
    //           console.log("error inserting new order to db", err);
    //         }
    //         else{
    //           console.log("inserted new order");
    //           res.json(result);
    //         }
    //       })
    //       // product.updateQtt
    //     }  
    //   }
    // })  
  

}
module.exports = new OrdersController(); 