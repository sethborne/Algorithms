// --- Day 4: High-Entropy Passphrases ---

// A new system policy has been put in place that requires all accounts to use a passphrase instead of simply a password. A passphrase consists of a series of words (lowercase letters) separated by spaces.

// To ensure security, a valid passphrase must contain no duplicate words.

// For example:

// aa bb cc dd ee is valid.
// aa bb cc dd aa is not valid - the word aa appears more than once.
// aa bb cc dd aaa is valid - aa and aaa count as different words.
// The system's full passphrase list is available as your puzzle input. How many passphrases are valid?

// read in the file

var fs = require('fs');

// ASYNC
// var arrayOfPassphrases = fs.readFile('04_Day.txt', function(err, data){
//     if(err){ throw err };
//     array = data.toString().split('\r\n');
//     // for( i in array ){
//     //     console.log(array[i]);
//     // }
//     console.log(array);
//     return array;
// })

// SYNC
var arrayOfPassphrases = fs.readFileSync('04_Day.txt').toString().split('\r\n');
// console.log(arrayOfPassphrases);
// console.log(arrayOfPassphrases[0]);

function highEntropyPassphrases(inputArray){
    let validCount = 0;
    for(let i = 0; i < inputArray.length; i += 1){
        let isValid = true;
        let queue = inputArray[i];
        queue = queue.split(" ");
        // console.log(queue);
        while(queue.length > 0){
            let currentValueToCheck = queue[0];
            for(let p = 1; p < queue.length; p += 1){
                if(currentValueToCheck === queue[p]){
                    isValid = false;
                    // console.log(`i: ${i} | p: ${p} | isValid: ${isValid}`);
                }
            }
            queue.shift();
        }
        // console.log(`i: ${i} | isValid: ${isValid}`);
        if(isValid === true){
            validCount += 1;
        }
    }
    console.log(validCount);
    return validCount;
}

highEntropyPassphrases(["aa bb cc dd ee",
                        "aa bb cc dd aa",
                        "aa bb cc dd aaa"]);
                        
highEntropyPassphrases(arrayOfPassphrases);