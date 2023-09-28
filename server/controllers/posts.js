import Post from "../models/Post.js";
import User from '../models/User.js';

export const createPost=async(req,res)=>{
    try{

        const {username1,title,subcontent,date,content}=req.body;
        const user=await User.find({username:username1});
        const newPost=new Post({
            username1,
            title:user.title,
            subcontent:user.subcontent,
            date:user.date,
            content:user.content,

        });
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