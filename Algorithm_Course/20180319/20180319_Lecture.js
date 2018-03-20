// function something(x){
//     if(x === 0){
//         return x;
//     }
//     x -= 1;
//     console.log("x: ", x);
//     // console.log("function(x): ", something(x));
//     return something(x);
// }

// console.log(something(10));

// function something(x){
//     console.log("something(x), x: ", x);
//     if(x > 0){
//         console.log("if(x > 0)", true);
//         x = x - 1;
//         something(x);
//     }
//     else {
//         console.log("if(x > 0)", false);
//     }
// }

// something(3);

function printValues(inputArray){
    if(inputArray.length === 0){
        return;
        console.log(inputArray);
    }
    console.log(inputArray.pop());
    return printValues(inputArray);
}

printValues([1, 2, 3, 4, 5])