// Import the express module
const express = require('express');
const { myReviews } = require('./DB/conn')
var cors = require('cors')
import BASE_URL from './env'
// const { data } = require('./DB/data')


// Create an Express application
const app = express();
app.use(cors());

// const router = express.Router();

// // app.use('/api', router);

// router.get('/reviews', async (req, res) => {
//   try {
//     let reviews = await myReviews.find();
//     if (!reviews || reviews.length === 0) {
//       return res.status(404).send('No reviews found.');
//     }
//     res.json(reviews);
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


app.get('/getReviews', async (req, res) => {
  try {
    // Fetch reviews from MongoDB
    // await data.save();
    let reviews = await myReviews.find();

    console.log(reviews);

    //If there are no reviews, you may handle this case accordingly
    if (!reviews) {
      return res.status(404).send('No reviews found.');
    }

    // Send the reviews as a response
    res.json(reviews);

    // res.send(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/savereviews', async (req, res) => {
  try {

    // Import the mongoose connection and the Review model

    const data = [
      { author: 'Peter', title: 'Lowstreet 4', body: 'Here is a sample review', date: new Date() },
      { author: 'John', title: 'Highway 71', body: 'Here is a sample review', date: new Date() },
      { author: 'Amy', title: 'Apple st 652', body: 'Here is a sample review', date: new Date() },
      { author: 'Hannah', title: 'Mountain 21', body: 'Here is a sample review', date: new Date() },
      { author: 'Michael', title: 'Valley 345', body: 'Here is a sample review', date: new Date() },
      { author: 'Sandy', title: 'Ocean blvd 2', body: 'Here is a sample review', date: new Date() },
      { author: 'Betty', title: 'Green Grass 1', body: 'Here is a sample review', date: new Date() },
      { author: 'Richard', title: 'Sky st 331', body: 'Here is a sample review', date: new Date() },
      { author: 'Susan', title: 'One way 98', body: 'Here is a sample review', date: new Date() },
      { author: 'Vicky', title: 'Yellow Garden 2', body: 'Here is a sample review', date: new Date() },
      { author: 'Ben', title: 'Park Lane 38', body: 'Here is a sample review', date: new Date() },
      { author: 'William', title: 'Central st 954', body: 'Here is a sample review', date: new Date() },
      { author: 'Chuck', title: 'Main Road 989', body: 'Here is a sample review', date: new Date() },
      { author: 'Viola', title: 'Sideway 1633', body: 'Here is a sample review', date: new Date() }
    ];

    // Insert the data into the myReviews collection
    const result = await myReviews.insertMany(data);
    console.log(result);
    console.log('Reviews added successfully');
    res.status(201).json({ message: 'data saved successfuly' });


  } catch (error) {
    console.error('Error fetching ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

// Specify the port to listen on
const PORT = BASE_URL;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
