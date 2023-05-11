const express = require('express')
const cors = require('cors')

const app = express()

const db = require('./database/db')
const router = require('./routes/routes')

db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'https://matheusamon12.github.io'
]

app.use(cors({
    origin: function(origin, callback){
        let allowed = true

        if (!origin) allowed = true

        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

app.use(express.json())

app.use('/lanchonete', router)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))