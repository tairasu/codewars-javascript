// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript/655a1f9f3974cb8627be19ce

function disemvowel(str) {
    str = str.replaceAll('a', '');
    str = str.replaceAll('i', '');
    str = str.replaceAll('u', '');
    str = str.replaceAll('e', '');
    str = str.replaceAll('o', '');
    str = str.replaceAll('A', '');
    str = str.replaceAll('I', '');
    str = str.replaceAll('U', '');
    str = str.replaceAll('E', '');
    str = str.replaceAll('O', '');
    return str;
  }