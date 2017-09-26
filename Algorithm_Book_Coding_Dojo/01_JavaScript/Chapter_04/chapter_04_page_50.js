function giveMeSpace(){
    console.log("                                                            ");
};

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
giveMeSpace();
reverseString("thisisastring")

function removeEvenLengthStrings(inputString){
    splitInputString = inputString.split(" ");
    for(var i = 0; i < splitInputString.length; i += 1){
        // console.log(splitInputString[i]);
        if(splitInputString[i].length <= 0){
            console.log("This is Zero");
        }
        else if(splitInputString[i] !== " " || splitInputString[i] !== ""){
            if(splitInputString[i].length > 0){    
                var atValue = splitInputString[i].length;
                // // var atValue = i.length;
                // console.log(atValue);
                if(atValue % 2 == 0 || atValue == 0){
                    // console.log("I'm Even");
                    for(var j = i; j < splitInputString.length; j += 1){
                        splitInputString[j] = splitInputString[j + 1];
                    }
                    splitInputString.pop[splitInputString[splitInputString.length - 1]];
                    splitInputString.length = splitInputString.length - 1;
                    j -= 1;
                }
            }
        }
        
    }
    console.log(splitInputString);
    console.log(splitInputString[2].length);
    return splitInputString;
}
giveMeSpace();
removeEvenLengthStrings("What Strings Should Get Deleted? I am Not Sure")
// how to handle the extra space?
removeEvenLengthStrings("What Strings Should Get Deleted?  I am Not Sure")

function integerToRomanNumeral(numVal){
    // account for:
    // M = 1000, CM = 900, D = 500, CD = 400, C = 100, XC = 90, L = 50, XL = 40, X = 10, IX = 9, V = 5, IV = 4, I = 1
    var romanString = ""
    var endSwitch = 0;
    var numValOrg = numVal;
    
    while(numVal > 0){
        if(numVal >= 1000){
            numVal -= 1000;
            romanString += "M";
            // console.log(romanString);
        }
        else if(numVal >= 900 && numVal < 1000){
            numVal -= 900;
            romanString += "CM";
            // console.log(romanString);
        }
        else if(numVal >= 500 && numVal < 899){
            numVal -= 500;
            romanString += "D";
            // console.log(romanString);
        }
        else if(numVal >= 400 && numVal < 500){
            numVal -= 400;
            romanString += "CD";
            // console.log(romanString);
        }
        else if(numVal >= 100 && numVal < 400){
            numVal -= 100;
            romanString += "C"
            // console.log(romanString);
        }
        else if(numVal >= 90 && numVal < 100){
            numVal -= 90;
            romanString += "XC";
            // console.log(romanString);
        }
        else if(numVal >= 50 && numVal < 90){
            numVal -= 50;
            romanString += "L";
            // console.log(romanString);
        }
        else if(numVal >= 40 && numVal < 50){
            numVal -= 40;
            romanString += "XL";
            // console.log(romanString);
        }
        else if(numVal >= 10 && numVal < 40){
            numVal -= 10;
            romanString += "X"
            // console.log(romanString);
        }
        else if(numVal >= 9 && numVal < 10){
            numVal -= 9;
            romanString += "IX";
            // console.log(romanString);
        }
        else if(numVal >= 5 && numVal < 9){
            numVal -= 5;
            romanString += "V";
            // console.log(romanString);
        }
        else if(numVal >= 4 && numVal < 5){
            numVal -= 4;
            romanString += "IV";
            // console.log(romanString);
        }
        else if( numVal >= 1 && numVal < 4){
            numVal -= 1;
            romanString += "I";
            // console.log(romanString);
        }
    }
    
    // for(var i = 0; i < 4; i += 1){
    //     romanString += "M"
    // }
    console.log(numValOrg + " - " + romanString);
}

