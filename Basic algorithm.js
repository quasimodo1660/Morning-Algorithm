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
//-------------------------------------------------------------------------------------------
//Valid Palindrome
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.
// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.
// For the purpose of this problem, we define empty string as valid palindrome.
var isPalindrome = function(s) {
    if(s.length==0)
        return true
    else{
        s=s.toLowerCase().replace(/[^a-z0-9]/g,'')
        return s==s.split('').reverse().join('')
    }
};
//-------------------------------------------------------------------------------------------
//Self Dividing Numbers
// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
// Example 1:
// Input: 
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
// Note:
// The boundaries of each input argument are 1 <= left <= right <= 10000.
var selfDividingNumbers = function(left, right) {
  var arr = [];
  var insert;
    for(var x=left;x<=right;x++){
        insert=true;
        if(x.toString().includes('0'))  
            insert=false;
        else{
            for(var i=0;i<x.toString().split('').length;i++){
                if(x%Number(x.toString().split('')[i])!=0){
                    insert=false;
                    break;
                }       
            }
        }
        if(insert)
            arr.push(x)       
  }  
  return arr
};
//-----------------------------------------------------------------------------------------------
//Remove Element
// Given an array and a value, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
// Example:
// Given nums = [3,2,2,3], val = 3,
// Your function should return length = 2, with the first two elements of nums being 2.
var removeElement = function(nums, val) {
    var x=0;
    while(x<nums.length){
        if(nums[x]==val){
            nums.splice(x,1); 
            x=0;
        }
        else
            x++         
    }
    return nums
};
console.log(removeElement([3,3],3))

//Reverse String
var reverseString = function(s) {
    return s.split('').reverse().join('')
};

//Single Number
var singleNumber = function(nums) {
    if(nums.length==1){
        return nums[0]
    }
    for(var x=0;x<nums.length;x++){
        for(var y=1;y<nums.length;y++){
            if(x!=y){
                if(nums[x]==nums[y])
                    break
                
                }   
            return nums[x]             
            }
                      
        }
}


console.log(singleNumber([2,2,1]))

//Fizz Buzz
var fizzBuzz = function(n) {
    var arr=[];
    for (var x=1;x<=n;x++){
        if(x%3==0&&x%5==0)
            arr.push('FizzBuzz')
        else if(x%3==0)
            arr.push('Fizz')
        else if(x%5==0)
            arr.push('Buzz')
        else
            arr.push(String(x))
    }
    return arr;
};
