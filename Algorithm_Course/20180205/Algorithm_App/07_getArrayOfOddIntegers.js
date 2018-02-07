function getArrayOfOddIntegers(min, max){
    var min = min || 1;
    var max = max || 50;
    var arrayOfOdds = [];
    for(let i = min; i < max + 1; i += 1){
        if(i % 2 === 1){
            arrayOfOdds.push(i);
        }
    }
    console.log(arrayOfOdds);
    return arrayOfOdds;
}

getArrayOfOddIntegers();
getArrayOfOddIntegers(1, 100);
getArrayOfOddIntegers(50, 100);