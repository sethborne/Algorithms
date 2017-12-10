// --- Day 7: Recursive Circus ---

// Wandering further through the circuits of the computer, you come upon a tower of programs that have gotten themselves into a bit of trouble. A recursive algorithm has gotten out of hand, and now they're balanced precariously in a large tower.

// One program at the bottom supports the entire tower. It's holding a large disc, and on the disc are balanced several more sub-towers. At the bottom of these sub-towers, standing on the bottom disc, are other programs, each holding their own disc, and so on. At the very tops of these sub-sub-sub-...-towers, many programs stand simply keeping the disc below them balanced but with no disc of their own.

// You offer to help, but first you need to understand the structure of these towers. You ask each program to yell out their name, their weight, and (if they're holding a disc) the names of the programs immediately above them balancing on that disc. You write this information down (your puzzle input). Unfortunately, in their panic, they don't do this in an orderly fashion; by the time you're done, you're not sure which program gave which information.

// For example, if your list is the following:

// pbga (66)
// xhth (57)
// ebii (61)
// havc (66)
// ktlj (57)
// fwft (72) -> ktlj, cntj, xhth
// qoyq (66)
// padx (45) -> pbga, havc, qoyq
// tknk (41) -> ugml, padx, fwft
// jptl (61)
// ugml (68) -> gyxo, ebii, jptl
// gyxo (61)
// cntj (57)
// ...then you would be able to recreate the structure of the towers that looks like this:

//                 gyxo (61)
//               /     
//          ugml(68) - ebii (61)
//        /      \     
//       |         jptl (61)
//       |        
//       |         pbga (66)
//      /        /
// tknk(41) --- padx(45) - havc (66)
//      \        \
//       |         qoyq (66)
//       |             
//       |         ktlj (57)
//        \      /     
//          fwft(72) - cntj (57)
//               \     
//                 xhth (57)
// In this example, tknk is at the bottom of the tower (the bottom program), and is holding up ugml, padx, and fwft. Those programs are, in turn, holding up other programs; in this example, none of those programs are holding up any other programs, and are all the tops of their own towers. (The actual tower balancing in front of you is much larger.)

// Before you're ready to help them, you need to make sure your information is correct. What is the name of the bottom program?

var fs = require('fs');
var arrayTempValues = fs.readFileSync('07_Day.txt').toString().split('\r\n');

console.log(arrayTempValues);

function processArray(inputArray) {
    
    let processArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        let tempLine = [];
        //process everything before the first space
        tempLine.push(inputArray[i].substr(0, inputArray[i].indexOf(' ')));
        // get number Value
        let regexParens = /\(([^)]+)\)/;
        let numberValueRegex = regexParens.exec(inputArray[i]);
        let numberValue = Number(numberValueRegex[1]);
        tempLine.push(numberValue)
        console.log(tempLine);
        // get children
        var childrenPreProcess = inputArray[i].substr(inputArray[i].indexOf('>'));
        // console.log(inputArray[i].substr(inputArray[i].indexOf('>')));
        if(childrenPreProcess.length < 2){
            // console.log("No Children");
        }
        else{
            // console.log(childrenPreProcess);
            var children = childrenPreProcess.substring(2)
            let tempArray = [];
            children = children.split(', ');
            // console.log(children);
            tempLine.push(children);
        }
        // tempLine.push
        processArray.push(tempLine)
    }
    console.log("PA");
    console.log(processArray);
    return processArray;
}

let processedArray = processArray(arrayTempValues);
console.log("====");
console.log(processedArray);

function findRoot(inputArray){
    // get an array, make a new array with names that have children
    let arrayOfNamesWithChildren = [];
    for(let n = 0; n < inputArray.length; n += 1){
        if(inputArray[n].length === 3){
            arrayOfNamesWithChildren.push(inputArray[n]);
        }
    }
    console.log(arrayOfNamesWithChildren);
    // from this array, make a name array, make a child array (don't allow duplicates)
    let arrayOfNames = [];
    let arrayOfChildren = [];
    for(let a = 0; a < arrayOfNamesWithChildren.length; a += 1){
        if(arrayOfNames.indexOf(arrayOfNamesWithChildren[a][0] === -1)){
            arrayOfNames.push(arrayOfNamesWithChildren[a][0])
        }
        for(let c = 0; c < arrayOfNamesWithChildren[a][2].length; c += 1){
            // console.log("----");
            // console.log(arrayOfNamesWithChildren[a][2][c]);
            if(arrayOfChildren.indexOf(arrayOfNamesWithChildren[a][2][c] === -1)){
                arrayOfChildren.push(arrayOfNamesWithChildren[a][2][c])
            }
        }
        // console.log(arrayOfNamesWithChildren[a][2][1]);
    }
    console.log("names");
    console.log(arrayOfNames);
    console.log("children");
    console.log(arrayOfChildren);
    // compare two arrays
    let rootName = arrayOfNames.filter( (name) => {return arrayOfChildren.indexOf(name) === -1})
    console.log(rootName);
}

let root = findRoot(processedArray)