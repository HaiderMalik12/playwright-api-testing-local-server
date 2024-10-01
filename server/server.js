const express = require('express');
const app = express();
const PORT = 3000;
const bookingDetails = require('../test-data/booking-details.json')

app.use(express.json());

app.get('/', (req, res) => {
    return res.send({ msg: 'Hello World' })
});

let bookings = [];
app.post('/booking', (req, res) => {
    // console.log('req.body', req.body);
    const booking = req.body;
    bookings.push(booking);
    return res.json({ booking })
});

app.get('/booking', (req, res) => {
    return res.json({ bookings: bookings })
});

app.get('/booking/:id', (req, res) => {
    bookings.push(bookingDetails);
    const bookingIndex = bookings.findIndex(booking => booking.id == req.params.id);
    return res.json({ booking: bookings[bookingIndex] });
})
app.get('/getBooking', (req, res) => {
    bookings.push(bookingDetails);
    const bookingIndex = bookings.findIndex(booking => booking.firstName == req.query.firstName);
    return res.json({ booking: bookings[bookingIndex] });
})
app.put('/booking/:id', (req, res) => {
    bookings.push(bookingDetails);
    const bookingIndex = bookings.findIndex(booking => booking.id == req.params.id);
    bookings[bookingIndex] = req.body;
    return res.json({ booking: bookings[bookingIndex] });
})
app.delete('/booking/:id', (req, res) => {
    bookings.push(bookingDetails);
    const bookingIndex = bookings.findIndex(booking => booking.id == req.params.id);
    bookings.splice(bookingIndex);
    return res.json({ booking: bookings });
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
});