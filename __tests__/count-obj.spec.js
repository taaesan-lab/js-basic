const getCount = require('../reduce-count-obj');

it('Count obj equals 2', () => {

    objs = [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 5 },
    ]
    expect(getCount(objs)).toBe(2)
});