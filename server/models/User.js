import mongoose from 'mongoose';

const UserSchema =new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            min:2,
            max:100,
        },

        password:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
      
    }
);
const User=mongoose.model("User",UserSchema);
export default User;