// ========= DEPENDENCIES ==========
const express = require('express');
const app = express()

// ========== Middleware ============
app.use(express.urlencoded({ extended: false }))

// // =========== First route ============

app.get("/", function (req, res) {
    res.send("Welcome to Budget")
})



//listener 
//   app.listen(3000)
const port = 3000
app.listen(port, () => {
    // console.log('Listening on Port ${port}...')
})