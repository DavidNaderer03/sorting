const array = [[1, 2, 3], [1, 2, 3], [4, 5, 6]];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length - 1; j++) {
        process.stdout.write(array[i][j].toString() + " ");
    }
    process.stdout.write(`${array[i][array[i].length - 1]}\n`);
}