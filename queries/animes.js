// this line imports our db from the dbConfig file
const database = require('../db/dbConfig');


// this function queries our db for us, which can take a while so we want to wait for it to finish.
const getAllAnimes = async () => {
    try {
        const animes = await database.any('SELECT * FROM anime');
        return animes
    } catch(err) {
        return err;
    }
};


// dont worry about this code, itll come up next week

const addNewAnime = async(newAnime) => {
    try {
        const animes = await database.any('INSERT INTO anime (name, release) VALUES ($1, $2) RETURNING *', [newAnime.name, newAnime.release]);
        return animes
    } catch (error) {
        return error
    }
}

// here we are exporting our functions to use in our controllers
module.exports = {
    getAllAnimes,
    addNewAnime
};