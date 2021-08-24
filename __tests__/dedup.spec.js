const dedupNumbers = require('../reduce-dedup');


it('Count obj equals 0', () => {

    objs = [
       0,0,1,1,2,3,4
    ]
    expect(dedupNumbers(objs).length).toBe(5)
});
