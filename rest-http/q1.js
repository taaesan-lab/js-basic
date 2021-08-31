const getContent = require('./getcontent');


const getTeamScore = async (teamKey, year, team, page, score) => {
    console.log(`Page: ${page}`);
    const resp = await getContent(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&${teamKey}=${team}&page=${page}`);

    for (item of resp.data) {
        if (team.toUpperCase() === item[teamKey].toUpperCase()) {
            score = score + (+item[`${teamKey}goals`]);
        }
    }

    if (page >= resp.total_pages) {
        return score;
    }
    return getTeamScore(teamKey, year, team, page + 1, score);
}

(async () => {

    let total = 0;
    total += await getTeamScore('team1', 2011, 'Barcelona', 1, 0);
    total += await getTeamScore('team2', 2011, 'Barcelona', 1, 0);
    console.log(total)

})();
