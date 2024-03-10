//length of the last word in the string.
let str="Hello World";
let strArr=str.split(" ");
console.log("Length of splited string:" + strArr.length);
console.log("splited strings:" + strArr);
console.log("Length of last string:" + strArr[1].length);

//Example 2:
let str1="Welcome to Playwright learnings";
let strArr1=str1.split(" ");
console.log("Length of splited string:" + strArr1.length);
let lstString=strArr1.length
console.log("splited strings:" + strArr1);
console.log("Length of last string:" + strArr1[lstString-1].length);

//Anagram

let str3='listen';
let str4='silent';
isAna