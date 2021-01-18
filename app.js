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
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);        
        res.render('home',{
            title:"Home",
            user:{
                name:req.session.username,                
            }
        })
    }
});
      
//GETS START HERE
app.get('/admin',async(req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{        
        let docs = await Read.getDocsFromCouncils();
        let councils = await Read.getAllCouncils();
        if(docs != null && councils != null){            
            res.render('adminHome',{
                title: "Home",
                adminNav:{name:req.session.username,position:req.session.type},
                forms:docs,
                council:councils
            });
        }
    };
});

app.get('/adminProfile',(req,res)=>{ //inaccessible
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        res.render('adminEditProf',{
            title: "Edit Profile",
            adminNav: {
                name: req.session.name, 
                chapter: req.session.chapter.name
            }
        });
    }
});

app.get('/login', (req,res)=>{ //inverse persistent
    if(req.session.logged_in==true){
        res.redirect("/");
    }else{
        res.render('login', {
            title: "Login",
            user:{
                name: "Red Cross", 
                type: "Youth"
            }
        });
    }
});

app.post('/login', urlEncodedParser, async (req,res)=>{
    console.log(req.body)
    let result = await Read.getUser(req)
    if (result != null) {
        if (bcrypt.compareSync(req.body.pass, result['password'])){
            req.session.logged_in=true;
            req.session.user_id=result['id'];
            req.session.username=result['username'];
            req.session.type=result['type'];
            if (req.session.type == 'Chapter Admin' || req.session.type == 'Chapter Youth Advisor'){                
                let data = await Read.getChapterUser(req);
                req.session.chapter_id=data.chapter_personnel['chapter_id'];                
                //res.send(req.session)
                res.redirect('/admin');
            }
            else if (req.session.type == 'Council' || req.session.type == 'Council Advisor'){
                let data = await Read.getCouncilUser(req)
                req.session.council={}
                req.session.council.id=data.council['id']
                req.session.council.name=data.council['name']
                req.session.council.categ=data.council['category']
                //res.send(req.session)                
                res.redirect('/');
            }
        }else{
            console.log("login failed");
            res.send("wrong")
        }
   };
})

app.get('/logout', (req,res)=>{ //no persistent
    req.session.logged_in=false;
    res.redirect('/login');
});

app.get('/signup', (req,res)=>{ //no persistent
    connection.query("SELECT id, name FROM `councils`",(err,result)=>{
        let councils=result;
        console.log(result+" "+"Result 1")
        connection.query("SELECT id, name FROM `chapters`",(err,result)=>{
            let chapters=result;
            console.log(result+" "+"Result 2")
            res.render('signup', {
                title: "Sign Up",
                user:{
                    name: "Red Cross", 
                    type: "Youth"
                },
                councils:councils,
                chapters:chapters
            });
        });
    });    
});

app.post('/signup', urlEncodedParser, async (req,res)=>{
    await Create.signUp(req);
    res.redirect('/login');
});

/*app.post('/signup', urlEncodedParser, (req,res)=>{
    let salt= bcrypt.genSaltSync(saltR);
    let pass= bcrypt.hashSync(req.body.pass, salt);
    connection.query("INSERT INTO `users` (`id`,`username`, `password`, `type`,`createdAt`,`updatedAt`) VALUES (0,'"+req.body.username+"', '"+pass+"', '"+req.body.type+"',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)",(err,result)=>{
        if(err)throw(err);
        if(req.body.type == 'Chapter Admin' || req.body.type == 'Chapter Youth Advisor'){
            connection.query("INSERT INTO `chapter_personnels` (user_id`, `chapter_id`, `position`) VALUES ('"+result.insertId+"', '"+req.body.chapter+"', '"+req.body.type+"');",(err,result)=>{
                res.redirect('/');
            });
        }else if(req.body.type == 'Council'){ //addCouncil right? yes
            connection.query("INSERT INTO `councils` (`user_id`,`chapter_id`, `category`, `name`, `createdAt`) VALUES ('"+result.insertId+"','"+req.body.chapter+"', '"+req.body.category+"', '"+req.body.username+"',CURRENT_TIMESTAMP);",(err,result)=>{
                res.redirect('/');
            });
        }else{
            connection.query("INSERT INTO `council_advisors` (`user_id`, `council_id`) VALUES ('"+result.insertId+"', '"+req.body.council+"');",(err,result)=>{
                res.redirect('/');
            });
        }
    }
    else{
        res.send("wrong")
    }
});
*/

