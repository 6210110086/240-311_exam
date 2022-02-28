const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const cors=require('cors')
const axios=require('axios')
app.use(cors())

let exam = []
app.post('/add',bodyParser.json(), (req, res)=>{
    let a=parseInt(1)
    res.send(''+=(a))
   })

app.post('/reset',bodyParser.json(), (req, res)=>{
    exam.push(req.body)
    res.json({statusCode: 1, data: req.body})
   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})