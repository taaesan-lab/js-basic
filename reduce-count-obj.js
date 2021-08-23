const getCount = (objects) => {
    let count = 0;
    objects.reduce((p, c, i) => {
        if (p.x == p.y){
            count++;
        }
        return c;
    })
return count;
}
module.exports = getCount;

// objs = [
//     {x:1, y:1},
//     {x:2, y:3},
//     {x:3, y:3},
//     {x:3, y:4},
//     {x:4, y:5},
// ]

// console.log(getCount(objs));