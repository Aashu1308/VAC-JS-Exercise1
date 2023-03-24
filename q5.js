let a = [10, 30, 40, 60, 70, 80, 100, 110];
let missing_pos = [];
for (i = 0; i < a.length - 1; i++) {
    if ((a[i + 1] - a[i]) > 10) {
        missing_pos[missing_pos.length] = i + 1;
    }
}
console.log("Missing Positions:", missing_pos);
let count = 1;
for (i of missing_pos) {
    var n = (i + count) * 10;
    a.splice((i + count - 1), 0, n);
    count++;
}
console.log("Complete array:", a);
