let a = [10, 30, 40, 60, 70, 80, 100, 110];
let missing_pos = [];
let len = a.length;
for (i = 0; i < len - 1; i++) {
    if ((a[i + 1] - a[i]) > 10) {
        missing_pos[missing_pos.length] = i + 1;
    }
}
console.log("Missing Positions:", missing_pos);

//solution 1 - using predefined
/*let count = 1;
for (i of missing_pos) {
    var n = (i + count) * 10;
    a.splice((i + count - 1), 0, n);
    count++;
}
console.log("Complete array:", a); */

//solution 2 - rewriting entire array
/*len += missing_pos.length;
for (i = 0; i < len; i++) {
    a[i] = (i + 1) * 10;
}
console.log("Complete array:", a);*/

//solution 3 - shifting array elements and inserting
let count = 1;
for (pos of missing_pos) {
    for (i = a.length - 1; i >= 0; i--) {
        if (i >= pos) {
            a[i + count] = a[i + count - 1];
            if (i == pos) {
                a[i + count - 1] = (pos + count) * 10;
            }
        }
    }
    count++;
}

len = a.length - count + 1;
console.log("Complete array:");
for (i = 0; i < len; i++) {
    console.log(a[i]);
}
