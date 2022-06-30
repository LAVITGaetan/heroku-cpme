const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "https://localhost:6060"
}

// middleware

app.use(cors(corsOptions))

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'Hello there' })
})

// router
const router = require('./routes/productRouter.js')
app.use('/api/products', router)

// port 

const PORT = process.env.PORT || 6060

// server

app.listen(PORT, () => { console.log(`server is running on http://localhost:${PORT}`); })