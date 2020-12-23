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
        connection.query("SELECT * FROM `councils` where chapter_id='"+req.session.chapter.id+ "'",(err,result)=>{
            res.render('adminHome',{
                title: "Home",
                adminNav: {
                    name: req.session.name, 
                    chapter: req.session.chapter.name
                },
                councils: result
            });
        });
    }
});

app.get('/adminProfile',(req,res)=>{ //inaccessible
    if(req.session.loggedIn!=true){
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

app.get('/', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('home', {
            title: "Home",
            user: req.session.council
        });
    }
});

app.get('/login', (req,res)=>{ //inverse persistent    
    if(req.session.loggedIn==true){
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

app.get('/logout', (req,res)=>{ //no persistent
    req.session.loggedIn=false;
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

app.post('/signup', urlEncodedParser, (req,res)=>{
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
    });
});

app.get('/about', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('about', {title: "About",councilName:"USC",councilType:"College Council"});
    }
});

app.get('/viewDocs',async (req,res) =>{
    let members=await Read.docsMemForms();
    let uniformRequests=await Read.getUnifReqs();    
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{                
        res.render('masterlist',{
            title:"Documents", 
            memForm:members,
            unifReqs:uniformRequests,
            council: req.session.council
        });        
    }
});

app.get('/adminForms', (req,res) =>{
    if(req.session.loggedIn!=true){
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
    if(req.session.loggedIn!=true){
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
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
       let chapters = await Read.getAllChapters()
       res.render('addCouncil',{
           title: "Add Council", 
           chapters: req.session.chapter,
           council: req.session.chapter //yes, poor naming
        });
    }
});


//DOCUMENTS START HERE
app.get('/docs', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('docs', {
            title: "Documents",
            user: req.session.council
    });
    }
});

app.get('/addReport', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('addReport', {
            title: "Add Report",
            council: req.session.council
        });
    }
});

app.get('/activityForm', (req,res)=>{
    if(req.session.loggedIn!=true){
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


/*app.get('/committeeMembershipForm', async (req,res)=>{
    // let councilName = await Read.getCouncilName(sessionId)
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        let committees = await Read.getCommitteesOfCouncil()
        res.render('committeeMembershipForm',{title: "Membership Form", committees: committees, session: req.session,councilName:"USC",councilType:"College Council"});
    }
});*/

app.get('/committeeMembershipForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('committeeMembershipForm',{
            session:req.session,
            title: "Committee Membership Form",
            council: req.session.council
        });
    }
});
//When a specific committee is selected
app.get('/generatedCommitteeMembershipForm/:type', urlEncodedParser, async (req,res)=>{
    //let members = await Read.getNoneCommitteeMembers()
    try{
        let members = await Read.getMembersOfCommittee(req);
        res.send(members);
    }catch(e){
        console.log("Error! : ",e);
    }    
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
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('activityRequestForm',{
            title: "Activity Request Form",
            council: req.session.council
        });
    }
});

app.get('/activityReportForm', (req,res)=>{
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('activityReportForm',{
            title: "Activity Report Form",
            council: req.session.council
        });
    }
});

app.get('/unifRequest', (req,res)=>{
    if(req.session.loggedIn!=true){
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
    if(req.session.loggedIn!=true){
        res.redirect("/login");
    }else{
        res.render('uniformClaimSlip', {
            title: "Uniform Claim Slip",
            council: req.session.council
        });
    }
});

app.get('/serviceReq', (req,res)=>{
    if(req.session.loggedIn!=true){
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
//GETS END HERE

//POST requests
app.post('/signup', urlEncodedParser, async(req,res)=>{
    await Create.signUp(req);        
    console.log("Account has been made!");
    res.redirect('/');
});

app.post('/login', urlEncodedParser, async(req,res)=>{    
    let result = await Read.getUser(req)
    if (bcrypt.compareSync(req.body.pass, result['password'])){
        // console.log(result['id']);
        req.session.loggedIn=true;
        req.session.user=result['id'];
        req.session.type=result['type'];
        console.log(req.session.type+" AND "+req.session.user);
        if (req.session.type == 'Chapter Admin' || req.session.type == 'Chapter Youth Advisor'){
            req.session.name=result['username'];
            //let sql="SELECT * FROM `chapter_personnels` inner JOIN chapters on chapter_personnels.chapter_id=chapters.id WHERE user_id='"+req.session.user+"'";
            let sql="SELECT * FROM chapter_personnels inner JOIN chapters on chapter_personnels.chapter_id=chapters.id"; //DOY ADD USER ID NAAAAAAA
            connection.query(sql,(err,result)=>{
                req.session.chapter={};
                req.session.chapter.id=result[0]['id'];
                req.session.chapter.name=result[0]['name'];
                res.redirect('/admin')                
            });
        }
        else if (req.session.type == 'Council' || req.session.type == 'Council Advisor'){
            connection.query("SELECT  * from councils WHERE user_id='"+req.session.user+"'",(err,result)=>{
                req.session.council={};
                req.session.council.id=result[0]['id'];
                req.session.council.name=result[0]['name'];
                req.session.council.type=result[0]['category'];
                res.redirect('/')
            });
        }  
    }else{
        console.log("login failed");
        res.redirect('/login'); //idk ideal redirect
    }
});

app.post('/act/addCouncil', urlEncodedParser, async (req,res) =>{
    await Create.addCouncil(req)
    console.log(req)
    res.redirect('/addCouncil');
});

app.post('/act/addMemberForm', urlEncodedParser, async (req,res) =>{
    await Create.addMemberForm(req)
    console.log("ADDING NEW MEMBER");
    res.redirect('/membershipForm');
});

app.post('/act/addCommitteeMember', urlEncodedParser, async (req,res) =>{
    //await Create.addCommitteeMember(req)
    try{
        //let members = await Read.getNoneCommitteeMembers();
        //res.send(members);
        await Create.addCommitteeMember(req)
    }catch(e){
        console.log("Error! : ",e);
    }
    res.send('success');
});

app.post('/act/add', urlEncodedParser, (req,res) =>{ //unif req 
    //design: 0 is RCY, 1 is Advisor; as per Derek's instructions
    console.log("INSERT INTO `users` (`date_requested`, `volunteer`, `type`, `qty`, `size`, `design`, `or_number`) VALUES ('"+req.body.dateReceived+"', '"+req.body.volunteer+"','"+req.body.type+"','"+req.body.qty+"','"+req.body.size+"','"+req.body.design+"','"+req.body.Receipt+"')");
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

app.get('/test',urlEncodedParser, async(req,res)=>{//Derek uses this to test some stuff because eye yam dumdum
    let test=await Read.docsMemForms();
    //let test=await Read.getAllFilledMemForms();    
    //let test=await Read.getAllUsers();    
    console.log(test[0]);
    res.send(test[0].document.type);
});

app.listen(port,()=>{
    console.log("Server is running");
});