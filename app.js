const express = require('express');
const app = express();
const ejs = require('ejs');
<<<<<<< Updated upstream
const site=" | Red Cross Youth Cebu Chapter";
=======
const mysql= require('mysql');
const bodyParser = require('body-parser');
const urlencodedParser= bodyParser.urlencoded({extended: false});
const path = require('path');

const conn=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "anilist"
});
>>>>>>> Stashed changes

app.use(express.static("public"));

app.set('view engine', 'ejs');

conn.connect((err) => {
    if (err) throw err;
    console.log("Connected");
})

app.get('/', (req,res)=>{

    res.render('index', {title: "Home" + site});
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
        title: "Members" + site,
        sysAds: ads,
        appAds: ads,
        couAdv: ads2,
        couOff: ads2
    });
});

app.get('/login', (req,res)=>{
    res.render('login', {title: "Login" + site});
});

app.get('/signup', (req,res)=>{
    res.render('signup', {title: "Sign Up" + site});
    //I think it's better if an admin makes the accounts, pina ISMIS.
});

app.get('/about', (req,res)=>{
    res.render('about', {title: "About" + site});
});
app.get('/home', (req,res)=>{
    res.render('home',{title: "Home" + site});
});

app.get('/officerActivity', (req,res) =>{
    res.render('officerActivity',{title: "Officers Activity" + site});
});

app.get('/adminActivity', (req,res) =>{
    res.render('adminActivity',{title: "Admin Activity" + site});
});

app.get('/activityForm', (req,res)=>{
    res.render('addReport',{title: "Activity Form" + site});
});
app.listen(3000);