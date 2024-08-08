const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { PORT, MONGODB } = require("./config");

const app = express()
require("dotenv").config()


app.use(cors())
app.use(express.json())


// Connect to MongoDB
mongoose.connect(MONGODB)
.then(() => {
    console.log('MongoDB connected')
}).catch(err => {console.log(err);})


const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}
)



