const databaseName = 'TWEETS';
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')();
const database = pgp(connectionString);

const getAllTweets = () => {
  return database.any(`SELECT * FROM tweets order by tweet`);
};

const getTweet = () => {
  return database.one(`SELECT * FROM tweets`);
}

const addTweet = (tweet) => {
  database.any(
    `INSERT INTO tweets (tweet)
    VALUES ($1)`, [tweet]
  )
}

const deleteDuplicates = () => {
  database.any(`DELETE FROM tweets WHERE ctid NOT IN
(SELECT max(ctid) FROM tweets GROUP BY tweets.*)`)
}



module.exports = {
  getAllTweets,
  getTweet,
  addTweet,
  deleteDuplicates
}
