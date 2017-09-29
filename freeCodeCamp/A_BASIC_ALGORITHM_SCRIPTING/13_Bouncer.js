function bouncer(inputArray) {
    // Don't show a false ID to this bouncer.
    var truthArray = [];
    var falsyArray = [];
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i]){
            truthArray.push(inputArray[i]);
        }
        else{
            falsyArray.push(inputArray[i]);
        }
    }
    console.log(truthArray);
    console.log(falsyArray);
    return truthArray;
}

bouncer([7, "ate", "", false, 9]);