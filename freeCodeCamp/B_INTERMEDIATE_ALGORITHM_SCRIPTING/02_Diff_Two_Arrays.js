function diffArray(inputArrayOne, inputArrayTwo) {
    var diffArray = [];
    // Same, same; but different.
    var doesContain = false;
    for(var a = 0; a < inputArrayOne.length; a += 1){
        for(var b = 0; b < inputArrayTwo.length; b += 1){
            console.log(`inputArrayOne[a]: ${inputArrayOne[a]} | inputArrayOne[b]: ${inputArrayOne[b]}`);
            if(inputArrayOne[a] === inputArrayTwo[b]){
                doesContain = true;
                break;
            }
            else{
                doesContain = false;
            }
        }
        console.log(doesContain);
        if(doesContain){
        
        }
        else{
            diffArray.push(inputArrayOne[a])
        }
    }
    for(var b = 0; b < inputArrayTwo.length; b += 1){
        for(var a = 0; a < inputArrayOne.length; a += 1){
            console.log(`inputArrayOne[a]: ${inputArrayOne[a]} | inputArrayOne[b]: ${inputArrayOne[b]}`);
            if(inputArrayOne[a] === inputArrayTwo[b]){
                doesContain = true;
                break;
            }
            else{
                doesContain = false;
            }
        }
        console.log(doesContain);
        if(doesContain){
        
        }
        else{
            diffArray.push(inputArrayTwo[b])
        }
    }
    console.log(diffArray);
    return diffArray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);