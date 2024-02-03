// Import the express module
const express = require('express');


// Using ES6 imports
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/RealEstate', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const BlogPost = new Schema({
  author: String,
  title: String,
  body: String,
  date: Date
});

const myReviews = mongoose.model("reviews", BlogPost);




// Create an Express application
const app = express();

// Define a route that responds with "Hello, World!" for the root path "/"
// app.get('/', (req, res) => {
//   res.send('Real Estate Website');
// });
// app.get('/getReview', async (req, res) => {
//   const data = new myReviews({
//     author: "Deependra",
//     title: "I dont know",
//     body: "alskdjflas",
//     date: new Date(),
//   })
//   await data.save();
//   console.log(data);
//   res.send(data);
// });

app.get('/reviews', async (req, res) => {
  try {
    // Fetch reviews from MongoDB
    const reviews = await myReviews.find();

    // If there are no reviews, you may handle this case accordingly
    // if (!reviews) {
    //   return res.status(404).send('No reviews found.');
    // }

    // Send the reviews as a response
    res.json(reviews);
    // res.send(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Specify the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
