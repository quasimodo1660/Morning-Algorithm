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

//-------------------------------------------------------------------------------------------
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


//-------------------------------------------------------------------------------------------
// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

// Example 1:
// Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
// Return 16
// The two words can be "abcw", "xtfn".

// Example 2:
// Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
// Return 4
// The two words can be "ab", "cd".

// Example 3:
// Given ["a", "aa", "aaa", "aaaa"]
// Return 0
// No such pair of words.
var maxProduct = function(words) {
    var arr=[];
    var arr2=[];
    var flag;  
    var result=0;
    for (var x=0;x<words.length;x++){
        for (var y=0;y<words.length;y++){   
            if(x!=y){
                flag=true;
                for(var z=0;z<words[x].length;z++){
                    if(words[y].includes(words[x][z]))
                        flag=false;
                }
            }
            if(flag && arr2.indexOf(words[y])==-1){
                arr2.push(words[y])
                
            }
                
            if(flag) {
                arr.push(words[x].length*words[y].length);   
            }
                
        }
    }
    
    if(arr.length>0)
        result=Math.max(...arr);
    return result;
    
};
//-------------------------------------------------------------------------------------------
// console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]))
// console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]))
// console.log(maxProduct(["edadc","ebbfe","aacdde","dfe","cb","fddddff","fabca","adccac","ece","ccaf","feba","bcb","edadc","aea","bacb","acefa","fcebffd","dfeebca","bedcbaa","deaccc","abedc","dadff","eef","ddebbb","abecab","cd","abdeee","eedce","deef","dceaddd","ced","fbbf","ba","eefeda","fb","cddc","adafbf","dded","aadbf","caefbaf","ccebf","dbb","ee","dadcecc","ddbcabb","afeaa","ec","aad","efde","cbcda","cdbdafd","cddc","ecaaa","ae","cfc","bccac","cdcc","abbbf","fcdface","ddbcdc","bfebb","daed","bc","dc","ecdfc","eeb","bb","dad","caecb","fbe","bbbc","cacea","dbc","fbe","bcfffbd","aeda","cff","ddfc","ea","bdfd","ccb","cb","ae","ceabefa","dcea","cbaed","bfedf","fa","ccd","fece","bceef","acabca","dafa","fdeec","dac","cae","adeeadb","ecacc","acfe","de"]))
// // console.log(["edadc","ebbfe","aacdde","dfe","cb","fddddff","fabca","adccac","ece","ccaf","feba","bcb","edadc","aea","bacb","acefa","fcebffd","dfeebca","bedcbaa","deaccc","abedc","dadff","eef","ddebbb","abecab","cd","abdeee","eedce","deef","dceaddd","ced","fbbf","ba","eefeda","fb","cddc","adafbf","dded","aadbf","caefbaf","ccebf","dbb","ee","dadcecc","ddbcabb","afeaa","ec","aad","efde","cbcda","cdbdafd","cddc","ecaaa","ae","cfc","bccac","cdcc","abbbf","fcdface","ddbcdc","bfebb","daed","bc","dc","ecdfc","eeb","bb","dad","caecb","fbe","bbbc","cacea","dbc","fbe","bcfffbd","aeda","cff","ddfc","ea","bdfd","ccb","cb","ae","ceabefa","dcea","cbaed","bfedf","fa","ccd","fece","bceef","acabca","dafa","fdeec","dac","cae","adeeadb","ecacc","acfe","de"].filter((x)=>x.length>5))

// Find the contiguous subarray within an array (containing at least one number) which has the largest product.

// For example, given the array [2,3,-2,4],
// the contiguous subarray [2,3] has the largest product = 6.

var maxProduct = function(nums) {
    if(nums.length==1)
        return nums[0]
    if(nums.length==2){
        if(nums[0]==0)
            nums[0]=1
        if(nums[1]==0)
            nums[1]==1
    }
    var arr=[]
    for(var x=0;x<nums.length-1;x++){
        arr.push(nums[x]*nums[x+1])
    }
    return Math.max(...arr)
    
};
//-------------------------------------------------------------------------------------------
// Find the Difference
// Given two strings s and t which consist of only lowercase letters.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Find the letter that was added in t.
// Example:
// Input:
// s = "abcd"
// t = "abcde"
// Output:
// e
// Explanation:
// 'e' is the letter that was added.
var findTheDifference = function(s, t) {
    var sub=t
    for (var x=0;x<t.length;x++){
        if(s.includes(t[x])){
            sub=sub.replace(t[x],'')
            s=s.replace(t[x],'')
        }
    }
    return sub
    
};

console.log(findTheDifference('a','aa'))
console.log(findTheDifference('abcd','abcde'))