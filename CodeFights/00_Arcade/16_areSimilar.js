// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
    if(a.toString() == b.toString()){
        return true;
    }
    let c = [];
    let d = [];
    for(let i = 0; i < a.length; i += 1){
        if(a[i] !== b[i]){
            c.push(a[i]);
            d.push(b[i]);
        }
    }
    console.log(c, d);
    d = d.reverse();
    if(c.length === 2 && (c.toString() == d.toString())){
        return true;
    }
    else{
        return false;
    }
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 1, 4], [1, 2, 3]));