const express = require('express');
const anime = express.Router();
const { getAllAnimes, addNewAnime } = require('../queries/animes')

const favAnime = require('../models/anime')

// here we use the function we wrote inside of our queries. 
// we have to await it because we dont want this file to move 
// on to the next lines of code without this one finishing,
//  even though we are already using await in the queries file
anime.get('/', async (req, res) => {
    const animes = await getAllAnimes();
    console.log(animes)
    res.status(200).json(animes)
});

anime.post('/new', async (req, res) => {
    const newAnime = req.body
    console.log(newAnime)
    const animes = await addNewAnime(newAnime)
    res.status(200).json(animes)
})

// the old /new route
// anime.post('/new', async (req, res) => {
//     const newAnime = req.body
//     favAnime.push(newAnime);
//     res.status(200).json(favAnime)
// })

module.exports = anime;