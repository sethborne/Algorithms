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
    var open = {
        "{": "}",
        "[": "]",
        "(": ")"
    };
    var closed = {
        "}": true,
        "]": true,
        ")": true
    };
    var isValid = true;
    
    for(var i = 0; i < inputString.length; i += 1){
        var char = inputString[i];
        if(open[char]){
            stack.push(char);
            console.log(`At Loop: ${i} | closed array object key: ${char} | stack: ${stack}`);
        }
        // when you hit a closing char, this will always run.
        else if(closed[char]){
            // key of open array object
            var keyOpen = stack[stack.length - 1];
            var valueOpen = open[stack[stack.length - 1]];
            console.log(`At Loop: ${i} | closed array object key: ${char} | open array object value: ${valueOpen} | open array object key: ${keyOpen} | stack: ${stack}`);
            if(valueOpen === char){
                stack.pop();
                console.log(`At Loop: ${i} | post pop | stack value: ${valueOpen} popped | stack: ${stack}`);
            }
            else{
                isValid = false;
                // break;
            }
        }
    }
    console.log(stack.length);
    if(stack.length > 0){
        isValid = false;
    }
    console.log(`The String: ${inputString} | isValid: ${isValid} | stack: ${stack} | stackLength: ${stack.length}`);
    return isValid;
}

giveMeSpace();
// true
bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]");
giveMeSpace();
// false
bracesValid("D(i{a}l[ t]o)n{e");
giveMeSpace();
// false
bracesValid("A(1)s[O(n]0{t 0}k")
giveMeSpace();
// false
bracesValid("{[}]")

function bracesValid2(inputString){
    console.log(inputString);
    var pairs={
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    var stack=[]
    for(var i = 0; i < inputString.length; i += 1){
        if(inputString[i] in pairs){
            stack.push(inputString[i]);
            console.log(stack);
        }
        else {
            var current = stack.pop();
            if(pairs[current] !== inputString[i]){
                console.log("FALSE");
                return false
            }
        }
    }
    console.log(stack.length);
    return stack.length === 0
}
giveMeSpace();
// true
bracesValid2("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]");
giveMeSpace();
// false
bracesValid2("D(i{a}l[ t]o)n{e");
giveMeSpace();
// false
bracesValid2("A(1)s[O(n]0{t 0}k")
giveMeSpace();
// false
bracesValid2("{[}]")


function isPalindrome(inputString){
    splitInputString = inputString.split("");
    
    var start = 0;
    var half = Math.floor(splitInputString.length / 2);
    
    var isPalindrome = true;
    
    // console.log(half);
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

longestPalindrome("what up, daddy-o");
longestPalindrome("uh... not much");
longestPalindrome("Yikes! my favorite racecar erupted")

// function test(){
//     array = { 
//                 key1: "value1",
//                 key2: "value2"
//             }
//     array['key2'] = "simon"
//     array['key3'] = "hello"
    
//     array.key2 = "simon 3"
//     array.key4 = "worst"
    
//     console.log(array['key'+2]);
//     console.log(array);
    
//     var key2 = array.key2;
//     console.log(`Second: ${key2}`);
    
// }

// test()