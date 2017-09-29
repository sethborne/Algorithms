function repeatStringNumTimes(inputString, numValRepeat) {
    // repeat after me
    var repeatString = "";
    for(var i = 0; i < numValRepeat; i += 1){
        repeatString += inputString;
    }
    console.log(repeatString);
    return repeatString;
}

repeatStringNumTimes("abc", 3);