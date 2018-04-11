// 1  2   3   4   5
// 1  3   5   7   9
// 1  6  15  28  41
//-0  1   2   3   4
// 1  5  13  25  45

function shapeArea(n) {
    return (n * ((2 * n) - 1) - (n - 1));
}

console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
console.log(shapeArea(5));
console.log(shapeArea(6));