function destroyer(inputArray) {
    // Remove all the values
    var arg = arguments;
    console.log(arg);
    return inputArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



















function destroyer2(inputArray) {
    // Remove all the values
    var arg = arguments;
    var push = 0;
    var nopush = 0;
    console.log(arg);
    for(var j = 1; j < arg.length; j += 1){
        for(var i = 0; i < inputArray.length; i += 1){
            if(inputArray[i] == arg[j]){
                nopush += 1;
            }
            else{
                push += 1;
            }
        }
    }
    console.log(nopush);
    console.log(push);
    return inputArray;
}
console.log("");
destroyer2([1, 2, 3, 1, 2, 3], 2, 3);
