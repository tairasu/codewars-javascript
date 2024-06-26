// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
    let zeros = 0;
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
      arr[i]===0 ? zeros +=1 : newArr.push(arr[i]);
    }
    for(let i=0; i<zeros; i++) {
      newArr.push(0);
    }
    return newArr;
  }