const port=3000;
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const Create = require('./controllers/createController');
const Read = require('./controllers/readController');

const session = require("express-session");
const bcrypt = require("bcrypt");
const saltR = 10;
const mysql = require("mysql");
const connection =  mysql.createConnection({
    multipleStatements: true,
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "rcy_db"
});

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(session({
    secret: "EyeYam-bUk1u!?",
    saveUninitialized: true,
    resave: true
}));

app.get('/', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('home', {title: "Home"});
    }
});

app.get('/members', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
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
    }
});

app.get('/login', (req,res)=>{ //inverse persistent
    if(req.session.loggedIn==true){
        res.redirect("/");
    }else{
        res.render('login', {title: "Login"});
    }
});

app.get('/logout', (req,res)=>{ //no persistent
    req.session.loggedIn=false;
    res.redirect('/login');
});

app.get('/signup', (req,res)=>{ //no persistent
    res.render('signup', {title: "Sign Up"});
    //I think it's better if an admin makes the accounts, pina ISMIS.
});

app.post('/signup', urlEncodedParser, (req,res)=>{
    let salt= bcrypt.genSaltSync(saltR);
    let pass= bcrypt.hashSync(req.body.pass, salt);
    connection.query("INSERT INTO `users` (`username`, `password`) VALUES ('"+req.body.username+"', '"+pass+"')",(err,result)=>{
        res.redirect('/')
    });
});

app.post('/login', urlEncodedParser, (req,res)=>{
    connection.query("SELECT * FROM `users` WHERE username='"+req.body.username+"'",(err,result)=>{
        if (bcrypt.compareSync(req.body.pass, result[0]['password'])){
            req.session.loggedIn=true;
            req.session.user=result[0]['id'];
            res.redirect('/');
        }else{
            console.log("login failed");
            res.redirect('/login'); //idk ideal redirect
        }
    });
});

app.get('/about', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('about', {title: "About"});
    }
});

app.get('/officerActivity', (req,res) =>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        // res.render('officerActivity',{title: "Officers Activity"});
        res.render('masterlist',{title: "Officers Activity"});
    }
});

app.get('/adminActivity', (req,res) =>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('adminActivity',{title: "Admin Activity"});
    }
});

app.get('/adminCouncils', (req,res) =>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('adminCouncils',{title: "Admin Council"});
    }
});

app.get('/addCouncil', async (req,res) =>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
       let chapters = await Read.getAllChapters()
       res.render('addCouncil',{title: "Add Council", chapters: chapters});
    }
});


//DOCUMENTS START HERE
app.get('/docs', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('docs', {title: "Documents"});
    }
});

app.get('/addReport', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('addReport', {title: "Add Report"});
    }
});

app.get('/activityForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{ 
        res.render('addReport',{title: "Activity Form"});
    }
});

app.get('/membershipForm', async (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        let committees = await Read.getCommitteesOfCouncil()
        res.render('membershipForm',{title: "Membership Form", committees: committees});
    }
});

app.get('/committeeMembershipForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('committeeMembershipForm',{title: "Committee Membership Form"});
    }
});

app.get('/activityRequestForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('activityRequestForm',{title: "Activity Request Form"});
    }
});

app.get('/activityReportForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('activityReportForm',{title: "Activity Report Form"});
    }
});

app.get('/unifRequest', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        connection.query("SELECT id, name FROM `councils`",(err,result)=>{
            let council=result;
            connection.query("SELECT id, username as name FROM `users`",(err,result)=>{
                let people=result;
                res.render('uniformRequest', {
                    title: "Uniform Request",
                    councils: council,
                    peoples: people
                });
            });
        });
    }
});

app.get('/unifClaim', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('uniformClaimSlip', {title: "Uniform Claim Slip"});
    }
});

app.get('/serviceReq', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('serviceRequest', {title: "Service Request Form"});
    }
});
//DOCUMENTS END HERE


//POST requests
app.post('/addCouncil', urlEncodedParser, async (req,res) =>{
    await Create.addCouncil(req)
    console.log(req.body.councilName+" "+req.body.chapter);
    res.redirect('/addCouncil');
});

app.post('/membershipForm', urlEncodedParser, async (req,res) =>{
    await Create.addMemberForm(req)
    console.log("ADDING NEW FORM");
    res.redirect('/membershipForm');
});


app.post('/act/add', urlEncodedParser, (req,res) =>{ //unif req 
    //design: 0 is RCY, 1 is Advisor; as per Derek's instructions
    console.log("INSERT INTO `users` (`date_requested`, `volunteer`, `type`, `qty`, `size`, `design`, `or_number`) VALUES ('"+req.body.dateReceived+"', '"+req.body.volunteer+"','"+req.body.type+"','"+req.body.qty+"','"+req.body.size+"','"+req.body.design+"','"+req.body.Receipt+"')");
});

//POST requests END HERE

app.get('/admin',(req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('adminHome');
    }
});

app.get('/adminProfile',(req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('adminEditProf');
    }
});

app.listen(port,()=>{
    console.log("Server is running");
});