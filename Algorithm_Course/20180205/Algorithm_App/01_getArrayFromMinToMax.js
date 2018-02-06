function getArrayFromMinToMax(min, max){
    var arrayFromMinToMax = [];
    var min = min || 1;
    var max = max || 255;
    for(var i = min; i < max + 1; i += 1){
        arrayFromMinToMax.push(i);
    }
    return arrayFromMinToMax;
}

console.log(getArrayFromMinToMax(1, 255));