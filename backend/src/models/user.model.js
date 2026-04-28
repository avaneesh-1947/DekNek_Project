import mongoose from "mongoose";

const user= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim: true,              
      lowercase: true,         
       match: [/^[a-z0-9_]+$/, "Invalid username"]

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,       
        trim: true
       },
    password:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String,
    }

});

const User= mongoose.model('User',user);
export default User;