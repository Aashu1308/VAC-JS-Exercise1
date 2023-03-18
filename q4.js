nums = [20, 30, 53, 40, 50, 57, 60, 70, 80, 90];
console.log("Numbers not matching pattern are:")
for (num of nums) {
    i = num % 10;
    if (i != 0) {
        index = nums.indexOf(num);
        console.log(num);
        nums.splice(index, 1);
    }
}
console.log("New list is:", nums);