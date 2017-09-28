function reverseAStringBuiltIn(inputString){
    var splitInputString = inputString.split("");
    splitInputString.reverse();
    var finalString = splitInputString.join("");
    console.log(finalString);
    return finalString;
}

reverseAStringBuiltIn("This is A String to Reverse");

function reverseAStringArraySwap(inputString){
    var splitInputString = inputString.split("");
    var start = 0;
    var tempVar;
    var finalString = "";
    // from back
    for(var i = splitInputString.length -1; i > 0; i -= 1 ){
        if(i > start){
            tempVar = splitInputString[i];
            splitInputString[i] = splitInputString[start];
            splitInputString[start] = tempVar;
        }
        start += 1;
    }
    finalString = splitInputString.join("");
    console.log(finalString);
    return finalString;
}

reverseAStringArraySwap("An Even Better String To Test!")

function reverseStringPushToArray(inputString){
    var newArray = [];
    var splitInputString = inputString.split("");
    var finalString = "";
    for(var i = splitInputString.length - 1; i >= 0; i -= 1){
        newArray.push(splitInputString[i]);
    }
    finalString = newArray.join("");
    console.log(finalString);
    return finalString;
}

reverseStringPushToArray("This Should Go To The Array")