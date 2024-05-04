const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { myReviews } = require('./DB/conn');

dotenv.config();

const app = express();
app.use(cors());


app.get('/getReviews', async (req, res) => {
  try {
    let reviews = await myReviews.find();

    console.log(reviews);

    if (!reviews) {
      return res.status(404).send('No reviews found.');
    }

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

const PORT = process.env.BASE_URL || 7000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
});
