function avoidObstacles(inputArray){
  inputArray = inputArray.sort((a, b) => a - b);
  
  // find largest value of the array
  let largestArrayVal = inputArray[inputArray.length - 1];
  
  for(let i = 1; i <= largestArrayVal + 1; i += 1){
    console.log(`Loop: ${i} | Conditional ${inputArray.every((valAtIndex) => valAtIndex % i !== 0)}`);
    console.log(inputArray.every((valAtIndex, index, arr) => { 
      console.log(`index: ${index}, valAtIndex: ${valAtIndex} | arr: ${arr} | i: ${i} | test: ${valAtIndex % i}`);
    }));
    if(inputArray.every((valAtIndex) => valAtIndex % i !== 0)){
      return i
    }
  }
}

// console.log(avoidObstacles([5, 3, 6, 7, 9]));
// console.log(avoidObstacles([1, 4, 10, 6, 2]));
// console.log(avoidObstacles([1]));

console.log(avoidObstacles([2, 3]));
// loop 1:
  // check val 2
  // console.log(2 % 1);
  // == 0
  // loop 1 false
// loop 2:
  // check val 2
  // console.log(2 % 2);
  // == 0
  // loop 2 false
// loop 3:
  // check val 2
  // console.log(2 % 3);
  // == 2
  // 2 !== 0
  // so far true
  // check val 3
  console.log(3 % 3);
  // == 0
  // 0 !== 0
  // this is false
  // so why doesn't this return false 