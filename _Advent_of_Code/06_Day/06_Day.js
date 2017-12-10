// --- Day 6: Memory Reallocation ---

// A debugger program here is having an issue: it is trying to repair a memory reallocation routine, but it keeps getting stuck in an infinite loop.

// In this area, there are sixteen memory banks; each memory bank can hold any number of blocks. The goal of the reallocation routine is to balance the blocks between the memory banks.

// The reallocation routine operates in cycles. In each cycle, it finds the memory bank with the most blocks (ties won by the lowest-numbered memory bank) and redistributes those blocks among the banks. To do this, it removes all of the blocks from the selected bank, then moves to the next (by index) memory bank and inserts one of the blocks. It continues doing this until it runs out of blocks; if it reaches the last memory bank, it wraps around to the first one.

// The debugger would like to know how many redistributions can be done before a blocks-in-banks configuration is produced that has been seen before.

// For example, imagine a scenario with only four memory banks:

// The banks start with 0, 2, 7, and 0 blocks. The third bank has the most blocks, so it is chosen for redistribution.
// Starting with the next bank (the fourth bank) and then continuing to the first bank, the second bank, and so on, the 7 blocks are spread out over the memory banks. The fourth, first, and second banks get two blocks each, and the third bank gets one back. The final result looks like this: 2 4 1 2.
// Next, the second bank is chosen because it contains the most blocks (four). Because there are four memory banks, each gets one block. The result is: 3 1 2 3.
// Now, there is a tie between the first and fourth memory banks, both of which have three blocks. The first bank wins the tie, and its three blocks are distributed evenly over the other three banks, leaving it with none: 0 2 3 4.
// The fourth bank is chosen, and its four blocks are distributed such that each of the four banks receives one: 1 3 4 1.
// The third bank is chosen, and the same thing happens: 2 4 1 2.
// At this point, we've reached a state we've seen before: 2 4 1 2 was already seen. The infinite loop is detected after the fifth block redistribution cycle, and so the answer in this example is 5.

// Given the initial block counts in your puzzle input, how many redistribution cycles must be completed before a configuration is produced that has been seen before?

//
//1 [0, 2, 7, 0]
//2 [2, 4, 1, 2]
//3 [3, 1, 2, 3]
//4 [0, 2, 3, 4]
//5 [1, 3, 4, 1]

// [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3]

function memoryAllocation(array){
    let inputArray = [...array];
    // let inputArray = array;
    let checkArray = [];
    let turnCount = 0;
    let isInfinite = false;
    let arrayMaxIndex;
    
    checkArray[0] = array;
    
    // while(isInfinite === false){
    while(turnCount < 10000 ){
        turnCount += 1;
        console.log("turnCount: " + turnCount);
        // checks
        // need index of max
        arrayMaxIndex = inputArray.indexOf(Math.max(...inputArray));
        console.log(arrayMaxIndex);
        let maxTemp = inputArray[arrayMaxIndex];
        let index = arrayMaxIndex + 1;
        if((index) > inputArray.length - 1){
            index = 0;
        }
        console.log("IA: Pre:");
        console.log(inputArray);
        let pushArray = [...inputArray]; 
        while(maxTemp > 0){
            pushArray[index] += 1;
            pushArray[arrayMaxIndex] -= 1;
            maxTemp -= 1;
            index += 1;
            if((index) > inputArray.length - 1){
                index = 0;
            }
        }
        console.log("IA: Post:");
        console.log(inputArray); 
        // push the array into check
        inputArray = pushArray;
        console.log("input");
        console.log(inputArray);
        console.log("check");
        console.log(checkArray);
        let repeatArray = [];
        // if(repeatArray.length > 1){
        //     if(repeatArray[0][0] === inputArray[0] && repeatArray[0][repeatArray[0].length -1] === inputArray[inputArray.length -1]){
        //         let firstIndexInset = 0;
        //         let lastIndexInset = repeatArray[0].length - 1; 
        //         let indexValSameInset = 0;
        //         while(repeatArray[i][firstIndexInset] === inputArray[firstIndexInset] && repeatArray[i][lastIndexInset] === inputArray[lastIndexInset]){
        //             if(indexValSame >= repeatArray[0].length){
        //                 repeatArray.push(inputArray);
        //                 console.log(repeatArray);
        //                 return turnCount;
        //             }
        //         }
        //     }
        // }
        for(let i = 0; i < checkArray.length; i += 1){
            // for(let j = 0; j < inputArray.length; j += 1){
                if(checkArray[i][0] === inputArray[0] && checkArray[i][checkArray[i].length -1] === inputArray[inputArray.length -1]){
                    let firstIndex = 0;
                    let lastIndex = checkArray[i].length - 1; 
                    let indexValSame = 0;
                    while(checkArray[i][firstIndex] === inputArray[firstIndex] && checkArray[i][lastIndex] === inputArray[lastIndex]){
                        if(indexValSame >= checkArray[i].length){
                            repeatArray.push(checkArray[checkArray.length - 1]);
                            console.log("NESTED ARRAYS SAME");
                            console.log(repeatArray);
                            console.log(checkArray.length - 1);
                            console.log(checkArray[checkArray.length - 1]);
                            // return turnCount;
                            break;
                        }
                        // while(firstIndex < (checkArray.length/2)-1){
                        else{
                            console.log("IN WHILE");
                            console.log(checkArray[i]);
                            indexValSame += 2;
                            console.log(indexValSame);
                            firstIndex += 1;
                            lastIndex -= 1;
                            console.log(`CAIF: ${checkArray[i][firstIndex]} | ${firstIndex} | CAJF: ${inputArray[firstIndex]} | CAIL: ${checkArray[i][lastIndex]} | ${lastIndex} | CAIL: ${inputArray[inputArray.length -1]}`);
                        }
                    }
                    // if(indexValSame === checkArray[i].length){
                    //     console.log("NESTED ARRAYS SAME");
                    //     return turnCount;
                    // }
                    console.log("Might Be Same");
                    console.log(`i: ${i} |`);
                    console.log(checkArray[i]);
                    console.log(inputArray);
                    console.log(checkArray[i][checkArray[i].length -1]);
                }
            // }
        }
        
        checkArray.push(inputArray);
        
    }

    
    // console.log(isInfinite);
    // console.log(inputArray);
    // console.log(checkArray);
    return turnCount;
}

console.log(memoryAllocation([0, 2, 7, 0]));
console.log(memoryAllocation([4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3]));

