const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const restaurants=require('./data/restaurants');

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
app.get('/restaurants',(req,res)=>{
    res.json({count:restaurants.length, data:restaurants});
});
app.post('/recommend', (req,res)=>{
    const {query,mode} = req.body || {};
    const topPicks=restaurants.slice(0,3);
    res.json({
        query:query||null,
        mode:mode||'normal',
        results:topPicks
    });
});