app.get('/about', (req,res)=>{
    if(req.session.logged_in!=true){
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

app.get('/viewDocs',async (req,res) =>{
    let members=await Read.docsMemForms();
    let uniformRequests=await Read.getUnifReqs();
    console.log(req.session);

    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{                
        res.render('masterlist',{
            title:"Documents",
            memForm:members,
            unifReqs:uniformRequests,
            council:{
                name:req.session.username
            } 
        });
    }
});

app.get('/adminForms', (req,res) =>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        res.render('adminActivity',{ //inconsistent naming
            title: "Forms",
            adminNav: {
                name: req.session.name, 
                chapter: req.session.chapter.name
            }
        });
    }
});

app.get('/adminCouncils', (req,res) =>{ //not directly acessible
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        res.render('adminCouncils',{
            title: "Councils",
            adminNav: {
                name: req.session.name, 
                chapter: req.session.chapter.name
            }
        });
    }
});

app.get('/addCouncil', async (req,res) =>{
       let chapters = await Read.getAllChapters();
       //res.send(chapters)//idk why this is here is it because vue uses res.send? -derek
       res.render('addCouncil',{title:'Councils',chapters:chapters});
});

app.get('/allCouncils', async (req,res) =>{
    let councils = await Read.getAllCouncils()
    res.send(councils)
    res.render('addCouncil',{
      title: "Add Council", 
      chapters: req.session.chapter,
      council: req.session.chapter //yes, poor naming
    });    
});

//DOCUMENTS START HERE
app.get('/docs', (req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        console.log(req.session)
        res.render('docs', {
            title: "Documents",
            user:{
                name:req.session.username,
                type:'council'
            }
        });
    }
});

app.get('/addReport', (req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        res.render('addReport', {
            title: "Add Report",
            council: req.session.council
        });
    }
});

app.get('/activityForm', (req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{ 
        res.render('addReport',{
            title: "Activity Form",
            council: req.session.council
        });
    }
});

app.get('/membershipForm', async (req,res)=>{
    res.render('membershipForm',{
        title: "Membership Form", 
        session:req.session,
        council: req.session.council
    });
});


app.get('/committeeMembershipForm', async (req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        let committees = await Read.getCommitteesOfCouncil()
        res.render('committeeMembershipForm',{title: "Membership Form", session: req.session,councilName:"USC",councilType:"College Council"});
    }
});

app.get('/committeeMembershipForm', (req,res)=>{
    if(req.session.logged_in!=true){
        res.send(false);
    }else{
        res.render('committeeMembershipForm',{title: "Committee Membership Form",councilName:"USC",councilType:"College Council"});
    }
});

//When a specific committee is selected
app.get('/generatedCommitteeMembershipForm/:type&:userId', urlEncodedParser, async (req,res)=>{
    let members = await Read.getMembersOfCommittee(req)
      res.send(members);
      res.render('committeeMembershipForm',{title: "Committee Membership Form", committees: committees, session: req.session});
});

//When a specific committee is selected
app.get('/generatedCommitteeMembershipForm/:type', urlEncodedParser, async (req,res)=>{
    let members = await Read.getNoneCommitteeMembers()
});
  
//When a adding members to a committee, show all members of that council without a committee yet
app.get('/getNoneCommitteeMembers', urlEncodedParser, async (req,res)=>{
    try{
        let members = await Read.getNoneCommitteeMembers();        
        res.send(members);
    }catch(e){
        console.log("Error! : ",e);
    }
});

