//imports the firebase database object we can use
const db = require('./firebase-config')

//imports express so you can use it
const express = require('express')

//use this variable to use express
const app = express()
const cors = require('cors')

//imports axios
const axios = require('axios')

app.use(cors())
app.use(express.static('build'))
//eases use of json
app.use(express.json())


// END POINTS
//test
//response.send(<h2>hey this is working </h2>)
//start up the back end node index.js, copy paste endpoint into the localhost:3001/add_to_library
//look at the documentation - either console log or respond
//console/log([data])
//response.json([data])
//or just actually check the database

app.post('/add_to_library', async (request, response) => {

  const body = request.body
  
  /*
  track number, title, artist, url
  */

  try{
    
    const data = {
      "track 1": {
        "id" : body.id,
        "title" : body.title,
        "artist" : body.artist,
        "url" : body.url
      }
    }
    //there's probably a cleaner way to do this 
    
    
    db.collection('moods').doc('happy').set(data);

    // ----------EDIT CODE ABOVE HERE 
  } catch(error){
    console.log(error)
  }
    response.send('<h1> Received the data!')
//console.log(data)
//response.json(data)

})



const unknownEndpoint = (request, response) => {
    response.status(400).send({error: 'unknown endpoint'})
  }
  
//use of middleware is denoted by following
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})