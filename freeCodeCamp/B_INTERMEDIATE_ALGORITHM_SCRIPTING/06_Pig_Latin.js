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
        while(i < vowelIndex){
            i += 1;
            // if(i < vowelIndex){
                tempCharArray.push(splitInputString[i]);
                console.log(splitInputString[i]);
            // }
            for(var j = 0; j < splitInputString.length; j += 1){
                splitInputString[j] = splitInputString[j + 1];
            }
            splitInputString.pop(splitInputString[splitInputString.length - 1])
            // splitInputString[i] = splitInputString[i + 1];
            // console.log(splitInputString[i]);
            // count += 1;
        }
        console.log(tempCharArray);
        // splitInputString[splitInputString.length - 1] = firstChar;
        // splitInputString.push("a");
        // splitInputString.push("y");
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