integerToRomanNumeral(4)
integerToRomanNumeral(9)
integerToRomanNumeral(14)
integerToRomanNumeral(19)
integerToRomanNumeral(44)
integerToRomanNumeral(49)
integerToRomanNumeral(144)
integerToRomanNumeral(149)
integerToRomanNumeral(1144)
integerToRomanNumeral(1149)
integerToRomanNumeral(1901)
integerToRomanNumeral(1801)
integerToRomanNumeral(1501)
integerToRomanNumeral(1401)
integerToRomanNumeral(3888)
integerToRomanNumeral(4001)

function romanNumeralToInteger(inputString){
    var integer = 0;
    splitInputString = inputString.split("");
    console.log(splitInputString);
    for(var i = splitInputString.length - 1; i >= 0; i -= 1){
        // console.log(`Loop: ${i} | Sum: ${integer}`);
        if(splitInputString[i] == "M" && splitInputString[i - 1] != "C"){
            integer += 1000;
            splitInputString.pop[i];
            splitInputString.length -= 1;
        }
        else if(splitInputString[i] == "M" && splitInputString[i - 1] == "C"){
            integer += 900;
            splitInputString.pop[i]
            splitInputString.pop[i - 1]
            splitInputString.length -= 2;
        }
        else if(splitInputString[i] == "D" && splitInputString[i - 1] != "C"){
            integer += 500;
            splitInputString.pop[i];
            splitInputString.length -= 1;
        }
        else if(splitInputString[i] == "D" && splitInputString[i - 1] == "C"){
            integer += 400;
            splitInputString.pop[i]
            splitInputString.pop[i - 1]
            splitInputString.length -= 2;
        }
        else if(splitInputString[i] == "C" && splitInputString[i - 1] != "X"){
            integer += 100;
            splitInputString.pop[i];
            splitInputString.length -= 1;
        }
        else if(splitInputString[i] == "C" && splitInputString[i - 1] == "X"){
            integer += 90;
            splitInputString.pop[i]
            splitInputString.pop[i - 1]
            splitInputString.length -= 2;
        }
        else if(splitInputString[i] == "L" && splitInputString[i - 1] != "X"){
            integer += 50;
            splitInputString.pop[i];
            splitInputString.length -= 1;
        }
        else if(splitInputString[i] == "L" && splitInputString[i - 1] == "X"){
            integer += 40;
            splitInputString.pop[i]
            splitInputString.pop[i - 1]
            splitInputString.length -= 2;
        }
        else if(splitInputString[i] == "X" && splitInputString[i - 1] != "I"){
            integer += 10;
            splitInputString.pop[i];
            splitInputString.length -= 1;
        }
        else if(splitInputString[i] == "X" && splitInputString[i - 1] == "I"){
            integer += 9;
            splitInputString.pop[i]
            splitInputString.pop[i - 1]
            splitInputString.length -= 2;
        }
        else if(splitInputString[i] == "V" && splitInputString[i - 1] != "I"){
            integer += 5;
            splitInputString.pop[i];
            splitInputString.length -= 1;
        }
        else if(splitInputString[i] == "V" && splitInputString[i - 1] == "I"){
            integer += 4;
            splitInputString.pop[i]
            splitInputString.pop[i - 1]
            splitInputString.length -= 2;
        }
        else if(splitInputString[i] == "I"){
            integer += 1;
            splitInputString.pop[i]
            splitInputString.length -= 1;
        }
        if(i == 0){
            console.log(`Loop: ${i} | Sum: ${integer}`);
        }
        // console.log(integer);
    }
    console.log(integer);
}

romanNumeralToInteger("IV");
romanNumeralToInteger("IX");
romanNumeralToInteger("XIV");
romanNumeralToInteger("XIX");
romanNumeralToInteger("XLIV");
romanNumeralToInteger("XLIX");
romanNumeralToInteger("CXLIV");
romanNumeralToInteger("CXLIX");
romanNumeralToInteger("MCXLIV");
romanNumeralToInteger("MCXLIX")
romanNumeralToInteger("MCMI");
romanNumeralToInteger("MDCCCI");
romanNumeralToInteger("MDI");
romanNumeralToInteger("MCDI");
romanNumeralToInteger("MMMDCCCLXXXVIII");
romanNumeralToInteger("MMMMI");
// romanNumeralToInteger("");

