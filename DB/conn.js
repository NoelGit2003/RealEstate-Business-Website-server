// Using ES6 imports
const mongoose = require('mongoose');
const { BlogPost } = require('./Schema');
const dotenv = require('dotenv');

dotenv.config();

const URL = process.env.Mongo_URL

mongoose.connect(`${URL}/RealEstate`)
  .then(() => console.log('Connected!'));


const myReviews = mongoose.model("reviews", BlogPost);

module.exports = { myReviews };