const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        trim:true,
        required:true,
    },
    livegames:{
        games:[
            {email:String,state:[]},
        ]
    },
},
{
    timestamps:true
}
);

const User = mongoose.model('User',userSchema);
module.exports = User;