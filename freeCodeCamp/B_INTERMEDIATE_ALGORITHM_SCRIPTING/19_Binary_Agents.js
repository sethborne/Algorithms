function binaryAgent(inputString) {
    var splitInputString = inputString.split(" ");
    console.log(splitInputString);
    // 0 1 0 0 0 0 0 1 - length 8, end index 7;
    var convertToIntegerArray = [];
    for(let w = 0; w < splitInputString.length; w += 1){
        var charAtValue = 0;
        var charTemp = "";
        // console.log(splitInputString[w]);
        for(let char = splitInputString[w].length - 1; char >= 0; char -= 1){
            // console.log(splitInputString[w][char]);
            if(char == 7 && splitInputString[w][char] == 1){
                charAtValue += 1;
            }
            else if(char == 6 && splitInputString[w][char] == 1){
                charAtValue += 2;
            }
            else if(char == 5 && splitInputString[w][char] == 1){
                charAtValue += 4;
            }
            else if(char == 4 && splitInputString[w][char] == 1){
                charAtValue += 8;
            }
            else if(char == 3 && splitInputString[w][char] == 1){
                charAtValue += 16;
            }
            else if(char == 2 && splitInputString[w][char] == 1){
                charAtValue += 32;
            }
            else if(char == 1 && splitInputString[w][char] == 1){
                charAtValue += 64;
            }
            else if(char == 0 && splitInputString[w][char] == 1){
                charAtValue += 128;
            }
        }
        // console.log(String.fromCharCode(charAtValue));
        char = String.fromCharCode(charAtValue);
        convertToIntegerArray.push(char);
    }
    console.log(convertToIntegerArray);
    inputString = convertToIntegerArray.join("");
    console.log(inputString);
    return inputString;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") 
// should return "Aren't bonfires fun!?"

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") 
// should return "I love FreeCodeCamp!"