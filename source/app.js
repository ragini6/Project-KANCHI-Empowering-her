const express= require("express");
const path=require("path");
const app=express();
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:80/indexwomen');
// }
const port=80;
//define mongoose schema
// const indexSchema = new mongoose.Schema({
//     name: String,
//     Username: String,
//     age: String,
//     phone: String,
//     password: String
//   });
//   const index = mongoose.model('Index', indexSchema);
//express
app.use('/static',express.static('static'));
app.use(express.urlencoded());
//pug
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))

//endlpoint
app.get("/",(req,res)=>{
    // const con="This is the best content on the internet so far so use it wisely"
    //  const params={title:'pubg is the best game',"content":con}
    res.status(200).render('index.pug');
})
app.get("/login",(req,res)=>{
    // const con="This is the best content on the internet so far so use it wisely"
    //  const params={title:'pubg is the best game',"content":con}
    res.status(200).render('login.pug');
})
app.get("/learning",(req,res)=>{
    // const con="This is the best content on the internet so far so use it wisely"
    //  const params={title:'pubg is the best game',"content":con}
    res.status(200).render('learning.pug');
})
app.get("/practice",(req,res)=>{
    // const con="This is the best content on the internet so far so use it wisely"
    //  const params={title:'pubg is the best game',"content":con}
    res.status(200).render('practice.pug');
})
app.get("/ngo",(req,res)=>{
    // const con="This is the best content on the internet so far so use it wisely"
    //  const params={title:'pubg is the best game',"content":con}
    res.status(200).render('ngo.pug');
})
app.get("/index",(req,res)=>{
    // const con="This is the best content on the internet so far so use it wisely"
    //  const params={title:'pubg is the best game',"content":con}
    res.status(200).render('index.pug');
})
app.get("/level1",(req,res)=>{
    // const con="This is the best content on the internet so far so use it wisely"
    //  const params={title:'pubg is the best game',"content":con}
    res.status(200).render('level1.pug');
})
app.post("/",(req,res)=>{
    console.log(req.body);
    const params={'message':'You are registered successfully'}
    res.status(200).render('index.pug',params);
    

})
app.post("/login",(req,res)=>{
    console.log(req.body);
    const params={'message':'You are logged in successfully'}
    res.status(200).render('login.pug',params);

})
app.post("/learning",(req,res)=>{
    // console.log(req.body);
    // const params={'message':'You are logged in successfully'}
    res.status(200).render('learning.pug');

})
//start the server
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});