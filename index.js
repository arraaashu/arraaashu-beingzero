const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('frontend'))

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
var student={"name":"being zero","college":"vnr","regno":1205}
app.get('/data',(req,res) => res.json(student));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
