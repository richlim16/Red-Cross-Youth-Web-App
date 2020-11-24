const port=3000;
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const Create = require('./controllers/createController');
const Read = require('./controllers/readController');

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('home', {title: "Home"});
});

app.get('/members', (req,res)=>{
    ads=[
        {name:"Nakano Miku", pic: "http://imgur.com/hRst2bwh.jpg", id:1},
        {name: "Rory Mercury", pic: "http://imgur.com/GaBdGdz.png", id:2}
    ];
    ads2=[
        {name:"Nakano Miku", pic: "http://imgur.com/hRst2bwh.jpg", id:1},
        {name: "Rory Mercury", pic: "http://imgur.com/GaBdGdz.png", id:2},
        {name: "Dlanor A. Knox", pic: "https://i.imgur.com/ztUVQBU.jpg", id:3},
        {name: "Kiryuu Minazuki", pic: "http://imgur.com/TiHTR8N.jpg", id:4},
        {name: "Kushina Anna", pic: "http://imgur.com/5Pz32yG.jpg", id:5}
    ];
    // console.log(ads);
    res.render('members',{
        title: "Members",
        sysAds: ads,
        appAds: ads,
        couAdv: ads2,
        couOff: ads2
    });
});

app.get('/login', (req,res)=>{
    res.render('login', {title: "Login"});
});

app.get('/signup', (req,res)=>{
    res.render('signup', {title: "Sign Up"});
    //I think it's better if an admin makes the accounts, pina ISMIS.
});

app.get('/about', (req,res)=>{
    res.render('about', {title: "About"});
});

app.get('/officerActivity', (req,res) =>{
    res.render('officerActivity',{title: "Officers Activity"});
});

app.get('/adminActivity', (req,res) =>{
    res.render('adminActivity',{title: "Admin Activity"});
});

app.get('/adminCouncils', (req,res) =>{
    res.render('adminCouncils',{title: "Admin Council"});
});

app.get('/addCouncil', async (req,res) =>{
    let chapters = await Read.getAllChapters()
    res.render('addCouncil',{title: "Add Council", chapters: chapters});
});


//DOCUMENTS START HERE
app.get('/docs', (req,res)=>{
    res.render('docs', {title: "Documents"});
});

app.get('/addReport', (req,res)=>{
    res.render('addReport', {title: "Add Report"});
});

app.get('/activityForm', (req,res)=>{
    res.render('addReport',{title: "Activity Form"});
});

app.get('/membershipForm', (req,res)=>{
    res.render('membershipForm',{title: "Membership Form"});
});

app.get('/committeeMembershipForm', (req,res)=>{
    res.render('committeeMembershipForm',{title: "Committee Membership Form"});
});

app.get('/activityRequestForm', (req,res)=>{
    res.render('activityRequestForm',{title: "Activity Request Form"});
});

app.get('/activityReportForm', (req,res)=>{
    res.render('activityReportForm',{title: "Activity Report Form"});
});

app.get('/unifRequest', (req,res)=>{
    res.render('uniformRequest', {title: "Uniform Request"});
});

app.get('/unifClaim', (req,res)=>{
    res.render('uniformClaimSlip', {title: "Uniform Claim Slip"});
});

app.get('/serviceReq', (req,res)=>{
    res.render('serviceRequest', {title: "Service Request Form"});
});
//DOCUMENTS END HERE


//POST requests
app.post('/act/addCouncil', urlEncodedParser, async (req,res) =>{
    console.log(req.body)
    await Create.addCouncil(req)
    res.redirect('/addCouncil');
});

app.post('/act/addMemberForm', urlEncodedParser, async (req,res) =>{
    await Create.addMemberForm(req)

    res.redirect('/membershipForm');
});


//POST requests END HERE

app.get('/admin',(req,res)=>{
    res.render('adminHome');
});

app.get('/adminProfile',(req,res)=>{
    res.render('adminEditProf');
});

app.listen(port,()=>{
    console.log("Server is running");
});