function mutation2(inputArray) {
    
    for(var l = 0; l < inputArray.length; l += 1){
        inputArray[l] = inputArray[l].toLowerCase();
    }
    var splitInputArrayOne = inputArray[0].split("");
    console.log(splitInputArrayOne);
    var splitInputArrayTwo = inputArray[1].split("");
    console.log(splitInputArrayTwo);
    var checkArray = [];
    var countTrue = 0;
    var boolMatchAll;
    for(var j = 0; j < splitInputArrayTwo.length; j += 1){
        // var firstArrayContainsSecondArrayChar = false;
        for(var i = 0; i < splitInputArrayOne.length; i +=1){
            if(splitInputArrayTwo[j] == splitInputArrayOne[i]){
                // if(checkArray.length > 0){
                    var exists = false;
                    for(var e = 0; e < checkArray.length; e += 1){
                        if(splitInputArrayTwo[j] == checkArray[e]){
                            console.log("exists in check array");
                            exists = true;
                        }
                    }
                    if(exists == false){
                        checkArray.push(splitInputArrayTwo[j]);
                        console.log("doesn't exist - pushed to array");
                        console.log(checkArray);
                        countTrue += 1;
                    }
                    else{
                        console.log("value already exists");
                    }
                // }
                // else{
                    // checkArray.push(splitInputArrayTwo[j]);
                    // console.log("Just First");
                    // countTrue += 1;
                // }
            }
            else{
                console.log(`In J Loop: ${j} | At I Loop ${i} | J char: ${splitInputArrayTwo[j]} DOES NOT MATCH I char: ${splitInputArrayOne[i]}`);
            }
        }
    }
    if(countTrue === splitInputArrayTwo.length){
        boolMatchAll = true;
    }
    else{
        boolMatchAll = false;
    }
    console.log(boolMatchAll);
    console.log(countTrue);
    console.log(inputArray);
    return boolMatchAll;
}

mutation2(["hello", "hey"]);
mutation2(["hello", "Hello"])
mutation2(["floor", "for"])


function mutation(inputArray) {
    for(var l = 0; l < inputArray.length; l += 1){
        inputArray[l] = inputArray[l].toLowerCase();
    }
    var inputArrayValueOne = inputArray[0];
    var inputArrayValueTwo = inputArray[1].split("");
    
    var findAll = true;
    
    for(var j = 0; j < inputArrayValueTwo.length; j += 1){
        var checkValue = inputArrayValueOne.indexOf(inputArrayValueTwo[j]);
        console.log(checkValue);
        if(checkValue == -1){
            findAll = false;
        }
    }
    
    console.log(findAll);
    return findAll;
}
console.log("            ");
mutation(["hello", "hey"]);
mutation(["hello", "Hello"])
mutation(["floor", "for"])