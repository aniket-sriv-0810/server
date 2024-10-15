import Listing from '../models/listing.model.js';
const allListing = async(req ,res , next) =>{
    await Listing.find();
    res.send('<h1> I am a Listing</h1>');
}
export default allListing;