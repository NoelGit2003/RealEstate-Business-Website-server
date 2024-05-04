const mongoose = require('mongoose');
const { BlogPost } = require('./Schema');
const dotenv = require('dotenv');

dotenv.config();

const URL = process.env.Mongo_URL

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB! ${URL}`))
  .catch((error) => console.error('Connection error:', error));


const myReviews = mongoose.model("reviews", BlogPost);

module.exports = { myReviews };