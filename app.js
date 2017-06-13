var express = require('express'); 
var bodyParser = require('body-parser');
var cors = require('cors');
var ledger = require('./src/blockchain/blockchainSdk');
var app = express();
//var router=express.Router();
app.use(bodyParser.json());
//app.use(express.bodyParser());
app.use(require('./controllers'));
app.use(cors());


//router.use('/service',require('./service'));
// module.exports=router;
 app.listen('8082', cors(), function () {

    console.log("server is running");

});
app.post('/campaign-detail',function(req,res){
    console.log(req.body);
    res.send({status:'sucessfully registered'})
});

app.get('/report',function(req,res){
    console.log(req.body);
    res.send({status:'sucessfully reched to funder report table'})
});

app.get('/funder_dashboard',function(req,res){
    console.log(req.body);
    res.send({status:'sucessfully reched to funder dashbord'})
})

app.get('/fund-raiser/status-of-fund-transfer',function(req,res){
    console.log(req.body);
    res.send({status:'sucessfully reched to fundraiser report table'})
});

app.get('/fund-raiser/dashboard',function(req,res){
    console.log(req.body);
    res.send({status:'sucessfully reched to fundraiser dashbord'})
});

app.get('/fund-raiser/list-approve-bids',function(req,res){
    console.log(req.body);
    res.send({status:'sucessfully reched to Bids'})
});

/*app.get('/fund-raiser/list-approve-bids',function(req,res){
    console.log(req.body);
    res.send({status:'sucessfully reched to Bids'})
});*/

app.get('/introvideo',function(req,res){
    console.log(req.body);
    res.send({videoname:'assets/image/IntroductionCrowdfunding.mp4'})
});

app.get('/service-provider/participants',function(req,res){
    console.log(req.body);
    res.send({ID:'1',
              Type:'Funder',
              ParticipantName:'Shweta Vahia',
            Action:'button'})
});

app.get('/service-provider/campaigns',function(req,res){
    console.log(req.body);
    res.send({ID:'1',
              Name:'Help',
              Type:'Save Water Campaign',
            Action:'button'})
});

app.get('/service-provider/report',function(req,res){
    console.log(req.body);
    res.send({Status:'sucess'})
});

app.get('/service-provider/transaction-history',function(req,res){
    console.log(req.body);
    res.send({Status:'success'})
});

app.post('/service-provider/froala-editor',function(req,res){
    console.log(req.body);
    res.send({status:'your story is sucessfully submitted'})
});

app.post('/funder_dashboard',function(req,res){
    console.log(req.body);
    res.send({comments:'excellent',
              Ratings:'4'})
});

app.post('/confirmemail',function(req,res){     
    console.log(req.body);
    res.send({status:'email saved successfully'})
});