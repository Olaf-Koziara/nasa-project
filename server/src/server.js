const http = require("http");
const app = require("./app");
const {loadPlanetData} = require("./models/planets/planets.model");
const PORT = process.env.port || 8000;
const server = http.createServer(app);
const startServer = async () => {
    await loadPlanetData();
    server.listen(PORT, (() => {
        console.log(`listening on port ${PORT}`)
    }));
}
startServer();
