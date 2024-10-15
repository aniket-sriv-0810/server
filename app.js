import express from 'express';
import path from 'path';
import cors from 'cors';
import methodOverride from 'method-override';
const app = express();


// middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json({limit: "16kb"}))
app.set('view engine', 'ejs' );
app.set('views' , path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true , limit:'16kb'}));
app.use(methodOverride("_method"));
app.use(cookieParser());


import listingRoute from './routes/listing.route.js';
app.use('/listings' , listingRoute);