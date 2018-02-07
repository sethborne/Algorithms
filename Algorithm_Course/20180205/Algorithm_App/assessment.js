// 1,2,3,4
function questionOne(){
    let logArr = []
    for(var x = 3; x < 8; x += 1){
        logArr.push(x);
    }
    console.log(logArr);
}

questionOne();

// 5,6,7,8,9,10,11,12,13,14

function questionTwo(){
    let logArr = []
    msg = 'codingdojo';
    for(var x = 9; x < msg.length + 4; x += 1){
        logArr.push(x);
    }
    console.log(logArr);
}

questionTwo();

// 10

function questionThree(){
    var x = 10;
    if(x == 10){
        console.log(x);
    }
    else {
        console.log('hello');
    }
}

questionThree();

// codingdojo

function questionFour(){
    var msg = 'dojo';
    if(msg == 'dojo'){
        console.log('coding'+msg);
    }
    else {
        console.log('ninja'+msg);
    }
}

questionFour();

// 16

function questionFive(){
    for(var x = 18; x > 6; x -= 1){
        console.log(x);
        break;
    }
}

questionFive();

// 18, 17, 16, 15, 14, 13, 12, 11

function questionSix(){
    let returnArray = [];
    msg = 'hello!';
    
    for(var x = 22; x > msg.length + 5; x -= 1){
        returnArray.push(x);
    }
    console.log(returnArray);
}

questionSix();

// 2 - 9

// 2 -> 10 - 8

// 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9
function questionSeven(){
    let returnArray = [];
    msg = 'codingdojo';
    for(var x = 2; x < msg.length - 4; x += 1){
        if(msg.length == 4){
            for(var i = 2; i < 2; i += 1){
                // console.log(i);
                returnArray.push(i);
            }
        }
        else {
            for(var i = msg.length; i > (msg.length - 3); i -= 1){
                // console.log(i);
                returnArray.push(i);
            }
        }
    }
    console.log(returnArray);
}

questionSeven();


function sum_odd(){
    let min = 9;
    let max = 61;
    let sum = 0;
    let oddArray = [];
    for(let i = min; i < max + 1; i += 1){
        if(i % 2 === 1){
            sum = sum + i
            oddArray.push(i)
        }
    }
    console.log(oddArray);
    console.log(oddArray[oddArray.length-1]);
    console.log(sum);
    return sum;
}

sum_odd();