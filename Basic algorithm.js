//Palindrome Number
//Determine whether an integer is a palindrome. Do this without extra space.

var isPalindrome = function(x) {
    if (x==Number(String(x).split('').reverse().join('')))
        return true;
    else
        return false;
};
//-------------------------------------------------------------------------------------------
//Length of Last Word
// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string
// If the last word does not exist, return 0
// Note: A word is defined as a character sequence consists of non-space characters only.
// Example:
// Input: "Hello World"
// Output: 5
var lengthOfLastWord = function(s) {
    var arr = s.split(' ').reverse();
    for (var x=0;x<arr.length;x++){
        if(arr[x]!='')
            return arr[x].length;
    }
    return 0;
};

console.log(lengthOfLastWord(' a'))

// Happy Number
// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
var isHappy = function(n) {
    if (n>6){
        var sum=String(n).split('').reduce((x,y)=> x+=Math.pow(parseInt(y),2),0);
        if (sum==1)
            return true;
        else
            return isHappy(sum);
    }
    else
        return n==1
};

console.log(isHappy(2))