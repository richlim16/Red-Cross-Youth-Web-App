const express = require('express');
const app = express();
const ejs = require('ejs');


app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('login');
});
app.get('/home', (req,res)=>{
    res.render('home');
});

app.get('/officerActivity', (req,res) =>{
    res.render('officerActivity');
});

app.get('/adminActivity', (req,res) =>{
    res.render('adminActivity');
});

app.get('/activityForm', (req,res)=>{
    res.render('addReport');
});

app.listen(3000);