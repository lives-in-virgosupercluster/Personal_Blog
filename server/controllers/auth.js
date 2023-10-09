import User from '../models/User.js';
import axios from 'axios';

export const register=async(req,res)=>{
    try{
        const{
            username,
            password
        }=req.body;
        const newUser=new User({
            username,
            password,
        });
        const user= await User.findOne({username:username});
        // console.log(user.username);
        // console.log("here");
       // console.log(username);
        if(!user){
            console.log("harsh");
            const savedUser=await newUser.save();
            res.status(200).json(savedUser);
            
            
        }
        res.status(400).json({msg:"User Already Exists"});
            return ;
       
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};
export const login=async(req,res)=>{
    try{
        const{username,password}=req.body;
        const user=await User.findOne({username:username});
        if(!user)return res.status(400).json({msg:"User does not exist"});
        const isMatch=password===user.password;
        if(!isMatch)return res.status(400).json({msg:"Invalid Credentials"});
        else 
        return res.status(200).json({msg:"Valid Credential"});

        }
        catch(err){
            res.status(500).json({error:err.message});
        }

    };
