function fearNotLetter(inputString) {
    var checkString = "abcdefghijklmnopqrstuvwxyz";
    inputString = inputString.toLowerCase();
    var startCheckIndex;
    var endCheckIndex;
    var lastIndex = inputString.length - 1;
    var testStart = inputString.charAt(0);
    var endStart = inputString.charAt(inputString.length - 1);
    
    for(var c = 0; c < checkString.length; c += 1){
        // console.log(c);
        if(inputString.charAt(0) == checkString.charAt(c)){
            startCheckIndex = c;
        }
        else if(inputString.charAt(lastIndex) == checkString.charAt(c)){
            endCheckIndex = c;
        }
    }
    var missingLetter = false;
    var missingLetterValue = "";
    for(var m = 0; m < inputString.length; m += 1){
        if(checkString.charAt(startCheckIndex) !== inputString.charAt(m)){
            missingLetter = true;
            missingLetterValue = checkString.charAt(startCheckIndex);
        }
        else{
            // console.log("Equal");
            startCheckIndex += 1;
        }
    }
    console.log(missingLetter);
    console.log(missingLetterValue);
    if(missingLetter){
        return missingLetterValue;
    }
    else {
        return undefined;
    }
}

fearNotLetter("abce");
// should return "d".
fearNotLetter("abcdefghjklmno");
// should return "i".
fearNotLetter("bcd");
// should return undefined.
fearNotLetter("yz");
// should return undefined.