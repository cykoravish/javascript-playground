/*
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
*/

/*
//2. Find sum of all digits of a number.
let num = 552;
let numArr = String(num).split("");
let sum = 0;
numArr.forEach((e) => {
  sum += Number(e);
});
console.log(sum);
*/

/*
//3. Function to check if two strings are anagrams of each other.

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = {};
  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  return true;
}
console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("aab", "abb"));  
*/

/*
//4. Find the even number between 0 and 20
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
*/

/*
//5. Reverse a string without using reverse();
function reverseStr(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseStr("stop"));
*/

/*
//6. Finding sum of all even numbers from an given array
const arr = [3, 6, 7, 15, 20, 35, 22];
let sum = 0;
arr.forEach((elem) => {
  if (elem % 2 === 0) {
    sum += elem;
  }
});
console.log(sum);
*/

/*
//7. Given an array of numbers, find the largest even number.
function findLargestEvenNo(arr) {
  let largestEven = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (largestEven === null || arr[i] > largestEven) {
        largestEven = arr[i];
      }
    }
  }

  return largestEven;
}
console.log(findLargestEvenNo([0, 4, 2])); 
*/

/*
//8. Find the count of vowels in a string
const str = "javascript";
let count = 0;
const vowels = "aeiou";

for (let char of str.toLowerCase()) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log(count);
*/