function giveMeSpace(){
    console.log("                                                         ");
}

function threesAndFives(numValMin, numValMax){
    var sum = 0;
    for(var i = numValMin; i < numValMax + 1; i += 1){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(`${i} is divisible by 15`);
        }
        else if(i % 3 == 0 || i % 5 == 0){
            if(i % 3 == 0){
                // console.log(`${i} is divisible by 3`);
                sum += i;
                // console.log(sum);
            }
            else{
                // console.log(`${i} is divisible by 5`);
                sum += i;
                // console.log(sum);
            }
        }
    }
    console.log(sum);
}
giveMeSpace();
threesAndFives(1, 15);
threesAndFives(1, 30);

function messyMath(numValMin, numValMax){
    var sum = 0;
    var oneThirdVal = numValMax / 3;
    for(var i = numValMin; i < numValMax + 1; i += 1){
        console.log(i);
        if(i === oneThirdVal){
            console.log(`The Loop Count is ${i}, which is exactly 1/3 of ${numValMax}`);
            console.log(`Return -1`);
            break;
        }
        else if(i % 7 == 0 || i % 3 == 0){
            if(i % 3 == 0){
                console.log(`${i} is divisible by 3`);
            }
            else{
                sum += i + i;
            }
        }
        else{
            sum += i;
        }
    }
    console.log(`The Final Sum of messyMath from: ${numValMin} to: ${numValMax} is: ${sum}`);
}
giveMeSpace();
messyMath(0, 4);
messyMath(0, 8);
messyMath(0, 15);

function generateCoinChange(changeAmount){
    var changeCount = [0, 0, 0, 0];
    var changeVal = [25, 10, 5, 1];
    var saveChange = changeAmount;
    
    while(changeAmount > 0){
        if(changeAmount < changeVal[0]){
            if(changeAmount < changeVal[1]){
                if(changeAmount < changeVal[2]){
                    changeAmount -= changeVal[3];
                    changeCount[3] += 1;
                }
                else{
                    changeAmount -= changeVal[2];
                    changeCount[2] += 1;
                }
            }
            else{
                changeAmount -= changeVal[1];
                changeCount[1] += 1;
            }
        }
        else{
            changeAmount -= changeVal[0];
            changeCount[0] += 1;
        }
    }
    console.log(`${saveChange} cents can be represented by:`);
    console.log(`${changeCount[0]}: Quarters`);
    console.log(`${changeCount[1]}: Dimes`);
    console.log(`${changeCount[2]}: Nickels`);
    console.log(`${changeCount[3]}: Pennies`);
}
giveMeSpace();
generateCoinChange(100);
generateCoinChange(99);
generateCoinChange(68);