//When a adding members to a committee, show all members of that council without a committee yet
app.get('/getNoneCommitteeMembers', urlEncodedParser, async (req,res)=>{
    let members = await Read.getNoneCommitteeMembers()
    res.send(members);
});

app.get('/activityRequestForm', (req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        res.render('activityRequestForm',{
            title: "Activity Request Form",
            council: req.session.council
        });
    }
});

app.get('/activityReportForm', (req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        res.render('activityReportForm',{
            title: "Activity Report Form",
            council: req.session.council
        });
    }
});

app.get('/unifRequest', (req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{        
        connection.query("SELECT id, username as name FROM `users`",(err,result)=>{
            console.log("User type == "+req.session.type+" "+"User ID =="+req.session.id);
            let people=result;
            res.render('uniformRequest',{
                title: "Uniform Request",
                council: req.session.council,
                peoples: people
            });
        });        
    }
});

app.get('/unifClaim', (req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        res.render('uniformClaimSlip', {
            title: "Uniform Claim Slip",
            council: req.session.council
        });
    }
});

app.get('/serviceReq', (req,res)=>{
    if(req.session.logged_in!=true){
        res.redirect("/login");
    }else{
        connection.query("SELECT chapter_personnels.id, users.username FROM `councils` inner join `chapter_personnels` on councils.chapter_id=chapter_personnels.chapter_id inner join users on users.type=\"Chapter Admin\" WHERE councils.user_id='"+req.session.user+"'",(err,result)=>{
            res.render('serviceRequest', {
                title: "Service Request Form",
                council: req.session.council,
                CHname: result[0].username,
                CHid: result[0].id,
                reqCou: req.session.council
            });
        });
    }
});

app.get('/filledMemForm/:id', async (req,res)=>{
    let member = await Read.getFilledMemForm(req);
    let trainings = await Read.getMemTrainings(member);
    let orgs = await Read.getMemOrgs(member);
    res.render('filledMembershipForm', {
        title: "Membership Form",
        council: req.session.council, 
        session:req.session, 
        mem: member, 
        trainings: trainings, 
        orgs: orgs
    });    
});

//DOCUMENTS END HERE

app.post('/signup', urlEncodedParser, async(req,res)=>{
    await Create.signUp(req);        
    console.log("Account has been made!");
    res.redirect('/');
});

app.post('/act/addCouncil', urlEncodedParser, async (req,res) =>{  
    await Create.addCouncil(req)
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

app.post('/act/addSerReq',urlEncodedParser,(req,res)=>{    
    console.log("INSERT INTO `service_request_forms`(`reciever`, `date_and_time`, `name_of_activity`,`council_id`, `requesting_person`, `position`) VALUES ('"+req.body.chapAdmin+"', '"+req.body.dateFiled+"', '"+req.body.activity+"', '"+req.body.reqCouncil+"', '"+req.body.reqPerson+"', '"+req.body.position+"', '"+req.body.itemPerson+"', '"+req.body.purpose+"')")
    res.redirect('/docs');
});

app.post('/act/addUnifReq',urlEncodedParser,async(req,res)=>{    
    try{
        await Create.addUniformRequest(req);        
        console.log('Uniform Request sent!');
    }catch (e){
        console.log('ERROR! ',e);
    }
    res.redirect('/docs');
});

app.get('/filledMemForm/:id', async (req,res)=>{
    let member = await Read.getFilledMemForm(req);
    let trainings = await Read.getMemTrainings(member);
    let orgs = await Read.getMemOrgs(member);  
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

app.listen(port,()=>{
    console.log("Server is running");
});

app.get('/test',urlEncodedParser,async(req,res)=>{//derek uses this to test functions kay tapolan siya         
    let test=await Read.test();//wrong reference, id was used instead of document_id
    //let uniformRequests=await Read.getUnifReqs();
    res.send(test);
})