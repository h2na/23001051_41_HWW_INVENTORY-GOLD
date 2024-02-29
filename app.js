// inisiasi express 
const express = require('express');
// const fs = require('fs');
const path = require('path');
const app = express();
// import db 
const db = require('./db.js')

const morgan = require('morgan');

// parsing middleware

// app.use(express.urlencoded({ extended: false}));
// body parse json 
app.use(express.json());

//static files
// app.use(express.static('public'));

//engine 
// app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));



// app.use(morgan(':date[web] :method :status :res[header] ":user-agent" :total-time[digits]'))
app.use(morgan('dev'));

// views 

// api 
// method GET 

app.get('/', async (req, res) => {
    return res.render('index')
})
app.get('/data', async (req, res) => {
    return res.render('data')
})
// app.get('/api/cek', async (req, res) => {
    
//     const msUser = await db('msUser').select('*');
//     await db('msUser').select('*')

//     // console.log(msUser)
    
//     // return res.json({
//     //     data: msUser
//     // })
//     return res.render({
//       data:msUser
//     })
    
// })

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });
  
//   // error handler
//   app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
//   });
  

// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`)
//     next();
// }

// app.use(logger)

// listen server 
app.listen(3000,() => {
    console.log('listening on port 3000')
});