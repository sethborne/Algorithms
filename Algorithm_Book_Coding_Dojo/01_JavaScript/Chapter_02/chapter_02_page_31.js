function giveMeSpace(){
    console.log("                                                         ");
}

function rockingTheDojoSwag(numVal){
    var price = 20;
    var subtotal;
    var discount;
    var total;
    
    if(numVal >= 4){
        subtotal = price * numVal;
        discount = subtotal * .35;
        total = subtotal - discount;
    }
    else if(numVal == 3){
        subtotal = price * numVal;
        discount = subtotal * .19;
        total = subtotal - discount;
    }
    else if(numVal == 2){
        subtotal = price * numVal;
        discount = subtotal * .09;
        total = subtotal - discount;
    }
    else if(numVal == 1){
        total = price * numVal;
    }
    else {
        total = console.log(`The Value Input: ${numVal}, is not Valid for the Order.  Please retry`);
    }
    console.log(total);
    return total;
}

rockingTheDojoSwag(-5);
// clog message
rockingTheDojoSwag(0);
// clog message
rockingTheDojoSwag(1)
// 20
rockingTheDojoSwag(2)
// 36.4
rockingTheDojoSwag(3)
// 48.6
rockingTheDojoSwag(4)
// 52
rockingTheDojoSwag(5)
// 65
