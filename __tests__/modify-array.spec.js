const modifyArray = require('../modify-array');

it('Even is doubled, Odd is trippled ', () => {

    objs = [
       1,2,3
    ]
    const result = modifyArray(objs);
    expect(result[0]).toBe(3);
    expect(result[1]).toBe(4);
    expect(result[2]).toBe(9);
});
