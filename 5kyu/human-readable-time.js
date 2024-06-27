// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable (seconds) {
    let hour = 0;
    let minute = 0;
    while(seconds >= 3600) {
      hour+=1;
      seconds-=3600;
    }
    while(seconds >= 60) {
      minute+=1;
      seconds-=60;
    }
    hour = ("0" + hour).slice(-2);
    minute = ("0" + minute).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    return `${hour}:${minute}:${seconds}`;
  }