const modifyArray = (nums) => {
    return nums.reduce((p, c, i) => {
        if (c % 2 === 0) {
            p.push(c * 2);
        } else {
            p.push(c * 3);
        }
        return p
    }, []);
}

module.exports = modifyArray;
