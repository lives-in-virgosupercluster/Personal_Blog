import mongoose from "mongoose";
const postSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            min:2,
            max:100,
        },
        title:{
            type:String,
            required:true,
            min:2,
            max:100,

        },
        subcontent:{
            type:String,
            required:true,
            min:2,
            max:100,

        },
        date:{
            type:Date,
            required :true,
            
        },
        content:{
            type:Array,
            default:[],
            required:true,

        }


    }
);
const Post=mongoose.model("Post",postSchema);
export default Post;