function slasher(inputArray, numValStart) {
    // it doesn't always pay to be first
    var slashArray = [];
    if(numValStart >= inputArray.length){
        console.log(`Can't Chop ${numValStart} from the array, Value Exceeds Array Length`);
        return slashArray;
    }
    else{
        for(var i = numValStart; i < inputArray.length; i += 1){
            slashArray.push(inputArray[i]);
        }
        console.log(slashArray);
        return slashArray;
    }
}

slasher([1, 2, 3], 2);