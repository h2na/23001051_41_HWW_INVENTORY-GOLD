// inisiasi express 
const express = require('express');
// const fs = require('fs');
const path = require('path');
const app = express();
// import db 
const db = require('./db.js')


// parsing middleware

app.use(express.urlencoded({ extended: false}));
// body parse json 
app.use(express.json());

const morgan = require('morgan');
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
// app.get('/api/management', async (req, res) => {
    
//     const msUser = await db('customer').select('*');

//     console.log(msUser)
//     return res.render({
//       data:msUser
//     })
    

// })


// method GET id 
app.get("/api/customer/:id", async (req, res) => {
    const { id } = req.params;
    const data = await db("customer")
    .select("*")
    .where({
        id: id,
    })
    .first();
    console.log(data)
    return res.render('put-customer',{ ds: data });
  });
  
 
  // endpoint PUT /karyawan/:id
  app.put("/api/customer/update/:id", async (req, res) => {
    // ambil id dari params
    const { id } = req.params;
    const mg = await db("customer")
      .where({
        id: id,
      })
      .update({
        customer: req.customer,
        phone: req.phone,
        address: req.address,
      });
      return res.redirect('home')
  });
  
  // endpoint DELETE /karyawan/:id
  app.delete("/api/customer/del/:id", async (req, res) => {
    const { id } = req.params;
    (await db("customer").where({
      id: id,
    })) - del();
    return res.redirect('home')
  });
  
// start view 
app.get('/home', async (req, res) => {
    const msUser = await db('customer').select('*');
    return res.render('home',{
        data:msUser
    })
    
})
// method POST /karyawan/:id
app.post('/api/customer', async (req, res) => {
   console.log(req.body)
   // ambil data dari body
   // insert data Ke database
   const mg = await db("customer").insert({
       customer: req.body.customer,
       phone: req.body.phone,
       address: req.body.address,
     })
     .returning(["id"]);
    //  if (mg){
         return res.redirect('home')
    //  }
 });
 
app.get("/api/customer/:id", async (req, res) => {
    const { id } = req.params;
    const data = await db("customer")
    .select("*")
    .where({
        id: id,
    })
    .first();
    return res.render({ ds: data });
  });
  
 
  // endpoint PUT /karyawan/:id
  app.put("/api/customer/:id", async (req, res) => {
    // ambil id dari params
    const { id } = req.params;
    // update data karyawan
    const mg = await db("customer")
      .where({
        id: id,
      })
      .update({
        customer: req.customer,
        phone: req.phone,
        address: req.address,
      });
      if (mg){
        return res.render('/home')
        // return res.render('/home',{alert:"new customer added successfully"})
    }
  });
  
  // endpoint DELETE /karyawan/:id
  app.delete("/api/customer/:id", async (req, res) => {

    // console.log
    // ambil id dari params
    const { id } = req.params;
    // hapus data Karyawan
    (await db("customer").where({
      id: id,
    })) - del();
    return res.render('home')
  });
  
// start view 
app.get('/home', async (req, res) => {
    const msUser = await db('customer').select('*');
    return res.render('home',{
        data:msUser
    })
    
})
// method POST /karyawan/:id
app.post('/api/customer', async (req, res) => {
   console.log(req.body)
   // ambil data dari body
   // insert data Ke database
   const mg = await db("customer").insert({
       customer: req.body.customer,
       phone: req.body.phone,
       address: req.body.address,
     })
     .returning(["id"]);
    //  if (mg){
         return res.redirect('/home')
    //  }
 });
 
// app.use(logger)

// listen server 
app.listen(3000,() => {
    console.log('listening on port 3000')
});