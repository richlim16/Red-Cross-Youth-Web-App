const port=3000;
const express=require('express');
const app=express();
const ejs=require('ejs');
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
app.get('/home', (req,res)=>{
    res.render('home',{title: "Home"});
});

app.get('/officerActivity', (req,res) =>{
    res.render('officerActivity',{title: "Officers Activity"});
});

app.get('/adminActivity', (req,res) =>{
    res.render('adminActivity',{title: "Admin Activity"});
});

app.get('/activityForm', (req,res)=>{
    res.render('addReport',{title: "Activity Form"});
});

app.get('/docs', (req,res)=>{
    res.render('docs', {title: "Documents"});
});

app.listen(port,()=>{
    console.log('Server is running!');
});