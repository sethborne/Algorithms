function challenge(){
    console.log(1 + 2 + "3" + "4" + 5 + 6);
}

challenge();

function removeBlanks(inputString){
    stringNoSpace = inputString.split(" ");
    newString = stringNoSpace.join("");
    newString = newString.split(",")
    newString = newString.join("")
    console.log(newString);
}

removeBlanks("  Pl    ayTha  tF   u  nkyM  usi     c  ");

function getDigits(inputString){
    var newArray = [];
    splitInputString = inputString.split("");
    console.log(splitInputString);
    for(var i = 0; i < splitInputString.length; i += 1){
        numTest = isNaN(inputString[i]);
        console.log(numTest);
        if(numTest == false){
            newArray.push(inputString[i])
        }
    }
    numberArray = newArray.join("");
    console.log(newArray);
    console.log(numberArray);
    return numberArray;
}

getDigits("Os1a3y5w7h9a2t4?6!8?0")

function acronyms(inputString){
    var newArray = [];
    arrayInputString = inputString.split(" ");
    console.log(arrayInputString);
    for(var i = 0; i < arrayInputString.length; i += 1){
        if(arrayInputString[i]){
            newArray.push(arrayInputString[i][0].toUpperCase())
            // string += arrayInputString[i][0]
        }
    }
    // console.log(newArray);
    newString = newArray.join("");
    console.log(newString);
    // newStringUpper = newString.toUpperCase();
    // console.log(newStringUpper);
    return newString;
}

acronyms(" there's no free lunch - gotta pay yer way. ")

function countNonSpaces(inputString){
    // var newArray = [];
    var sum = 0;
    
    splitInputArray = inputString.split(" ");
    
    for(var i = 0; i < splitInputArray.length; i += 1){
        sum += splitInputArray[i].length;
    }
    console.log(splitInputArray);
    
    console.log(sum);
    return sum;
}

countNonSpaces("Honey pie, you are driving me crazy");

function removeShorterStrings(inputString, lengthVal){
    var tempVar;
    
    splitInputString = inputString.split(" ")
    console.log(splitInputString);
    for(var i = 0; i < splitInputString.length; i += 1){
        if(splitInputString[i].length <= lengthVal){
            console.log(`Loop: ${i} | I`);
            for(var j = i; j < splitInputString.length; j += 1){
                console.log(`Loop: ${j} | J`);
                tempVar = splitInputString[j];
                splitInputString[j] = splitInputString[j + 1]
            }
            console.log(splitInputArray);
            splitInputString.pop(splitInputString[splitInputString.length - 1])
            i -= 1;
        }
    }
    console.log(splitInputString);
    return splitInputString;
}

removeShorterStrings("Honey pie, you are driving me crazy", 4);