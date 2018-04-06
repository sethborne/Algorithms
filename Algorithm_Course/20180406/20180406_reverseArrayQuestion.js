function reverseArray(arr) {
    let j = 0;
    let arrLength;
    if (arr.length % 2 === 0) {
        arrLength = (arr.length / 2)
    } else {
        arrLength = (arr.length - 1) / 2;
    }
    for (let i = arr.length - 1; i >= arrLength; i--) {
        console.log(i);
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        j++;
    }
    return arr;
}

console.log(reverseArray(['dog', 1,2,3,4,5]));