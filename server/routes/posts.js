import express from 'express';
import { createPost,getPost,getPostById } from '../controllers/posts.js';

const router=express.Router();
router.get('/',getPost);
router.post('/create',createPost);
router.get('/posts/:postId',getPostById);

export default router;