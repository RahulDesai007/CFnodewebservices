var express = require('express'); 
var bodyParser = require('body-parser');
var cors = require('cors');
var bodyParser = require('body-parser');
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


app.post('/campaign-detail',cors(),function(req,res,next){
    var content = dataString
    console.log(content);
     res.send({Content:'Excellent',})
});


app.get('/report',function(req,res){
  /*  res.setHeader(CampaignName,[value]);
    res.setHeader(PledgeAmount,[value]);
    res.setHeader(RecievedAmount,[value]);
    res.setHeader(FundRecieved,[value]);
    res.setHeader(Status,[value]); */
    
  
     var report = ([{"CampaignName":"Seed Funding",
              "PledgeAmount":"10000",
              "RecievedAmount":"10000",
              "FundRecieved":"50%",
              "Status":"Recieved",
            //Action:'button'
        },
            {"CampaignName":"Humari Ganga",
              "PledgeAmount":"15000",
              "RecievedAmount":"0",
              "FundRecieved":"66.77%",
              "Status":"Pending",
          //  Action:'button'
        },
            {"CampaignName":"Plant Tree",
              "PledgeAmount":"20000",
              "RecievedAmount":"20000",
              "FundRecieved":"70%",
              "Status":"Not Recieved",
         //   Action:'button'
        }])
        res.send(report)
  //  res.send({status:'sucessfull'})
    console.log(report);
});
         

app.get('/funder_dashboard',function(req,res){
     
    {
        ({"Pledge":"1000",
          "Progressbar": "100%",
          "Reward": "T-Shirt",
          "AmountRaised" : "35000",
          "TotalAmount" : "50000",
          "DaysLeft": "10",
          "TotalDays": "90"})
          console.log("0");
    }
    {
        ({"Pledge":"10000",
          "Progressbar": "50%",
          "Reward": "T-Shirt",
          "AmountRaised" : "30000",
          "TotalAmount" : "60000",
          "DaysLeft": "20",
          "TotalDays": "90"})
          console.log("1");
    }
    {
        ({"Pledge":"500000",
          "Progressbar": "70%",
          "Reward": "T-Shirt",
          "AmountRaised" : "24000",
          "TotalAmount" : "70000",
          "DaysLeft": "30",
          "TotalDays": "80"})
          console.log("2");
    }
    console.log(req.body);
    //res.send({status:'sucessfully reched to funder dashbord'})
})



app.get('/fund-raiser/status-of-fund-transfer',function(req,res){
    console.log(req.body);
       var freport = ([{"CampaignName":"Avarice - A short film",
              "FunderName":"Lokesh Reddi",
              "PledgeAmount":"20000",
              "RecievedFund":"80%",
              "Rewards":"Recieved",
              "Status":"Fund Recieved"
            //Action:'button'
        },
            {"CampaignName":"Spin Be Fit",
              "FunderName":"Kavi",
              "PledgeAmount":"10000",
              "RecievedFund":"70%",
              "Rewards":"Initiate Campaign",
          //  Action:'button'
        },
            {"CampaignName":"The Rhinos Need Help",
              "FunderName":"Mohanraj PB",
              "PledgeAmount":"50000",
              "RecievedFund":"90%",
              "Rewards":"Reward Dilevered",
         //   Action:'button'
        }])
        res.send(freport)
  //  res.send({status:'sucessfull'})
    console.log(freport);
});
   // res.send({status:'sucessfully reched to fundraiser report table'})

app.get('/fund-raiser/dashboard',function(req,res){
    console.log(req.body);
    
    {
        ({"Pledge":"1000",
          "Progressbar": "100%",
          "Reward": "T-Shirt",
          "AmountRaised" : "35000",
          "TotalAmount" : "50000",
          "DaysLeft": "10",
          "TotalDays": "90"})
          console.log("0");
    }
    {
        ({"Pledge":"10000",
          "Progressbar": "50%",
          "Reward": "T-Shirt",
          "AmountRaised" : "30000",
          "TotalAmount" : "60000",
          "DaysLeft": "20",
          "TotalDays": "90"})
          console.log("1");
    }
    {
        ({"Pledge":"500000",
          "Progressbar": "70%",
          "Reward": "T-Shirt",
          "AmountRaised" : "24000",
          "TotalAmount" : "70000",
          "DaysLeft": "30",
          "TotalDays": "80"})
          console.log("2");
    }
    console.log(req.body);
});

