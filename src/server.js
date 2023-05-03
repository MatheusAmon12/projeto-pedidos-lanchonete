const express = require('express')

const app = express()

const db = require('./database/db')
const router = require('./routes/routes')

db.connect()

app.use(express.json())

app.use('/lanchonete', router)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))