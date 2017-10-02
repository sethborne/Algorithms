function sumFibs(numValEnd) {
    var fibArray = [ 0, 1 ];
    var prev = 0;
    var current = 1;
    var fibArraySum;
    var finalSum = 0;

    if(numValEnd > -1 && numValEnd < 2){
        if(numValEnd == 1){
            finalSum = 2;
            console.log(`Sum is: ${finalSum}`);
        }
        else{
            finalSum = 0;
            console.log(`Sum is: ${finalSum}`);
        }
    }
    else{
        while(current < numValEnd){
            fibArraySum = current + prev;
                prev = current;
                current = fibArraySum;
            fibArray.push(fibArraySum);
        }
    }
    if(numValEnd > 1){
        for(var i = 0; i < fibArray.length; i += 1){
            if(fibArray[i] <= numValEnd && fibArray[i] % 2 == 1){
                finalSum += fibArray[i];
            }
        }
    }
    console.log(finalSum);
    return finalSum;
}


sumFibs(1);
// should return a number.
sumFibs(10);
sumFibs(1000);
// should return 1785.
sumFibs(4000000);
// should return 4613732.
sumFibs(4);
// should return 5.
sumFibs(75024); 
// should return 60696.
sumFibs(75025); 
// should return 135721.