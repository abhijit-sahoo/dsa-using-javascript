const isPalindrome = (str) => 
    str.split("").reverse().join("")===str;

console.log(isPalindrome("helleh"))