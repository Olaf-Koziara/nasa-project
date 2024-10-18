const launches = new Map()
let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'test',
    rocket: 'test',
    launchDate: new Date(),
    destination: '',
    customer: ['test', ''],
    upcoming: true,
    success: false,
}
launches.set(launch.flightNumber, launch);
const getAllLaunches = () => Array.from(launches.values());
const addLaunch = (launch) => {
    latestFlightNumber++;
    launch.flightNumber = latestFlightNumber;
    launches.set(launch.flightNumber, launch);
    return launch;
};
const removeLaunch = (flightNumber) => launches.delete(flightNumber);
const getLaunchByNumber = (flightNumber) => launches.get(flightNumber);
module.exports = {getAllLaunches, addLaunch, removeLaunch, getLaunchByNumber};