const express = require("express");
const app = express();
const cors = require("cors");
const User = require('./Models/user');
require("dotenv").config({ path: "./config.env" });

app.use(cors({
    origin:'*',
    methods:["GET","POST","HEAD"],
    credentials:true,
    allowedHeaders:""
}));
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tictac');

app.get('/',(req,res)=>{
    res.json({msg:"hello"});
})

app.get('/games/:id',async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    const user = await User.findById(id);
    console.log(user.livegames.games)
    if(user){
        res.json({data:user.livegames.games});
    }
    else{
        res.json({data:null});
    }
})



app.post('/register',async (req,res)=>{
    const {name,username,email,password} = req.body;

    const user = await User.findOne({username});
    if(!user){
    const newUser = await User.create({
        name,
        username,
        email,
        password
    });
    await newUser.save();
    res.json({success:true,msg:"User registered successfully"});
} else{
    res.json({success:false,msg:"Username already registered"});
}
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username:username,password});
    if(user){
        res.json({success:true,msg:"Login successfull",info:{name:username,email:user.email,userId:user._id}});
    }
    else{
        
        res.json({success:false,msg:"Login unsuccessfull"});
    }

})


app.post('/valid_user',async (req,res)=>{
    
    const user = await User.findOne({email:req.body.email});
    if(user){
        res.json({success:true,msg:"User exist",info:{name:user.username}});
    }
    else{
        
        res.json({success:false,msg:"No such user found"});
    }
})

app.post('/new_game',async (req,res)=>{
    const {oponent,challenger} = req.body; 
    const user = await User.findOne({email:challenger});
    const ff = await User.findOne({email:oponent});
    if(user.livegames.games.find(item=>item.email==oponent)){
        res.json({success:false,msg:"A game with same user already exist"});
    }
    else{if(user){
        user.livegames.games.push({name:ff.username,email:oponent,state:["null","null","null","null","null","null","null","null","null"]});
        user.save();
        
        res.json({success:true,msg:"New game created successfully"});
    }
    else{
        res.json({success:false,msg:"No such user found"});
    }
}
})

app.listen(3002,()=>{
    console.log(`Server is running`)
}
)
