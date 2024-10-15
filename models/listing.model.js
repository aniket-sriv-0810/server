import mongoose from "mongoose";
const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique : true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image:{
        type: String, //cloudinary url
        required: true,
    },
    price:{
        type:Number,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state :{
        type: String,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    reviews:[
    {
        type:Schema.Types.ObjectId,
        ref:"Review"
    }
]

  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
