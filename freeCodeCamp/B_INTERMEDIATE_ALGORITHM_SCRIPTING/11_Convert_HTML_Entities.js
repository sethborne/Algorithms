function convertHTML(inputString) {
    // &colon;&rpar;
    var splitInputString = inputString.split("");
    console.log(splitInputString);
    for(var i = 0; i < splitInputString.length; i += 1){
        if(splitInputString[i] === "&"){
            splitInputString[i] = "&amp;";
        }
        else if(splitInputString[i] === "<"){
            splitInputString[i] = "&lt;";
        }
        else if(splitInputString[i] === ">"){
            splitInputString[i] = "&gt;";
        }
        else if(splitInputString[i] === "'"){
            splitInputString[i] = "&apos;";
        }
        else if(splitInputString[i] === '"'){
            splitInputString[i] = "&quot;";
        }
    }
    console.log(splitInputString);
    inputString = splitInputString.join("");
    console.log(inputString);
    return inputString;
}

convertHTML("Dolce & Gabbana");
// should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos");
// should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve");
// should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"');
// should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List");
// should return Shindler&​apos;s List.
convertHTML("<>");
// should return &​lt;&​gt;.
convertHTML("abc");
// should return abc.