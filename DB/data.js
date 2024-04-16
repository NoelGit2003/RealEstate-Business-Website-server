// Import the mongoose connection and the Review model
const { myReviews } = require("./conn");

const data = new myReviews([
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
]);

// Insert the data into the myReviews collection
myReviews.insertMany(data)
    .then(() => {
        console.log('Reviews added successfully');
    })
    .catch(error => {
        console.error('Error adding reviews:', error);
    });
