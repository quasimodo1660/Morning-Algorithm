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
    var flag;  
    var result=0;
    for (var x=0;x<words.length-1;x++){
        for (var y=x+1;y<words.length;y++){  
            flag=true;
            for(var z=0;z<words[x].length;z++){
                if(words[y].includes(words[x][z])){
                    flag=false;
                    break;
                }          
            }
            if(flag)
                arr.push(words[x].length*words[y].length)
        }
        
    }
    if(arr.length>0)
        result=Math.max(...arr);
    return result;
    
};
//-------------------------------------------------------------------------------------------
console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]))
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]))
console.log(maxProduct(["edadc","ebbfe","aacdde","dfe","cb","fddddff","fabca","adccac","ece","ccaf","feba","bcb","edadc","aea","bacb","acefa","fcebffd","dfeebca","bedcbaa","deaccc","abedc","dadff","eef","ddebbb","abecab","cd","abdeee","eedce","deef","dceaddd","ced","fbbf","ba","eefeda","fb","cddc","adafbf","dded","aadbf","caefbaf","ccebf","dbb","ee","dadcecc","ddbcabb","afeaa","ec","aad","efde","cbcda","cdbdafd","cddc","ecaaa","ae","cfc","bccac","cdcc","abbbf","fcdface","ddbcdc","bfebb","daed","bc","dc","ecdfc","eeb","bb","dad","caecb","fbe","bbbc","cacea","dbc","fbe","bcfffbd","aeda","cff","ddfc","ea","bdfd","ccb","cb","ae","ceabefa","dcea","cbaed","bfedf","fa","ccd","fece","bceef","acabca","dafa","fdeec","dac","cae","adeeadb","ecacc","acfe","de"]))
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
        console.log('x '+nums[x])
        for(var y=0;y<nums.length;y++){
            if(x==y)
                break
            if(nums[x]==nums[y]&&x!=y)
                break;    
            return nums[x]
        }
    }
}


// console.log('sigleNumber '+singleNumber([1,3,1,-1,3]))

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

//Sum of Two Integers
var getSum = function(a, b) {
    console.log(a.charCodeAt(0))
    console.log(a.charCodeAt(0)-b.charCodeAt(0))
};
getSum('B','A')


// console.time("a")
var map={
    name:"Kevin",
    subMap:{
        Person:"Kevin He",
        address:{
            street:"1234,Zanker,Rd",
            city:"San Jose",
            state:"CA",
            zip:''
        }
    }
}

var printInfo=function(m){
    var returnArr=[]
    returnArr.push(m.subMap.Person)
    returnArr.push(m.subMap.address.street)
    returnArr.push(m.subMap.address.city)
    returnArr.push(m.subMap.address.state)
    if(m.subMap.address.zip=='')
        returnArr.push('nil')
    else
        returnArr.push(m.subMap.address.zip)
    return returnArr
}

// console.log(printInfo(map))
// console.timeEnd("a")


// Related to question Excel Sheet Column Title
// Given a column title as appear in an Excel sheet, return its corresponding column number.
// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
var titleToNumber = function(s) {
    var sum=0;
    for(var x=s.length-1,y=0;x>=0;x--,y++){
        if(x!=s.length-1)
            sum=sum+Math.pow(26,y)*(s[x].charCodeAt(0)-'A'.charCodeAt(0)+1)
        else{
            if(s[x]=='A')
            sum+=1
        else
            sum+=(s[x].charCodeAt(0)-'A'.charCodeAt(0)+1)
        }
        
        
    }
    return sum;
};

// console.log(titleToNumber('AZZ'))


//387. First Unique Character in a String
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
// Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode",
// return 2.
var firstUniqChar = function(s) {
    var found;
    for(var x=0;x<s.length;x++){
        found=false;
        for(var y=0;y<s.length;y++){
            if(s[x]==s[y]&&x!=y){
                found=true
                break
            }
        }
        if(!found)
            return x
    }
    return -1; 
};


//Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
var moveZeroes = function(nums) {
    var y=nums.length;
    for(var x=0;x<y;x++)
        if(nums[x]==0){
            nums.splice(x,1);
            nums.push(0);
            y-=1;
            x-=1;
        }
    return nums
};
// console.log('Move Zeroes '+moveZeroes([0,0,1]))

//Contains Duplicate
var containsDuplicate = function(nums) {
    for(var x=0;x<nums.length;x++){
        for(var y=0;y<nums.length;y++){
            if(nums[x]==nums[y]&&x!=y)
                return true;
        }
    }
    return false;
};
// console.log('Contains Duplicate '+ containsDuplicate([1]))

//Power of Three
var isPowerOfThree = function(n) {
  if(n==1||n==3)
    return true;
  else if(n.toString().split('').reduce((x,y)=> x+Number(y),0)%9==0 && n%2!=0)
    return true
  else
    return false
};

console.log(isPowerOfThree(45))

//238. Product of Array Except Self
// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Solve it without division and in O(n).
// For example, given [1,2,3,4], return [24,12,8,6].
// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
var productExceptSelf = function(nums) {
    var arr=[];
    var product;
    for(var i =0;i<nums.length;i++){
        product=1;
        for (var j=0;j<nums.length;j++){
            if(i!=j)
                product*=nums[j]
        }
        arr.push(product)
    }
    return arr;
};
console.log(productExceptSelf([1,2,3,4]))

//75. Sort Colors
var sortColors = function(nums) {
    var temp
    for(var x=0;x<nums.length-1;x++){
        if(nums[x]>nums[x+1]){
            temp=nums[x];
            nums[x]=nums[x+1];
            nums[x+1]=temp;
            x=-1;
        }
    }
    return nums
};
console.log(sortColors([2,2,0,1,0,2,0]))

//162. Find Peak Element
var findPeakElement = function(nums) {
    var index=0;
    nums.unshift(Number.NEGATIVE_INFINITY);
    nums.push(Number.NEGATIVE_INFINITY);
    for(var x=1;x<=nums.length-1;x++){
        if(nums[x]>nums[x-1] && nums[x]>nums[x+1]){
            index=x-1;
        }
    }
    return index
};
console.log(findPeakElement([3,2,1]))