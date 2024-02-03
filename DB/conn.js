// Using ES6 imports
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/RealEstate')
  .then(() => console.log('Connected!'));

  const Schema = mongoose.Schema;  
  export const BlogPost = new Schema({
    author: String,
    title: String,
    body: String,
    date: Date
  });

export const myReviews = mongoose.model("Reviews",BlogPost);