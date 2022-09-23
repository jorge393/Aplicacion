const express = require("express")
const path = require('path')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (pedido,res) => {
    res.render("index")
})
app.set('views','./views')
app.set('view engine','ejs')
app.use('/public', express.static(path.join(__dirname,'public')))
app.listen(port) 