const express=require("express");
const app=express();
const bodyparser = require('body-parser');
const cors=require("cors")
const errHandler=require("./middleware/errorHand")
require("dotenv").config()
app.use(cors());
//body parser middleware
app.use(bodyparser.urlencoded({ extended:true}))
app.use(bodyparser.json())

app.get("/home",(req,res)=>{
    res.send("My home Page");
})

app.get("/about",(req,res)=>{
    try {
        let a=10;
        let b=2;
        if(b==0){
            throw new Error("Youuu can't divide by zero!!!");
        }
        let c=a/b;
        res.status(200).send({ans:c});
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.get("/service",(req,res,next)=>{
    //code may error
    const err=new Error("ye service ki error hai sudharo murk");
    next(err)
})

app.get("/join",(req,res)=>{
    res.send("Join Uss!!")
})

app.get("/contact",(req,res)=>{
    res.send("Contact Uss!!")
})
app.use(errHandler)
app.listen(8080,(req,res)=>{
    console.log("Server Runs on this port")
})