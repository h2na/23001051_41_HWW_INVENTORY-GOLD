// inisiasi express 
const express = require('express');
const app = express();

// import db 
const db = require('./db.js')

// body parse json 
app.use(express.json());

// api 
// method GET 

app.get('/', async (req, res) => {
    
    const msUser = await db('msUser').select('*');

    console.log(msUser)

    return res.json({
        data: msUser
    })


})


// listen server 
app.listen(3000,() => {
console.log('listening on port 3000')
});