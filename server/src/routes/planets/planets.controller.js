const {planets} = require("../../models/planets/planets.model");

const getAllPlanets = async (req, res) => {
    
    res.status(200).json(planets)
}

module.exports = {getAllPlanets}