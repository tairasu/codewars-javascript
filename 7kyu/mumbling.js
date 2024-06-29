// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
	let str = '';
  for(let i=0; i<s.length; i++) {
    for(let j=0; j<i+1; j++) {
      j == 0 ? str = str.concat(s[i].toUpperCase()) : str = str.concat(s[i].toLowerCase());
    }
    str = str.concat('-');
  }
  return str.slice(0, -1);
}