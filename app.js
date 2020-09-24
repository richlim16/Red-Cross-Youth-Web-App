const express = require('express');
const app = express();
const ejs = require('ejs');

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/about', (req,res)=>{
    res.render('about');
});

app.listen(3000);