const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");
const path = require("path");
const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
})
app.use(express.json())
app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.use('/planets', planetsRouter);


module.exports = app;