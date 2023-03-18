let empid = [];
for (i = 0; i < 10; i++) {
    n = Number(prompt("Enter Employee ID"));
    empid[i] = n;
}
for (i = 0; i < 9; i++) {
    for (j = 0; j < (9 - i); j++) {
        if (empid[j] > empid[j + 1]) {
            var temp = empid[j];
            empid[j] = empid[j + 1];
            empid[j + 1] = temp;
        }
    }
}

console.log(empid);