const launchesModel = require('../../models/launches/launches.model')
const httpGetAllLaunches = (req, res) => res.status(200).json(Array.from(launchesModel.getAllLaunches()));
const httpGetLaunchByNumber = (req, res) => {
    const {number} = req.params;

    res.status(200).json(launchesModel.getLaunchByNumber(Number(number)));
}
const httpAddLaunch = (req, res) => {
    let launch = req.body;
    if (!launch.mission || !launch.rocket || !launch.target) {
        return res.status(400).json({error: 'Missing required launch property'})
    }
    launch.launchDate = new Date(launch.launchDate);
    console.log(launch.launchDate)
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({error: 'Invalid launch date'})
    }
    launch = launchesModel.addLaunch(launch);
    return res.status(201).json(launch);
}
const httpDeleteLaunch = (req, res) => {
    const launchNumber = parseInt(req.params.number);
    if (!isNaN(launchNumber)) {
        if (launchesModel.removeLaunch(launchNumber)) {
            return res.status(204).end();
        } else {
            return res.status(404).json({error: 'Launch not found'})
        }


    } else {
        return res.status(400).json({error: 'Invalid launch number'})
    }

}
module.exports = {httpGetAllLaunches, httpGetLaunchByNumber, httpAddLaunch, httpDeleteLaunch}