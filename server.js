const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

var corsOptions = {
    origin: "https://localhost:6060"
}

// middleware

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'Hello there' })
})

//view
app.get('/form',function(req,res) {
    res.sendFile(path.join(__dirname+'/views/form.html'));
  });

// router
const router = require('./routes/adherentRouter.js')
app.use('/api/adherents', router);

// port 

const PORT = process.env.PORT || 6060

// server

app.listen(PORT, () => { console.log(`server is running on http://localhost:${PORT}`); })