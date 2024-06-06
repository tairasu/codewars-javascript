// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    let map = {'a':0,'i':0,'u':0,'e':0,'o':0};
    for(let i=0; i<str.length;i++) {
      map[str.charAt(i)]+=1;
    }
    return map['a']+map['i']+map['u']+map['e']+map['o'];
  }