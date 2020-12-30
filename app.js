const port=3000;
const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const Create = require('./controllers/createController');
const Update = require('./controllers/updateController');
const Read = require('./controllers/readController');

// const routes = require ('./routes/routes')



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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.send({title: "Home",councilName:"USC",councilType:"College Council"});
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

app.post('/signup', urlEncodedParser, async (req,res)=>{
    await Create.signUp(req);
    res.redirect('/login');
});

app.post('/login', urlEncodedParser, async (req,res)=>{
    console.log(req.body)
    let result = await Read.getUser(req)
    if (result != null) {
        if (bcrypt.compareSync(req.body.pass, result['password'])){
            req.session.loggedIn=true;
            req.session.user=result['id'];
            req.session.type=result['type'];
            if (req.session.type == 'Chapter Admin' || req.session.type == 'Chapter Youth Advisor'){
                res.send({userId: req.session.user, userType: req.session.type})
            }
            else if (req.session.type == 'Council' || req.session.type == 'Council Advisor'){
                res.send({userId: req.session.user, userType: req.session.type})
            }  
        }else{
            console.log("login failed");
            res.send("wrong")
        }
    }
    else{
        res.send("wrong")
    }
});


app.get('/about', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('about', {title: "About",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/officerActivity/:type', async (req,res) =>{    
    if (req.params.type == 'Council'){
        let result = await Read.getCouncilPendingMemForms()
        res.send(result)
    }
    else if (req.params.type == 'Council Advisor'){
        let result = await Read.getCouncilAdvPendingMemForms()
        res.send(result)
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
       let chapters = await Read.getAllChapters()
       res.send(chapters)
    
});

app.get('/allCouncils', async (req,res) =>{
    let councils = await Read.getAllCouncils()
    res.send(councils)
 
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
        res.render('committeeMembershipForm',{title: "Membership Form", session: req.session,councilName:"USC",councilType:"College Council"});
    }
});

app.get('/committeeMembershipForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.send(false);
    }else{
        res.render('committeeMembershipForm',{title: "Committee Membership Form",councilName:"USC",councilType:"College Council"});
    }
});
//When a specific committee is selected
app.get('/generatedCommitteeMembershipForm/:type&:userId', urlEncodedParser, async (req,res)=>{ 
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
//DOCUMENTS END HERE

//POST requests
app.post('/act/addCouncil', urlEncodedParser, async (req,res) =>{
    console.log(req.query)
    await Create.addCouncil(req)
    // res.redirect('/addCouncil');
});

app.post('/act/addMemberForm', urlEncodedParser, async (req,res) =>{
    console.log(req.body)
    await Create.addMemberForm(req)
    console.log("ADDING NEW FORM");
    // res.redirect('/membershipForm');
});

app.post('/act/addCommitteeMember', urlEncodedParser, async (req,res) =>{
    await Create.addCommitteeMember(req)
    res.send('success');
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

app.get('/test',(req,res)=>{
    connection.query("SELECT * FROM membership_forms",(err,result)=>{
        let forms=result;
        res.render('masterlist', {
            title:"Testing",
            memForm:result
        });    
    });
});

app.get('/filledMemForm/:id', async (req,res)=>{
    let member = await Read.getFilledMemForm(req);
    let trainings = await Read.getMemTrainings(member);
    let orgs = await Read.getMemOrgs(member);
    // res.render('filledMembershipForm', {title: "Membership Form", session:req.session, mem: member, trainings: trainings, orgs: orgs});   
    res.send({member: member, trainings: trainings, orgs: orgs}) 
});




// For approval/rejection of forms
app.post('/memForm/presApprove/:id', async (req,res)=>{
    await Update.memFormPresApprove(req);  
    let member = await Read.getFilledMemForm(req)
    res.send({sig:member.council_pres_sig})
});
app.post('/memForm/presReject/:id', async (req,res)=>{
    await Update.memFormPresReject(req);  
    let member = await Read.getFilledMemForm(req)
    console.log(member)
    res.send({sig:member.council_pres_sig})
});
app.post('/memForm/memApprove/:id', async (req,res)=>{
    await Update.memFormMemApprove(req);  
    let member = await Read.getFilledMemForm(req)
    res.send({sig:member.member_sig})
});
app.post('/memForm/memReject/:id', async (req,res)=>{
    await Update.memFormMemReject(req);  
    let member = await Read.getFilledMemForm(req)
    res.send({sig:member.member_sig}) 
});
app.post('/memForm/advApprove/:id', async (req,res)=>{
    await Update.memFormAdvApprove(req);  
    let member = await Read.getFilledMemForm(req)
    res.send({sig:member.council_adv_sig})
});
app.post('/memForm/advReject/:id', async (req,res)=>{
    await Update.memFormAdvReject(req);  
    let member = await Read.getFilledMemForm(req)
    res.send({sig:member.council_adv_sig})
});

app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(port,()=>{
    console.log("Server is running");
});