//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
require('dotenv').config()


module.exports = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.SECRET_TOKEN
}
