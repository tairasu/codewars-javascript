// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
    let row_num= 1;
    let result = 0; 
    
    //find row num
    for(let j = 1; j<n; j++) {
      row_num += 2*j;
    }
    
    //sum row to result
    for(let i = 0; i<n; i++) {
      result += row_num+2*i;
    }
    
    return result;
  }