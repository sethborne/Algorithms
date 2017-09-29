function truncateString(inputString, numIndexSlice) {
    // Clear out that junk in your trunk
    var slicedString;
    if(numIndexSlice <= 3){
        slicedString = inputString.slice(0, numIndexSlice);
        //
        slicedString += "...";
    }
    else if(numIndexSlice >= inputString.length){
        slicedString = inputString;
    }
    else{
        slicedString = inputString.slice(0, numIndexSlice - 3);
        slicedString += "...";
    }
    console.log(slicedString);
    return slicedString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2)