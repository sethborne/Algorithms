function rot13(inputString) { // LBH QVQ VG!
    var charArray = "ABCEDFGHIJKLMNOPQRSTUVWXYZ!?. ";
    var locChar = charArray.charCodeAt(29);
    // console.log(locChar);
    // A = 65 Z = 90; ! = 33, ? = 63, . = 43, space = 32
    inputString = inputString.toUpperCase();
    var splitInputString = inputString.split("");
    var newArray = [];
    for(var i = 0; i < inputString.length; i += 1){
        var indexChar = inputString.charCodeAt(i);
        // console.log(`indexChar: ${indexChar}`);
        var revIndexChar = 0;
        if(indexChar >= 78 && indexChar <= 90){
            revIndexChar = indexChar - 13;
            // console.log(revIndexChar);
        }
        else if(indexChar >= 65 && indexChar < 78){
            revIndexChar = indexChar + 13;
        }
        else {
            revIndexChar = indexChar;
        }
        newArray.push(revIndexChar);
        // console.log(newArray);
    }
    var revInputString = "";
    for(var j = 0; j < newArray.length; j += 1){
        revInputString += String.fromCharCode(newArray[j]);
    }
    revInputString = revInputString.split("-");
    revInputString = revInputString.join(" ");
    // console.log(revInputString);
    // console.log(inputString);
    return revInputString;
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
// rot13("test upper case");