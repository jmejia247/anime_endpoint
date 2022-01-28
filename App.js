const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

const animeController = require('./controllers/animeController')
app.use('/anime', animeController)

app.get('/', (req, res) => {
    res.status(200).send('Welcome to our PostgreSQL lesson!')
});

app.get('*', (req, res) => {
    res.status(404).send("this is not the page you are looking for")
})

module.exports = app;
