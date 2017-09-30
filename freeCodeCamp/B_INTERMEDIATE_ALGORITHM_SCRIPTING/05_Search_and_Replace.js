function myReplace(inputString, wordFind, wordReplace) {
    var splitInputString = inputString.split(" ");
    console.log(splitInputString);
    // contains
    var stringContains = false;
    var wordFoundAtIndex;
    for(var i = 0; i < splitInputString.length; i += 1){
        if(wordFind == splitInputString[i]){
            stringContains = true;
            wordFoundAtIndex = i;
            // console.log(`Loop I: ${i} | wordFind: ${wordFind} | wordFoundAtIndex: ${wordFoundAtIndex} | splitInputString[i]: ${splitInputString[i]}`);
        }
    }
    if(!stringContains){
        console.log(`The Word You are Trying to Find is Not Contained in the String Passed as a Parameter`);
    }
    // isCaps
    var isCaps;
    var wordFindChar = wordFind.charAt(0);
    // console.log(wordFindChar);
    var wordFindCharUpper = wordFindChar.toUpperCase();
    var wordFindCharLower = wordFindChar.toLowerCase();
    if(wordFindChar === wordFindCharUpper){
        isCaps = true; 
    }
    else if(wordFindChar === wordFindCharLower){
        isCaps = false;
    }
    // console.log(isCaps);
    // if Caps - Cap word to replace
    var splitStringWordReplace = wordReplace.split("");
    if(isCaps){
        splitStringWordReplace[0] = wordReplace.charAt(0).toUpperCase();
        // console.log(splitStringWordReplace);
        // console.log(wordReplaceVar);
        wordReplace = splitStringWordReplace.join("");
        // console.log(wordReplace);
    }
    // swap
    if(stringContains){
        splitInputString[wordFoundAtIndex] = wordReplace;
    }
    console.log(splitInputString);
    inputStringRev = splitInputString.join(" ");
    console.log(inputStringRev);
    return inputStringRev;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



myReplace("Let us go to the store", "store", "mall") 
// should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") 
// should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") 
// should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") 
// should return "Let us get back to more Algorithms".