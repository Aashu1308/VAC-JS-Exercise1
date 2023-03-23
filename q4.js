nums = [20, 30, 53, 40, 50, 57, 60, 70, 80, 90];
let indexes = [];
let index;
let count = 0;
let len = nums.length;
console.log("Numbers not matching pattern are:")
for (num of nums) {
    i = num % 10;
    if (i != 0) {
        index = nums.indexOf(num);
        console.log(num);
        indexes[indexes.length] = index - count;
        count += 1;
    }
}
for (i of indexes) {
    let found = false;
    for (j = 0; j < len - 1; j++) {
        if (i == j) {
            found = true;
        }
        if (found) {
            nums[j] = nums[j + 1];
        }
    }
}
console.log("New list is:")
for (i = 0; i < (nums.length - count); i++) {
    console.log(nums[i]);
}
