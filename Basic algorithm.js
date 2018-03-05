//Palindrome Number
//Determine whether an integer is a palindrome. Do this without extra space.

var isPalindrome = function(x) {
    if (x==Number(String(x).split('').reverse().join('')))
        return true;
    else
        return false;
};