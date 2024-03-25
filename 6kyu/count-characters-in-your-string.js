// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
    let dict = {};
    for (let i in string) {
      dict[string[i]] ? dict[string[i]]+=1 : dict[string[i]]=1;
    }
    return dict;
  }