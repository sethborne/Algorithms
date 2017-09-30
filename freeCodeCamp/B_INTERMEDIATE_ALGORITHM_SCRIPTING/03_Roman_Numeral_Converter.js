function convertToRoman(numValInt) {
    var romanString = "";
    
    while(numValInt > 0){
        if(numValInt >= 1000){
            numValInt -= 1000;
            romanString += "M";
        }
        else if(numValInt >= 900 && numValInt < 1000){
            numValInt -= 900;
            romanString += "CM";
        }
        else if(numValInt >= 500 && numValInt < 900){
            numValInt -= 500;
            romanString += "D";
        }
        else if(numValInt >= 400 && numValInt < 500){
            numValInt -= 400;
            romanString += "CD";
        }
        else if(numValInt >= 100 && numValInt < 400){
            numValInt -= 100;
            romanString += "C";
        }
        else if(numValInt >= 90 && numValInt < 100){
            numValInt -= 90;
            romanString += "XC";
        }
        else if(numValInt >= 50 && numValInt < 90){
            numValInt -= 50;
            romanString += "L";
        }
        else if(numValInt >= 40 && numValInt < 50){
            numValInt -= 40;
            romanString += "XL";
        }
        else if(numValInt >= 10 && numValInt < 40){
            numValInt -= 10;
            romanString += "X";
        }
        else if(numValInt >= 9 && numValInt < 10){
            numValInt -= 9;
            romanString += "IX";
        }
        else if(numValInt >= 5 && numValInt < 9){
            numValInt -= 5;
            romanString += "V";
        }
        else if(numValInt >= 4 && numValInt < 5){
            numValInt -= 4;
            romanString += "IV";
        }
        else if(numValInt >= 1 && numValInt < 4){
            numValInt -= 1;
            romanString += "I";
        }
    }
    console.log(romanString);
    // console.log(numValInt);
    return numValInt;
}

convertToRoman(2);
convertToRoman(3);
convertToRoman(4);
convertToRoman(5);
convertToRoman(9);
convertToRoman(12);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(45);
convertToRoman(68);
convertToRoman(83);
convertToRoman(97);
convertToRoman(99);
convertToRoman(500);
convertToRoman(501);
convertToRoman(649);
convertToRoman(798);
convertToRoman(891);
convertToRoman(1000);
convertToRoman(1004);
convertToRoman(1006);
convertToRoman(1023);
convertToRoman(2014);
convertToRoman(3000);
convertToRoman(3888);
convertToRoman(3999);