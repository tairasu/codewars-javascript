// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
    let count = 1;
    let arr = [];
    for(let i = 0; i<nFloors; i++) {
      arr.push(" ".repeat((nFloors-i-1) < 0 ? 0 : nFloors-i-1)  + "*".repeat(count) + " ".repeat((nFloors-i-1) < 0 ? 0 : nFloors-i-1));
      count +=2;
    }
    return arr;
  }