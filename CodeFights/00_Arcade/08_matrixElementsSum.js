// After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

// Help the bots calculate the total price of all the rooms that are suitable for them.

function matrixElementsSum(matrix) {
    let finalSum = 0;
    for(let i = 0; i < matrix.length; i += 1){
        for(let j = 0; j < matrix[i].length; j += 1){
            console.log(i, j, matrix[i], matrix[i][j], finalSum);
            if(matrix[i] === 0){
                if(matrix[i][j] <= 0){
                    console.log('This is the first Row and Item equals 0');
                }
                else {
                    finalSum += matrix[i][j]
                }
            }
            else{
                // need to look above
                let isAboveZero = false;
                for(let z = i; z > -1; z -= 1){
                    if(matrix[z][j] === 0){
                        isAboveZero = true;
                    }
                }
                if(matrix[i][j] <= 0){
                    console.log('This is Zero Don\'t Add');
                }
                else if(isAboveZero){
                    console.log('Above is Zero Don\'t Add');
                }
                else {
                    finalSum += matrix[i][j]
                }
            }
        }
    }
    return finalSum
}

console.log(matrixElementsSum([
    [0, 1, 1, 2], 
    [0, 5, 0, 0], 
    [0, 0, 0, 0]
]));

console.log(matrixElementsSum([
    [1, 1, 1, 0], 
    [0, 5, 0, 1], 
    [2, 1, 3, 10]
]));