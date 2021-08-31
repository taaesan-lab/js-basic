function maxCost(cost, labels, dailyCount) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const costCount = parseInt(readLine().trim(), 10);

    let cost = [];

    for (let i = 0; i < costCount; i++) {
        const costItem = parseInt(readLine().trim(), 10);
        cost.push(costItem);
    }

    const labelsCount = parseInt(readLine().trim(), 10);

    let labels = [];

    for (let i = 0; i < labelsCount; i++) {
        const labelsItem = readLine();
        labels.push(labelsItem);
    }

    const dailyCount = parseInt(readLine().trim(), 10);

    const result = maxCost(cost, labels, dailyCount);

    ws.write(result + '\n');

    ws.end();
}