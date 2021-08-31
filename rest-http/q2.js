const getContent = require('./getcontent');


const getWinner = async (year, name) => {
    const resp = await getContent(`https://jsonmock.hackerrank.com/api/football_competitions?year=${year}&name=${name}`);
    return resp.data.length > 0 ? resp.data[0].winner : 'No Winner';
}

const getTeamScoreByCompetition = async (teamKey, competition, year, team, page, score) => {
    console.log(`Page: ${page}`);
    const resp = await getContent(`https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&${teamKey}=${team}&page=${page}`);

    for (let item of resp.data) {
        if (team.toUpperCase() === item[teamKey].toUpperCase()) {
            score = score + (+item[`${teamKey}goals`]);
        }
    }

    if (page >= resp.total_pages) {
        return score;
    }
    return getTeamScoreByCompetition(teamKey, competition,  year, team, page + 1, score);
}


(async () => {

    let total = 0;
    let year = 2014;
    let name = 'English Premier League'
    // total += await getTeam1Score(2011, 'Barcelona', 1, 0);

    const winner = await getWinner(year, name);
    total += await getTeamScoreByCompetition('team1', name, year, winner, 1, 0);
    total += await getTeamScoreByCompetition('team2', name, year, winner, 1, 0);
    console.log(`${year} Winner: ${winner} Score : ${total}`);

})();
