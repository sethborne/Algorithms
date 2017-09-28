// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(inputString) {
    var maxWorldLength = -Infinity;
    var splitInputString = inputString.split(" ");
    
    for(var i = 0; i < splitInputString.length; i += 1){
        if(splitInputString[i].length > maxWorldLength){
            maxWorldLength = splitInputString[i].length;
        }
    }
    console.log(maxWorldLength);
    return maxWorldLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");