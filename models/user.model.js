import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ref } from "joi";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  profileImage: {
    type: String
  },
  password: {
    type: String,
    required: [true, "Password is Required"]
  },
  refreshToken :{
    type : String
  }
} , { timestamps: true});

// Password hashing before saving
mongoose.pre('save' , async function (next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10); 
    next();
});

// comparison of the password
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password);
};
/*password - is provided during login
   this.password is the stored hashed password 
*/

// Generate the Access Token for the Short Term Authentication
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
        _id : this._id,
        email : this.email,
        username : this.username,
        name : this.name
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    },
);
};

// Generate the Refresh Token for the Long Term Authentication - it doesn't need login
userSchema.methods.generateRefreshToken = function (){
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

const User = mongoose.model("User", userSchema);

export default User;