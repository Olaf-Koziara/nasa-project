const fs = require("fs");
const path = require("path");
const {parse} = require("csv-parse");


const parser = parse({
    comment: '#',
    columns: true

})
const isHabitablePlanet = (planet) => planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
const planets = [];
const loadPlanetData = () => (
    new Promise((resolve, reject) => {
        fs.createReadStream('./data/kepler_data.csv').pipe(parser).on('data', (data) => {
            if (isHabitablePlanet(data)) {
                planets.push(data)
            }
        }).on('end', () => {
            resolve(planets);
        }).on('error', reject)
    }));
const getAllPlanets = () => planets;
module.exports = {loadPlanetData, getAllPlanets};