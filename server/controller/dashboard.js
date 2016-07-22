var mongoose = require('mongoose');

var dashboard = mongoose.model('orders', 'products', 'customers');

function DashboardController(){
  // this.index = function(req,res){
  //   Friends.find({}, function(err, friends){
  //   	if(err){
  //   		console.log("Error loading friends", err);
  //   		res.send("There was an error!");
  //   	}
  //   	else{
  //   		res.json({friends:friends});
  //   	}
  //   })
  // };

  // this.find_one= function(req,res){
  //   Friends.findOne({_id:req.params.id}, function(err, friend){
  //   	if(err){
  //   		console.log("Error loading friend", err);
  //   		res.send("There was an error!");
  //   	}
  //   	else{
  //   		return friend;
  //   	}
  //   })
  // };

  // this.create = function(req,res){
  //   var friend = new friends();
  //   friend.name = req.body.name;
  //   friend.age = req.body.age;
  //   friend.gender = req.body.gender;
  //   friend.save(function(err){
  //   	if(err){
  //   		console.log("Error creating new friend", err);
  //   		res.send("There was an error!");
  //   	}
  //   	else{
  //   		res.json({friend:friend});
  //   	}
  //   })
  // };

  // this.update = function(req,res){
  // 	var friend = find_one();
  // 	friend.name = req.body.name;
  //   friend.age = req.body.age;
  //   friend.gender = req.body.gender;
  //   friend.save(function(err){
  //   	if(err){
  //   		console.log("Error updating friend", err);
  //   		res.send("There was an error!");
  //   	}
  //   	else{
  //   		res.json({friend:friend});
  //   	}
  //   })
  // }

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

  // this.show = function(req,res){
  //   Friends.findOne({_id:req.params.id}, function(err,friend){
  //   	if(err){
  //   		console.log("Error showing friend", err);
  //   		res.send("There was an error!");
  //   	}
  //   	else{
  //   		res.json({friend:friend});
  //   	}
  //   })
  // };
}
module.exports = new DashboardController(); 