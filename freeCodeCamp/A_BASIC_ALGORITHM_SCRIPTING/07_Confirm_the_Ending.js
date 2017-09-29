function confirmEnding2(inputString, endVal) {
    var endsWith;
    
    var splitInputString = inputString.split(" ");
    // console.log(splitInputString);
    
    if(splitInputString.length == 1){
        var splitInputStringWord = inputString.split("");
        // console.log(splitInputStringWord);
        if(splitInputStringWord[splitInputStringWord.length - 1] == endVal){
            endsWith = true;
        }
        else{
            endsWith = false;
        }
    }
    else{
        if(splitInputString[splitInputString.length - 1] == endVal){
            endsWith = true;
        }
        else{
            endsWith = false;
        }
    }
    console.log(endsWith);
    return endsWith;
}

confirmEnding2("Bastian", "n");
confirmEnding2("Connor", "n");
confirmEnding2("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding2("He has to give me a new name", "name");
confirmEnding2("Open sesame", "same") ;
confirmEnding2("Open sesame", "pen");
confirmEnding2("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");


function confirmEnding(inputString, endVal) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var endsWith;
    var splitInputString = inputString.split(" ");
    // console.log(splitInputString);
    if(splitInputString.length == 1){
        var joinString = splitInputString.join("");
        var indexLength = splitInputString[0].length - 1;
        var charVal = joinString.substr(indexLength);
        console.log(`charVal: ${charVal} | endVal: ${endVal}`);
        // console.log(charVal);
        if(charVal == endVal){
            console.log("are the same");
            endsWith = true;
        }
        else{
            endsWith = false;
        }
    }
    else{
        var lastWordVal = splitInputString[splitInputString.length - 1];
        console.log(`lastWordVal: ${lastWordVal} | endVal: ${endVal}`);
        if(lastWordVal == endVal){
            endsWith = true;
        }
        else if(lastWordVal.substring(lastWordVal.length - endVal.length) == endVal){
            endsWith = true;
        }
        else{
            endsWith = false;
        }
    }
    console.log(endsWith);
    return endsWith;
}
console.log("");
confirmEnding("Bastian", "n");
confirmEnding("Connor", "n");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same") ;
confirmEnding("Open sesame", "pen");
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");