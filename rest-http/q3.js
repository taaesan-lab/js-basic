const getContent = require('./getcontent');

const getNumDraws = async (year) => {
    let total = 0;
    for(let i = 0; i < 11; i++){
        const resp = await getContent(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=${i}&team2goals=${i}`);
        total = total + (+resp.total);
    }
    return total;
}


(async () => {

    let year = 2011;
    total = await getNumDraws(year);
    console.log(`In ${year} have total Draws : ${total} matchess`);

})();
