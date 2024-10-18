const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const path = require("path");
const app = express();
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} `);
    next()
})
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS,DELETE')
    next();
})
app.use(express.json())
app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.use('/planets', planetsRouter);
app.use('/launch', launchesRouter);


module.exports = app;