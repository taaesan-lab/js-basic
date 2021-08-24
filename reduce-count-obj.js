const getCount = (objects) => {
    let count = 0;
    objects.reduce((p, c, i) => {
        if (p.x == p.y) {
            count++;
        }
        return c;
    });
    return count;
}

module.exports = getCount;