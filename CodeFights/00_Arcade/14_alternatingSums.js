function alternatingSums(inputArray) {
    let returnSumArray = [0, 0];
    for(let i = 0; i < inputArray.length; i += 1){
        if(i % 2 === 0){
            returnSumArray[0] += inputArray[i]
        }
        else{
            returnSumArray[1] += inputArray[i]
        }
    }
    return returnSumArray;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));