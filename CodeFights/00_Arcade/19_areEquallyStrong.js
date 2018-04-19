function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    // add your and friends
    // same proceed
    if(yourLeft + yourRight === friendsLeft + friendsRight){
        // console.log('Same');
        // in array, lowest first, highest second
        let yourArray = [];
        let friendsArray = [];
        if(yourLeft > yourRight){
            yourArray.push(yourRight);
            yourArray.push(yourLeft);
        }
        else{
            yourArray.push(yourLeft);
            yourArray.push(yourRight);
        }
        if(friendsLeft > friendsRight){
            friendsArray.push(friendsRight);
            friendsArray.push(friendsLeft);
        }
        else{
            friendsArray.push(friendsLeft);
            friendsArray.push(friendsRight);
        }
        if(yourArray[0] === friendsArray[0] && yourArray[1] === friendsArray[1]){
            return true;
        }
    }
    // if not fail
    else{
        return false;
    }
    return false;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
console.log(areEquallyStrong(10, 5, 5, 10));
console.log(areEquallyStrong(10, 15, 5, 20));
