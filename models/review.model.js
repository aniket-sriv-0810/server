import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
}, {timestamps : true});

const Review = mongoose.model('Review' , reviewSchema);

export default Review;
