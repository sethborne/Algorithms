function reverseString(inputString){
    splitInputString = inputString.split("");
    
    console.log(splitInputString);
    
    var tempVar;
    var start = 0;
    var end = splitInputString.length - 1;
    
    while(start < end){
        tempVar = splitInputString[end];
        splitInputString[end] = splitInputString[start];
        splitInputString[start] = tempVar;
        
        start += 1;
        end -=1;
    }
    
    newString = splitInputString.join("")
    // console.log(splitInputString);
    console.log(newString);
    return newString;
}

reverseString("thisisastring")