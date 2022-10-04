function median(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    console.log(sorted);
    const middle = Math.floor(sorted.length / 2);
    console.log(middle)

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}
console.log(median([7,4,6,9,3,8]));