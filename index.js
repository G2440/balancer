const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.json());

app.use('/User', proxy('http://localhost:8000/'))
app.use('/contentService', proxy('http://localhost:8001/'))
app.use('/daily', proxy('http://localhost:8002/')) 


app.listen(8005, () => {
    console.log('Balancer is Listening to Port 8005')
}) 