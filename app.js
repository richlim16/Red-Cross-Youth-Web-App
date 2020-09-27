const express = require('express');
const app = express();
const ejs = require('ejs');

const site=" | Red Cross Youth Chapter";

app.use(express.static("public"));

app.set('view engine', 'ejs');

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
    res.render('members', {
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
});

app.get('/about', (req,res)=>{
    res.render('about', {title: "About" + site});
});

app.listen(3000);