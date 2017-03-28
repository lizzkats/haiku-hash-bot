const twit = require('twit')
const config = require('./config')

const Twitter = new twit(config)


  const params = {
    q: '#haiku',
    result_type: 'mixed',
    lang: 'en'
  }


Twitter.get('search/tweets', params, function(err, data, response) {
  let words = []
  for (var i = 0; i < data.statuses.length; i++) {
    let isolateWords = data.statuses[i].text.split(/\s+/)
    isolateWords = isolateWords
      .filter(word => word !== params.q)
      .filter(word => word.match(/^\w+$/i))
      .filter(word => !word.match(/^\d+$/i))
    words = words.concat(isolateWords)
  }
  let haikuWords = []
  while (haikuWords.length < 17) {
    haikuWords.push(randomWord(words))
  }
  const finalForm =
    haikuWords[0]+' '+
    haikuWords[1]+' '+
    haikuWords[2]+' '+
    haikuWords[3]+' '+
    haikuWords[4]+'\n'+
    haikuWords[5]+' '+
    haikuWords[6]+' '+
    haikuWords[7]+' '+
    haikuWords[8]+' '+
    haikuWords[9]+' '+
    haikuWords[10]+'\n'+
    haikuWords[11]+' '+
    haikuWords[12]+' '+
    haikuWords[13]+' '+
    haikuWords[14]+' '+
    haikuWords[15]+' ';


      Twitter.post('statuses/update', { status: params.q + ' ' + finalForm }, function(err, data, response) {
      console.log(data)
    })

})


const randomWord = words =>
  words[Math.floor(Math.random()*words.length)];
