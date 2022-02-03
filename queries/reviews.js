const db = require('../db/dbConfig');

const getAllReviews = async () => {
    try {
        const reviews = await db.any('SELECT * FROM reviews');
        return reviews;
    } catch (err) {
        return err
    }
};

const getReview = async (id) => {
    try {
        const review = await db.one('SELECT * FROM reviews WHERE id = $1', id);
        return review
    } catch (err) {
        return err
    }
};

const newReview = async (newReview) => {
    try {
        const reviews = await db.any('INSERT INTO reviews (anime_id, reviewer, title, content, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *', [newReview.anime_id, newReview.reviewer, newReview.title, newReview.content, newReview.rating]);
        return reviews
    } catch (err) {
        return err
    }
}

const updateReview = async (id, review) => {
    try {
        const updatedReview = await db.one('UPDATE reviews SET anime_id=$1, reviewer=$2, title=$3, content=$4, rating=$5 WHERE id=$6 RETURNING *', [review.anime_id, review.reviewer, review.title, review.content, review.rating, id]);
        return updatedReview;
    } catch (err) {
        return err;
    }
};

const deleteReview = async (id) => {
    try {
        const review = await db.one('DELETE FROM reviews WHERE id=$1 RETURNING *', id);
        return review;
    } catch (err) {
        return err;
    }
}



module.exports = {
    getAllReviews,
    getReview,
    newReview,
    updateReview,
    deleteReview
}
