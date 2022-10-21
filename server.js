// ========= DEPENDENCIES ==========
const express = require('express');
const app = express()

// ==========Database===============

const budget = require('./models/budget.js');

// ========== Middleware ============
app.use(express.urlencoded(({extended:false})))
app.use(express.static('./public'))

// // =========== First route ============
app.get("/", (req,res) => {
    res.send("Listening..")
})

// ============== Index ===============
app.get('/budget', (req, res) => {
    // res.send("Welcome to Budget")
    res.render('index.ejs', {
        allBudget: budget,
        title: 'index'
    })
})
//============= Show ==============
app.get('/budget/:id', (req, res) => {
    // res.send(req.params.id)
    res.render('show.ejs', {
        allBudget: budget[req.params.id]
    })
})




//listener 
//   app.listen(3000)
const port = 3000
app.listen(port, () => {
    // console.log('Listening on Port ${port}...')
})