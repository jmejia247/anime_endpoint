const express = require('express');
const reviews = express.Router({ mergeParams: true });
const { getAllReviews, getReview, newReview, updateReview, deleteReview } = require('../queries/reviews')

// localhost:8080/anime/:animeId/reviews/
reviews.get('/', async (req, res) => {
    const { animeId } = req.params;
    console.log(animeId)
    const reviews = await getAllReviews(animeId);
    if (reviews.length) {
        res.status(200).json(reviews)
    } else {
        res.status(404).json({error: 'reviews could not be found'})
    }
});

reviews.get('/:id', async (req, res) => {
    const review = await getReview(req.params.id)
    console.log(review, "this is the review")
    if (review) {
        res.status(200).json(review);
    } else {
        res.status(404).json({error: 'review not found'})
    }
})

reviews.post('/new', async (req, res) => {
    let review = req.body
    const reviews = await newReview(review);
    if (reviews[0]) {
        res.status(200).json(reviews)
    } else {
        res.status(404).json({error: 'failed to create new review'})
    }
})

reviews.put('/:id/edit', async (req, res) => {
    console.log('weeeeee')
    let { id } = req.params;
    let newInfo = req.body;
    const review = await updateReview(id, newInfo);
    if (review) {
        res.status(200).json(review);
    } else {
        res.status(404).json({error: 'review could not be updated'})
    }
})

reviews.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const review = await deleteReview(id);
    if (review) {
        res.status(200).json(review);
    } else {
        res.status(404).json({error: `review with id of ${id} could not be deleted`})
    }
})

module.exports = reviews;