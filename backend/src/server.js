const express = require('express')
const mongoose = require('mongoose')

const router = require('./router')

const app = express()

mongoose.connect('mongodb+srv://testednv:Skevldga5e@pedro-7jhaf.mongodb.net/PayFest?retryWrites=true&w=majority',{
   useNewUrlParser:true,
   useUnifiedTopology:true
})
//req.query = Acessar query params(para filtros)
//req.params = Acesasr route params(para edição , delete)
//req.body = Acessar corpo da requisição (para criação , ediçao)

app.use(express.json())
app.use(router)

app.listen(3333)
