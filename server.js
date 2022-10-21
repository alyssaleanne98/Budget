// ========= DEPENDENCIES ==========
const express = require('express');
const app = express()

// ==========Database===============

const budget = require('./models/budget.js');

// ========== Middleware ============
app.use(express.urlencoded(({extended:false})))
app.use(express.static('./public'))


// I N D U C E
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

// =========== New ===============
app.get('/budget/new', (req, res) => {
    res.render('new.ejs')
})

//============= Show ==============
app.get('/budget/:id', (req, res) => {
    // res.send(req.params.id)
    res.render('show.ejs', {
        allBudget: budget[req.params.id]
    })
})

// ========== Post new route ==========
app.post('/budget/', (req, res) => {
    console.log(req.body)
    budget.push(req.body)
    res.redirect('/budget')
})




//listener 
//   app.listen(3000)
const port = 3000
app.listen(port, () => {
    // console.log('Listening on Port ${port}...')
})