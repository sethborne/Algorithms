function giveMeSpace(){
    console.log("                                                    ");
}

function parensValid(inputString){
    var inc = 0;
    var length = inputString.length;
    var checkArray = [];
    var isValid = false;
    
    while(inc < length){
        var val = inputString[inc];
        console.log(`At Loop: ${inc} | Length: ${length} | isValid: ${isValid}`);
        if(val == "("){
            checkArray.push(val);
            console.log(`At If Loop: ${inc} | checkArray: ${checkArray}`);
        }
        else if(val == ")"){
            if(checkArray.length){
                console.log(`At Else If Loop A: ${inc} | checkArray: ${checkArray}`);
                checkArray.pop();
                console.log(`At Else If Loop B: ${inc} | checkArray: ${checkArray}`);
            }
        }
        inc += 1;
    }
    console.log(checkArray.length);
    if(checkArray.length > 0){
        isValid = false;
        console.log(isValid);
        return isValid;
    }
    isValid = true;
    console.log(isValid);
    return isValid;
}
giveMeSpace();
parensValid("Y(3(p)p(3)r)s");
giveMeSpace();
parensValid("N(0(p)3");
giveMeSpace();
parensValid("N(0)t )0(k");
giveMeSpace();
parensValid(")()(")


function bracesValid(inputString){
    var stack = [];
    var size = 0;
    var beginCap = ["(", "[", "{"];
    var endCap = [")", "]", "}"];
    for(var i = 0; i < inputString.length; i += 1){
        
    }
}
giveMeSpace();


function isPalindrome(inputString){
    splitInputString = inputString.split("");
    
    var start = 0;
    var half = Math.floor(splitInputString.length / 2);
    
    var isPalindrome = true;
    
    console.log(half);
    for(var end = splitInputString.length - 1; end > start; end -= 1){
        // console.log(`Loop: ${end}: End: ${half}: Start: ${start}`);
        // console.log(splitInputString[end]);
        // console.log(splitInputString[start]);
        if(splitInputString[start] !== splitInputString[end]){
            isPalindrome = false;
            break;
        }
        else {
            
            start += 1;
        }
    }
    if(isPalindrome == false){
        console.log(`The String: ${inputString}, is a not a Palindrome`);
    }
    else{
        console.log(`The String: ${inputString}, is a Palindrome`);
    }
    return isPalindrome;
}
giveMeSpace();
isPalindrome("a x a")
isPalindrome("start");
isPalindrome("poop");
isPalindrome("rac e car")
isPalindrome("Racecar")

function longestPalindrome(inputString){
    
}