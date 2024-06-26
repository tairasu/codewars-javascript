// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++) {
      RegExp(/^\p{L}/,'u').test(words[i]) ? words[i] = words[i].slice(1) + words[i][0] + 'ay' : null;  
    }
    return words.join(' ');
  }