function booWho(input) {
    // What is the new fad diet for ghost developers? The Boolean.
    var isBool;
    if(typeof input === "boolean"){
        isBool = true;
    }
    else{
        isBool = false;
    }
    console.log(isBool);
    return isBool;
}

// booWho(null);
booWho(true); 
// should return true.
booWho(false); 
// should return true.
booWho([1, 2, 3]); 
// should return false.
booWho([].slice); 
// should return false.
booWho({ "a": 1 }); 
// should return false.
booWho(1); 
// should return false.
booWho(NaN); 
// should return false.
booWho("a"); 
// should return false.
booWho("true"); 
// should return false.
booWho("false"); 
// should return false.