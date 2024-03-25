// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
    const isUpperCase = str => str === str.toUpperCase();
    let result = "";
   
    for(let i=0;i<string.length;i++) {
      if(isUpperCase(string[i])) {
         result = result + " " + string[i];
         } else {
           result += string[i];
         }
    }
    return result;
  }