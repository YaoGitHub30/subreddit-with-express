const express= require('express');
const app=express();
const path = require('path');
const data = require('./data.json')

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.get('/',(req,res)=>{res.render('home.ejs')});
app.get('/r/:sub',(req,res)=>{
    const {sub} = req.params;
    const subData = data[sub];
    if(subData){
    res.render('sub',{...subData});
}else{
    res.render('notFound',{sub})
}
})
app.listen(4000,()=>{
});
