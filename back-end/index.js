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

app.post('/add_to_library', async (request, response) => {

  const body = request.body

  try{    
    
    db.collection('moods').doc('happy').update(body);

    // ----------EDIT CODE ABOVE HERE 
  } catch(error){
    console.log(error)
  }
    response.send('<h1> Received the data!')

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