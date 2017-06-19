var express = require('express');
var router=express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

global.users=[];

global.campaign=[];

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


global.filteredcampaign=[];
router.get('/userdetail',cors(),function(req,res,next){
	console.log("entering userdetail service and sending the details");
return res.json({
users:global.users,
error:false
});
});


router.post('/register',cors(),function(req,res,next){
	console.log("entering register service ");
	for(let i=0;i<global.users.length;i++){
      if (req.body.userType === "Organisation") {
		  console.log("entering if condition after checking usertype",req.body.userType);
		if(global.users[i].organisationemail===req.body.organisationemail ){
			 console.log("entering in if block after checking organisationemail",req.body.organisationemail);
return res.json({
message:'organisation already exist',
error:true
});
	  }
	  if(!req.body.organisationemail ){
		  console.log("entering in if block after checking organisationemail is empty or not",req.body.organisationemail);
return res.json({
message:'organisation name missing',
error:true
});
	  }
	  } else {
		  	  if(global.users[i].email===req.body.email ){
					console.log("entering in if block if usertype is individual",req.body.email);
return res.json({
message:'user already exist',
error:true
});
	  }
	  
	  if(!req.body.email ){
		  console.log("entering in if block after checking email is empty or not",req.body.email);
return res.json({
message:'username missing',
error:true
});
	  }
	  }
	}
console.log(req.body);
global.users.push(req.body);	

return res.json({
message:'success',
error:false
});
	
});
router.put('/update/:email/:organisationemail',cors(),function(req,res,next){
	for(let i=0;i<global.users.length;i++){
      if(global.users[i].email===req.params.email || global.users[i].organisationemail===req.params.organisationemail){
       global.users[i].name=req.body.name;
	   global.users[i].email=req.body.email;
	   global.users[i].phoneno=req.body.phoneno;
	   global.users[i].organisationname=req.body.organisationname;
	   global.users[i].phoneno=req.body.phoneno;
	   global.users[i].organisationphoneno=req.body.organisationphoneno;
	   global.users[i].password=req.body.password;
	   global.users[i].documenttype=req.body.documenttype;
	   global.users[i].facebook=req.body.facebook;
	   global.users[i].blog=req.body.blog;
	   global.users[i].websiteurl=req.body.websiteurl;
	   global.users[i].youtube=req.body.youtube;
	   global.users[i].designation=req.body.designation;

       return res.json({
message:'success',
error:false
});
}
}
return res.status(404).json({
message:'user not found',
error:true
});
});


router.delete('/delete/:email/:organisationemail',cors(),function(req,res,next){
for(let i=0;i<global.users.length;i++){
      if(global.users[i].email===req.params.email || global.users[i].organisationemail===req.params.organisationemail){
global.users.splice(i,1);
return res.json({
message:'success',
error:false
});
}
}
return res.status(404).json({
message:'user not found',
error:true
});
});

router.get('/updatedata/:email/:organisationemail',cors(),function(req,res,next){
for(let i=0;i<global.users.length;i++){
	if(global.users[i].email===req.params.email || global.user[i].organisationemail===req.params.organisationemail){
return res.json({
users:global.users[i],
error:false
});
}
}
return res.status(404).json({
message:'user not found',
error:true
});
});

router.post('/login',cors(),function(req,res,next){
	console.log("entering in login service",req.body);
console.log(global.users.length);
	for(let i=0;i<global.users.length;i++){
		console.log("entering in if block after checking email and password",req.body.email,req.body.password);
		console.log("entering in if block after checking email and password",global.users[i].email,global.users[i].password);
		
	if(global.users[i].email===req.body.email && global.users[i].password===req.body.password){
		console.log(global.users);
		console.log("entering in if block after checking email and password",req.body.email,req.body.password);
return res.json({
message:'login successful',
error:false
});
	} 
	}
return res.json({
message:'name or email is incorrect',
error:true
});

	
});

router.post('/campaign-detail',cors(),function(req,res,next){
	console.log("entering in comments",req.body);
console.log(global.users.length);
return res.json({
message:'successful',
error:false
});
});

router.get('/campaigndetail',cors(),function(req,res,next){
	console.log("entering in campaigndetail service to fetch all campaign");
return res.json({
campaign:global.campaign,
error:false
});
});

router.post('/createcampaign',cors(),function(req,res,next){
	console.log(req);
	console.log("entering in campaigndetail service to store campaign details");
	for(let i=0;i<global.campaign.length;i++){

      if(global.campaign[i].campaigntitle===req.body.campaigntitle ){
		  console.log("entering in if block after checking campaigntitle",req.body.campaigntitle);
		  
		 return res.json({
message:'campaignname already exist',
error:true
});
	  }
	  
	}
	
console.log(req.body);
global.campaign.push(req.body);	

return res.json({
message:'success',
error:false
});
});



router.post('/testservice', cors(),function(req,res){
	console.log(req.body);

	return res.json({
		message:'success',
		error:false
		});
});



router.get('/browsecampaign/:campaigncategory',cors(),function(req,res,next){
	global.filteredcampaign=[];
	console.log(global.campaign.length);
for(let i=0;i<global.campaign.length;i++){
	if(global.campaign[i].campaigncategory===req.params.campaigncategory ){
		global.filteredcampaign.push(global.campaign[i]);

	} else if (global.campaign[i].campaigncategory!==req.params.campaigncategory) {

return res.json({
message:'campaign not found',
error:true
});
	}
}
console.log(global.filteredcampaign);
return res.json({
campaign:global.filteredcampaign,
error:false
});
});


module.exports = router;