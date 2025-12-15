// 1. Find the largest number among these three variables.
let num1 = 4;
let num2 = 8;
let num3 = 6;

let largest;
if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}

console.log(largest);
