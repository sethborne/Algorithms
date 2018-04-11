
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
    let productArray = [];
    inputArray.forEach((item, index) => {
        if(index === 0){
            let firstProduct = item * inputArray[index + 1]
            productArray.push(firstProduct);
        }
        else if(index === inputArray.length - 1){
            let lastProduct = item * inputArray[index - 1]
            productArray.push(lastProduct);
        }
        else {
            let leftProduct = item * inputArray[index - 1];
            let rightProduct = item * inputArray[index + 1];
            if(leftProduct > rightProduct){
                productArray.push(leftProduct);
            }
            else{
                productArray.push(rightProduct);
            }
        }
    })
    console.log(productArray);
    let largest = productArray.reduce((a, b) => Math.max(a, b));
    return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));