function titleCase(inputString) {
    inputString = inputString.toLowerCase();
    var tempString = "";
    var splitInputString = inputString.split(" ");
    for(var i = 0; i < splitInputString.length; i += 1){
        var capString = splitInputString[i].split("");
        // console.log(capString);
        capString[0] = capString[0].toUpperCase();
        finalCapString = capString.join("");
        splitInputString[i] = finalCapString;
    }
    finalString = splitInputString.join(" ");
    console.log(finalString);
    return finalString;
}

titleCase("I'm a little Tea Pot");