function isPositive(a) {
    if (a === 0) {
        throw 'Zero Error';
    }
    if (a < 0) {
        throw 'Negative Error'
    }
    return 'YES'
}

console.log(isPositive(2));