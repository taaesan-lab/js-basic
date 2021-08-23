nums = [3, 2, 2, 5, 5, 7];
let reverse = nums.reduce((p, c,i) => {
    return [c].concat(p)
}, []);
console.log(reverse);