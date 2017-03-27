const twit = require('twit')
const config = require('config.js')

const Twitter = new twit(config) {
  consumer_key: process.env.PUBLIC_KEY,
  consumer_secret: process.env.SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.SECRET_TOKEN
}

Twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})
