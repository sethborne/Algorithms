function sumPrimes(numValMax) {
    var finalSum = 0;
    // make an array of prime numbers
    var primeArray = [];
    // [ 1, 2, 3, 5, 7, 13, 17, 19 ] - first primes for reference
    for(var i = 1; i <= numValMax; i += 1){
        // one is not a prime
        if(i == 1){
            console.log("Sorry, One is Not a Prime");
        }
        // case for 2
        else if(i == 2){
            primeArray.push(i);
        }
        // empty switch for even over 2
        else if(i !== 2 && i % 2 == 0){
            // console.log("Even and Larger than Two");
        }
        // if over 2 and isPrime (meaning it can't be divided by anything else in the prime array)
        else if(i > 2 && i > primeArray[primeArray.length - 1]){
            var isPrime = true;
            for(var p = 0; p < primeArray.length; p += 1){
                if( i % primeArray[p] == 0){
                    isPrime = false;
                }
            }
            if(isPrime){
                primeArray.push(i);
            }
        }
    }
    for(var s = 0; s < primeArray.length; s += 1){
        finalSum += primeArray[s];
        // console.log(finalSum);
    }
    console.log(primeArray);
    console.log(finalSum);
    return finalSum;
}

sumPrimes(10);
sumPrimes(977); 
// should return 73156.