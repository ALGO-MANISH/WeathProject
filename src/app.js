const express = require('express');
const app=express();
const port= process.env.PORT || 8000;
const path=require('path');
const hbs=require('hbs');

//public static path

const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));

app.set('views', path.join(__dirname, '../templates/views/'));
app.set('view engine', 'hbs');

const partials_path=path.join(__dirname,'../templates/partials/');
hbs.registerPartials(partials_path);







//routing
app.get("",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errMsg:'Oops! Page Not Found'
    });
})

app.listen(port,()=>{
    console.log(`listing to the port ${port}`);
})