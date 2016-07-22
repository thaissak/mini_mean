var mongoose = require('mongoose');

var customers = mongoose.model('customers');

function CustomersController(){
  this.get_customers = function(req,res){
    customers.find({}, function(err, customers){
      if(err){
        console.log("error retrieving all customers", err);
      }
      else{
        console.log("This is the response to get all customers:", customers);
        res.json(customers);
      }
    })
  },

  this.addCustomer = function(req,res){
    customer = new customers(req.body);
    customer.save(function(err,result){
      if(err){
        console.log("error inserting new customer to db", err);
      }
      else{
        console.log("inserted new customer");
        res.json(result);
      }
    })
  }
  

  // this.delete = function(req,res){
  //   Friends.remove({_id:req.params.id}, function(err){
  //   	if(err){
  //   		console.log("Error deleting friend", err);
  //   		res.send("There was an error!");
  //   	}
  //   	else{
  //   		res.json({status:'ok'});
  //   	}
  //   })
  // };

  
}
module.exports = new CustomersController(); 