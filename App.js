const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const animeController = require('./controllers/animeController');
app.use('/anime', animeController);

const reviewsController = require('./controllers/reviewsController');
app.use('/reviews/', reviewsController);

app.get('/', (req, res) => {
    res.status(200).send('Welcome to our PostgreSQL lesson!')
});

app.get('*', (req, res) => {
    res.status(404).send("this is not the page you are looking for")
})

module.exports = app;
