function translatePigLatin(inputString) {
    var splitInputString = inputString.split("");
    var isVowel;
    //swap
    var firstChar = splitInputString[0];
    if(firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u"){
        console.log("Starts with a Vowel");
        isVowel = true;
    }
    if(isVowel){
        splitInputString.push("w");
        splitInputString.push("a");
        splitInputString.push("y");
        // console.log(splitInputString);
    }
    else{
        var foundFirstVowel = false;
        var vowelIndex;
        for(var v = 0; v < splitInputString.length - 1; v += 1){
            if(foundFirstVowel == false){
                // console.log(v);
                if(splitInputString[v] === "a" || splitInputString[v] === "e" || splitInputString[v] === "i" || splitInputString[v] === "o" || splitInputString[v] === "u"){
                    vowelIndex = v;
                    console.log(vowelIndex);
                    foundFirstVowel = true;
                }
            }
        }
        var tempCharArray = [];
        var i = 0;
        var count = 0;
        while(count < vowelIndex){
            tempCharArray.push(splitInputString[0]);
            console.log(splitInputString[0]);
            count += 1;
            for(var j = 0; j < splitInputString.length; j += 1){
                splitInputString[j] = splitInputString[j + 1];
            }
            splitInputString.pop(splitInputString[splitInputString.length - 1])
        }
        console.log(tempCharArray);
        for(var n = 0; n < tempCharArray.length; n += 1){
            splitInputString.push(tempCharArray[n]);
        }
        splitInputString.push("y");
        splitInputString.push("a");
        console.log(splitInputString);
    }
    inputString = splitInputString.join("");
    console.log(inputString);
    return inputString;
}

translatePigLatin("california") 
// should return "aliforniacay".
translatePigLatin("paragraphs") 
// should return "aragraphspay".
translatePigLatin("glove") 
// should return "oveglay".
translatePigLatin("algorithm") 
// should return "algorithmway".
translatePigLatin("eight") 
// should return "eightway".