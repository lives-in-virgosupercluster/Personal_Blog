import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from "url"
import {users,posts}from "./data/index.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import authRoutes from './routes/auth.js';

import postRoutes from './routes/posts.js';


import path from 'path'
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
dotenv.config();
const app=express();
app.use(express.json());
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());
app.use('/assets',express.static(path.join(__dirname,'public/assets')));
app.use('/auth',authRoutes);
app.use('/posts',postRoutes);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(process.env.PORT,()=>console.log(`Server Port:${process.env.PORT}`));
    // User.insertMany(users);
    // Post.insertMany(posts);
    // User.insertMany(users);
    // Post.insertMany(posts);
}).catch((error)=>console.log(error));