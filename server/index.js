const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req,res) =>{
    res.json({ status:'ok',service:'SmartDine API'});
});

app.get('/', (req,res) =>{
    res.send('Backend running');
});

app.listen(PORT,() =>{
    console.log('SmartDine server listening on http://localhost:${5000}');
});