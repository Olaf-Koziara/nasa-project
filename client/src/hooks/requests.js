const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
    let planets = [];
    await fetch(`${API_URL}/planets`).then((res) => {
        planets = res.json();

    })
    return planets;
}

async function httpGetLaunches() {
    let launches = [];
    await fetch(`${API_URL}/launch`).then((res) => {
        launches = res.json();
    })
    return launches;
}

async function httpSubmitLaunch(launch) {
    const launchJSON = JSON.stringify(launch);
    try {
        return await fetch(`${API_URL}/launch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: launchJSON
        })
    } catch (e) {
        return {ok: false}
    }

}

async function httpAbortLaunch(id) {
    try {
        return await fetch(`${API_URL}/launch/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (e) {
        return {ok: false}
    }
}

export {
    httpGetPlanets,
    httpGetLaunches,
    httpSubmitLaunch,
    httpAbortLaunch,
};