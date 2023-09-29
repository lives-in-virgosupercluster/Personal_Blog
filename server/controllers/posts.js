import Post from "../models/Post.js";
import User from '../models/User.js';

export const createPost=async(req,res)=>{
    try{

        const {username,title,subcontent,date,content}=req.body;
        const user=await User.find({username:username});
        if(!user){
            res.status(400).json({message:err.message});
            return ;
        }
        const newPost=new Post({
            username,
            title,
            subcontent,
            date,
            content,

        });
        // console.log(req.body);
        console.log(user);
        await newPost.save();
        const post=await Post.find();
        res.status(201).json(post);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}
export const getPost=async(req,res)=>{
    try{
        const post=await Post.find();
        res.status(200).json(post);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}