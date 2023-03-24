let studlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let french = [];
let german = [];
let neither = [];
for (i = 0; i < 25; i++) {
    var n = i % 2;
    var stud = studlist[i];
    if (i != 0 && n != 0) {
        french[french.length] = stud;

    }
    else if (i != 0 && n == 0) {
        german[german.length] = stud;

    }
    else {
        neither[neither.length] = stud;

    }
}
console.log("French:", french);
console.log("German:", german);
console.log("Neither:", neither);
