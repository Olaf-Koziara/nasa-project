const {getAllPlanets} = require("../../models/planets/planets.model");

const httpGetAllPlanets = async (req, res) => {

    res.status(200).json(getAllPlanets())
}

module.exports = {httpGetAllPlanets}