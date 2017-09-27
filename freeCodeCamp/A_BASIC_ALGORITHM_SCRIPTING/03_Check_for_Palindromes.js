function palindrome(inputString){
    var newArray = [];
    var splitInputString = inputString.split("");
    var finalString = "";
    var start = 0; 
    for(var i = 0; i < splitInputString.length; i += 1){
        if(splitInputString[i] != " " && splitInputString[i] != "" && splitInputString[i] != "," && splitInputString[i] != "." && splitInputString[i] != "_" && splitInputString[i] != "(" && splitInputString[i] != ")" && splitInputString[i] != ":" && splitInputString[i] != "/" && splitInputString[i] != "\\" && splitInputString[i] != "-"){
            newArray.push(splitInputString[i]);
        }
    }
    // console.log(newArray);
    finalString = newArray.join("");
    finalString = finalString.toLowerCase();
    var isPalindrome = true;
    
    var end = finalString.length - 1;
    
    while(end > start){
        // console.log(`At Loop ${end}: end: ${finalString[end]} start: ${finalString[start]}`);
        if(finalString[end] == finalString[start]){
            // console.log(`At Loop ${end}: chars equal`);
            isPalindrome = true;
        }
        else{
            // console.log(`At Loop ${end}: chars not equal`);
            isPalindrome = false;
            break;
        }
        start += 1;
        end -= 1;
    }
    console.log(finalString);
    console.log(isPalindrome);
    return isPalindrome;
}

palindrome("eye")
palindrome("race car")
palindrome("A man, a plan, a canal. Panama")
palindrome("1 eye for of 1 eye.")