app.get('/fund-raiser/list-approve-bids',function(req,res){
    console.log(req.body);
         var Bids = ([{"CampaignName":"Plant Tree",
              "FunderName":"Nikhil Gupta(4 outof 5)",
              "AmountNeeded":"30000",
              "Bid":"100000000"
            //Action:'button'
        },
            {"CampaignName":"Gift a dream camp",
              "FunderName":"Risabh Sharma (3 outof 5)",
              "AmountNeeded":"50000",
              "Bid":"6000"
          //  Action:'button'
        },
            {"CampaignName":"Help baby fight a cancer",
            "FunderName":"Arun Hossamani (2 outof 5)",
              "AmountNeeded":"150000",
              "Bid":"6000"
         //   Action:'button'
        }])
        res.send(Bids)
  //  res.send({status:'sucessfull'})
    console.log(Bids);
});

    //res.send({status:'sucessfully reched to Bids'})

/*app.get('/fund-raiser/list-approve-bids',function(req,res){
    console.log(req.body);
    res.send({status:'sucessfully reched to Bids'})
});*/

app.get('/introvideo',function(req,res){
    console.log(req.body);
    res.send({"videoname":"assets/image/IntroductionCrowdfunding.mp4"})
});

app.get('/service-provider/participants',function(req,res){
    console.log(req.body);
         var Participant = ([{"ID":"1",
              "Type":"Funder",
              "ParticipantName":"Shweta Vahia",
              
            //Action:'button'
        },
            {"ID":"2",
              "Type":"Fund-Raiser",
              "ParticipantName":"Rakesh Bharati",
           
          //  Action:'button'
        },
            {"ID":"3",
            "Type":"Customer",
              "ParticipantName":"Shraddha Kharat",
             
         //   Action:'button'
        }])
        res.send(Participant)
  //  res.send({status:'sucessfull'})
    console.log(Participant);
});


app.get('/service-provider/campaigns',function(req,res){
    console.log(req.body);
    res.send([{"ID":"1",
              "Name":"Help",
              "Type":"Save Water Campaign",
            },
            {"ID":"2",
              "Name":"Promote",
              "Type":"Animal Exploitation",
            },
            {"ID":"3",
              "Name":"Partner",
              "Type":"Orphains Campaign",
            }])
});

app.get('/service-provider/report',function(req,res){
    console.log(req.body);
    res.send({Status:'success'})
});

app.get('/service-provider/transaction-history',function(req,res){
    console.log(req.body);
    res.send([{"CampaignName":"Save Water Campaign",
              "Start Date":"1-06-2017",
              "End Date":"3-10-2017",
              "Goal Amount":"3000",
              "Funder Name":"Rakesh Bharati",
              "Funder Contributer":"19000",
               "Fund Status":"Fund Recieved"
            //Action:'button'
        },
            {"CampaignName":"Animal",
              "Start Date":"20-06-2017",
              "End Date":"30-06-2017",
              "Goal Amount":"5000",
              "Funder Name":"shraddha",
              "Funder Contributer":"2000",
               "Fund Status":"Still Pending"
          //  Action:'button'
        },
            {"CampaignName":"Orphains",
              "Start Date":"10-7-2017",
              "End Date":"20-7-2017",
              "Goal Amount":"8000",
              "Funder Name":"Arun Hossanami",
              "Funder Contributer":"40000",
               "Fund Status":"Fund Recieved"
         //   Action:'button'
        }])
    
});

app.post('/service-provider/froala-editor',function(req,res){
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



app.post('/funder_dashboard/rating',function(req,res){
    console.log(req.body);
    res.send({comments:'excellent',
              Ratings:'4'})
});

app.post('/confirmemail/mail',function(req,res){     
    console.log(req.body);
    res.send({status:'email saved successfully'})
});

app.post('/confirmemail/otp',function(req,res){     
    console.log(req.body);
    res.send({status:'otp saved successfully'})
});

app.post('/start-campaign/img',function(req,res){     
    console.log(req.body);
    res.send({image:'IMG_2783'})
});

app.post('/start-campaign/video',function(req,res){     
    console.log(req.body);
    res.send({video:'valuable resources'})
});

app.get('/campaign-detail/aboutfunder',function(req,res){     
    console.log(req.body);
    res.send({status:'sucess'})
});

app.post('/reset-password',function(req,res){     
    console.log(req.body);
    res.send({ newpassword: 'newpassword'})
});