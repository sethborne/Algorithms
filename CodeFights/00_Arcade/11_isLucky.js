// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

function isLucky(n) {
    n = n.toString();
    if(n.length < 2 || n.length % 2 === 1){
        if(n.length < 2){
            console.log('String is only One Length');
            return null;
        }
        else {
            // its odd
            console.log('Odd Length String');
            return null;
        }
    }
    
    // two variables for sum, switches between based on the iterator value
    let half = Math.floor(n.length / 2);
    let firstSum = 0;
    let secondSum = 0;
    // for loop to iterate over the entire number
    for(let i = 0; i < n.length; i += 1){
        // make a var that switches the iterator
        if(i < half){
            firstSum += Number(n[i])
        }
        else{
            secondSum += Number(n[i])
        }
    }
    console.log(firstSum, secondSum);
    return firstSum === secondSum ? true : false;
}

// [0, 1, 2, 3, 4, 5]
console.log(isLucky(1230));
console.log(isLucky(239017));