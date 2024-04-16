// Using ES6 imports
const mongoose = require('mongoose');
const { BlogPost } = require('./Schema');

mongoose.connect('mongodb://127.0.0.1:27017/RealEstate', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!'));


const myReviews = mongoose.model("reviews", BlogPost);

module.exports = { myReviews };