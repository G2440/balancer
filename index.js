const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.json());

app.use('/userService', proxy('https://microuser.herokuapp.com/'))
app.use('/contentService', proxy('https://microcontent.herokuapp.com/'))
app.use('/dailypassService', proxy('https://microdaily.herokuapp.com/')) 


app.listen(process.env.PORT || 8005, () => {
    console.log('Balancer is Listening to Port 8005')
}) 
