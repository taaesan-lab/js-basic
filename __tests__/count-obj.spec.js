const getCount = require('../reduce-count-obj');

test('Count obj', () => {

    objs = [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 5 },
    ]
    expect(getCount(objs)).toBe(2)
})