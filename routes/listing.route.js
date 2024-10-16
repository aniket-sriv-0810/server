import express from 'express';
import wrapAsync from '../utils/wrapAsync';
import allListing from '../controllers/listing.controller';
const router = express.Router();

router
.route('/')
.get(wrapAsync(allListing));
.post(wrapAsync(allListing));
