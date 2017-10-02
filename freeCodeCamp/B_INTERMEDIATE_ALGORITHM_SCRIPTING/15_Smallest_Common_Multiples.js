function smallestCommons(inputArray) {
    var arrayMin;
    var arrayMax;
    if(inputArray[0] < inputArray[1]){
        arrayMin = inputArray[0];
        arrayMax = inputArray[1];
    }
    else{
        arrayMin = inputArray[1];
        arrayMax = inputArray[0];
    }
    // prime numbers under the arrayMax
    var arrayPrime = [];
    for(var i = 1; i <= arrayMax; i += 1){
        if(i == 1){
            console.log("Did you know the Greeks didn't consider 1 to be Prime?");
        }
        // two case
        else if(i == 2){
            arrayPrime.push(i);
        }
        // evens greater than two empty shell
        else if(i > 2 && i % 2 == 0){
            // do nothing
        }
        else if(i > 2 && i > arrayPrime[arrayPrime.length - 1]){
            var isPrime = true;
            for(var p = 0; p < arrayPrime.length; p += 1){
                if(i % arrayPrime[p] == 0){
                    isPrime = false;
                }
            }
            if(isPrime){
                arrayPrime.push(i)
            }
        }
    }
    // count array
    var countArray = [];
    for(var f = 0; f < arrayPrime.length; f += 1){
        countArray.push(0);
    }
    for(var j = arrayMin; j <= arrayMax; j += 1){
        // console.log(j);
        var jTotal = j;
        // console.log(`Clog j: ${j}`);
        if(jTotal == 1){
            
        }
        else{
            var p = 0;
            var count = 0;
            while(jTotal > 1){
                // console.log(`While Loop: j: ${j} | jTotal: ${jTotal} | p: ${p}`);
                if(jTotal % arrayPrime[p] == 0){
                    // console.log(`j: ${jTotal} | p: ${p} | arrayPrime[p]: ${arrayPrime[p]}`);
                    jTotal /= arrayPrime[p];
                    // console.log(`Current Loop jTotal: ${jTotal}`);
                    count += 1;
                    // console.log(`count: ${count}`);
                    if(count > countArray[p]){
                        countArray[p] = count;
                    }
                }
                else{
                    count = 0;
                    p += 1;
                }
            }
        }
    }
    console.log(countArray);
    // final product
    var finalProd = 1;
    for(var m = 0; m < countArray.length; m += 1){
        var iterProd = 1;
        if(countArray[m] > 0){
            for(var iter = 0; iter < countArray[m]; iter += 1){
                iterProd = iterProd * arrayPrime[m];
                // console.log(`m: ${m} | iterProd: ${iterProd}`);
            }
        }
            finalProd *= iterProd;
            // console.log(`Loop m: ${m} | iterProd: ${iterProd} | finalProd: ${finalProd}`);            
    }
    // console.log(`arrayMin: ${arrayMin} | arrayMax: ${arrayMax}`);
    // console.log(`arrayPrime: [ ${arrayPrime} ]`);
    // console.log(`arrayPrime: [ ${arrayPrime} ]`);
    console.log(arrayPrime);
    console.log(finalProd);
    return finalProd;
}

smallestCommons([1, 5]);
// should return a number.
smallestCommons([1, 5]);
// should return 60.
smallestCommons([5, 1]);
// should return 60.
smallestCommons([1, 13]); 
// should return 360360.
smallestCommons([23, 18]);
// should return 6056820.