const port=3000;
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const Create = require('./controllers/createController');
const Update = require('./controllers/updateController');
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

//GETS START HERE

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

app.get('/', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('home', {title: "Home",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/login', (req,res)=>{ //inverse persistent
    if(req.session.loggedIn==true){
        res.redirect("/");
    }else{
        res.render('login', {title: "Login",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/logout', (req,res)=>{ //no persistent
    req.session.loggedIn=false;
    res.redirect('/login');
});

app.get('/signup', (req,res)=>{ //no persistent
    res.render('signup', {title: "Sign Up",councilName:"USC",councilType:"College Council"});
    //I think it's better if an admin makes the accounts, pina ISMIS.
});

app.get('/about', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('about', {title: "About",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/officerActivity', (req,res) =>{    
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        connection.query("SELECT * FROM membership_forms",(err,result)=>{
            let forms=result;
            res.render('masterlist',{ title:"Testing", memForm:result,councilName:"USC",councilType:"College Council"});
        })
    }
});

app.get('/adminForms', (req,res) =>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('adminActivity',{title: "Forms",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/adminCouncils', (req,res) =>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('adminCouncils',{title: "Admin Council",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/addCouncil', async (req,res) =>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
       let chapters = await Read.getAllChapters()
       res.render('addCouncil',{title: "Add Council", chapters: chapters,councilName:"USC",councilType:"College Council"});
    }
});


//DOCUMENTS START HERE
app.get('/docs', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('docs', {title: "Documents",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/addReport', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('addReport', {title: "Add Report",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/activityForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{ 
        res.render('addReport',{title: "Activity Form",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/membershipForm', async (req,res)=>{
    res.render('membershipForm',{title: "Membership Form", session:req.session,councilName:"USC",councilType:"College Council"});
});

app.get('/committeeMembershipForm', async (req,res)=>{
    // let councilName = await Read.getCouncilName(sessionId)
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        let committees = await Read.getCommitteesOfCouncil()
        res.render('committeeMembershipForm',{title: "Membership Form", committees: committees, session: req.session,councilName:"USC",councilType:"College Council"});
    }
});

app.get('/committeeMembershipForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('committeeMembershipForm',{title: "Committee Membership Form",councilName:"USC",councilType:"College Council"});
    }
});
//When a specific committee is selected
app.get('/generatedCommitteeMembershipForm/:type', urlEncodedParser, async (req,res)=>{
    let members = await Read.getMembersOfCommittee(req)
    res.send(members);
});
//When a adding members to a committee, show all members of that council without a committee yet
app.get('/getNoneCommitteeMembers', urlEncodedParser, async (req,res)=>{
    let members = await Read.getNoneCommitteeMembers()
    res.send(members);
});


app.get('/activityRequestForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('activityRequestForm',{title: "Activity Request Form",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/activityReportForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('activityReportForm',{title: "Activity Report Form",councilName:"USC",councilType:"College Council"});
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
                res.render('uniformRequest',{
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
        res.render('uniformClaimSlip', {title: "Uniform Claim Slip",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/serviceReq', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('serviceRequest', {title: "Service Request Form",councilName:"USC",councilType:"College Council"});
    }
});


app.get('/filledMemForm/:id', async (req,res)=>{
    let member = await Read.getFilledMemForm(req);
    let trainings = await Read.getMemTrainings(member);
    let orgs = await Read.getMemOrgs(member);
    res.render('filledMembershipForm', {title: "Membership Form", session:req.session, mem: member, trainings: trainings, orgs: orgs});    
});

//DOCUMENTS END HERE
//GETS END HERE

//POST requests
app.post('/signup', urlEncodedParser, (req,res)=>{
    let salt= bcrypt.genSaltSync(saltR);
    let pass= bcrypt.hashSync(req.body.pass, salt);
    connection.query("INSERT INTO `users` (`username`, `password`, `createdAt`, `updatedAt`) VALUES ('"+req.body.username+"', '"+pass+"',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)",(err,result)=>{
        res.redirect('/')
    });
});

app.post('/login', urlEncodedParser, (req,res)=>{
    connection.query("SELECT * FROM `users` WHERE username='"+req.body.username+"'",(err,result)=>{
        if(err)throw(err);
        if (bcrypt.compareSync(req.body.pass, result[0]['password'])){
            req.session.loggedIn=true;
            req.session.user=result[0]['id'];
            req.session.type=result[0]['type'];
            if (req.session.type == 'Chapter Admin' || req.session.type == 'Chapter Youth Advisor'){
                res.redirect('/admin')
            }
            else if (req.session.type == 'Council' || req.session.type == 'Council Advisor'){
                res.redirect('/')
            }  
        }else{
            console.log("login failed");
            res.redirect('/login'); //idk ideal redirect
        }
    });
});

app.post('/act/addCouncil', urlEncodedParser, async (req,res) =>{
    await Create.addCouncil(req)
    console.log(req.body.councilName+" "+req.body.chapter);
    res.redirect('/addCouncil');
});

app.post('/act/addMemberForm', urlEncodedParser, async (req,res) =>{
    await Create.addMemberForm(req)
    console.log("ADDING NEW FORM");
    res.redirect('/membershipForm');
});

app.post('/act/addCommitteeMember', urlEncodedParser, async (req,res) =>{
    await Create.addCommitteeMember(req)
    res.send('success');
});

app.post('/act/add', urlEncodedParser, (req,res) =>{ //unif req 
    //design: 0 is RCY, 1 is Advisor; as per Derek's instructions
    console.log("INSERT INTO `users` (`date_requested`, `volunteer`, `type`, `qty`, `size`, `design`, `or_number`) VALUES ('"+req.body.dateReceived+"', '"+req.body.volunteer+"','"+req.body.type+"','"+req.body.qty+"','"+req.body.size+"','"+req.body.design+"','"+req.body.Receipt+"')");
});

// For approval/rejection of forms
app.post('/memForm/presApprove/:id', async (req,res)=>{
    await Update.memFormPresApprove(req);  
    res.redirect('/filledMemForm/' + req.params.id)
});
app.post('/memForm/presReject/:id', async (req,res)=>{
    await Update.memFormPresReject(req);  
    res.redirect('/filledMemForm/' + req.params.id)
});
app.post('/memForm/memApprove/:id', async (req,res)=>{
    await Update.memFormMemApprove(req);  
    res.redirect('/filledMemForm/' + req.params.id)
});
app.post('/memForm/memReject/:id', async (req,res)=>{
    await Update.memFormMemReject(req);  
    res.redirect('/filledMemForm/' + req.params.id) 
});
app.post('/memForm/advApprove/:id', async (req,res)=>{
    await Update.memFormAdvApprove(req);  
    res.redirect('/filledMemForm/' + req.params.id)
});
app.post('/memForm/advReject/:id', async (req,res)=>{
    await Update.memFormAdvReject(req);  
    res.redirect('/filledMemForm/' + req.params.id) 
});
//POST requests END HERE

app.get('/test',(req,res)=>{//Derek uses this to test some stuff because eye yam dumdum
    connection.query("SELECT * FROM membership_forms",(err,result)=>{
        let forms=result;
        res.render('masterlist', {
            title:"Testing",
            memForm:result
        });    
    });
});

app.listen(port,()=>{
    console.log("Server is running");
});