const dedupNumbers = (nums) => {
    // return nums.reduce((p,c,i) => p.includes(c) ? p : p.concat(c),[]);
    return nums.reduce((p,c,i) => {
        if (p.includes(c)) {
            return p;
        } else {
            return p.concat(c);
        }
    },[]);
}

// console.log(dedupNumbers([1,1,2,3]))

module.exports = dedupNumbers;