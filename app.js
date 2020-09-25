const express = require('express');
const app = express();
const ejs = require('ejs');

const site=" | Red Cross Youth Chapter";

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index', {title: "Home" + site});
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