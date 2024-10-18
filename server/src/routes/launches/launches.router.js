const express = require('express');
const {httpGetAllLaunches, httpGetLaunchByNumber, httpAddLaunch, httpDeleteLaunch} = require("./launches.controller");

const launchesRouter = express.Router()
launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.get('/:number', httpGetLaunchByNumber);
launchesRouter.post('/', httpAddLaunch);
launchesRouter.delete('/:number', httpDeleteLaunch);
module.exports = launchesRouter;