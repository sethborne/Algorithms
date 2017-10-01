function pairElement(inputString) {
    var sequenceString = [];
    inputString = inputString.toUpperCase();
    var splitInputString = inputString.split("");
    for(var i = 0; i < splitInputString.length; i += 1){
        var char = splitInputString[i];
        if(char == "G"){
            splitInputString[i] = ["G", "C"];
        }
        else if(char == "C"){
            splitInputString[i] = ["C", "G"];
        }
        else if(char == "A"){
            splitInputString[i] = ["A", "T"];
        }
        else if(char == "T"){
            splitInputString[i] = ["T", "A"];
        }        
    }
    console.log(splitInputString);
    inputString = splitInputString;
    return inputString;
}

pairElement("GCG");
// should return [["G","C"],["C","G"],["G","C"]]
pairElement("ATCGA");
// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG");
// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA");
// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
