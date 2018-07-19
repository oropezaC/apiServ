const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const env = require('./config/env')
const app = express()
const navApi = require('./routes/ApiNav')
const URIS = navApi;

app.use(bodyParser());
app.use(cookieParser());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


for (var i = 0; i < URIS.length; i++) {
    app.use(URIS[i].endpoint, require(URIS[i].require))
}

app.use('*',(req,res)=>{
  res.send("Servicio Arriba")
})

app.listen(env.port,()=> console.log("listen in port:: " + env.port) )
