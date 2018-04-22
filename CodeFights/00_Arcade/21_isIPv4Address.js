// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255 inclusive, separated by dots, e.g., 172.16.254.1.

// Given a string, find out if it satisfies the IPv4 address naming rules.

function isIPv4Address(inputString) {
    let checkArray = inputString.split('.')
    if(!checkArray.length || checkArray.length !== 4){
        return false
    }
    else{
        //checkarray is 4
        // console.log(checkArray);
        for(let i = 0; i < checkArray.length; i += 1){
            // console.log(checkArray[i]);
            if(!checkArray[i].length){
                return false;
            }
            else if(isNaN(checkArray[i])){
                return false;
            }
            else if(Number(checkArray[i]) < 0 || Number(checkArray[i]) > 255){
                return false;
            }
        }
        return true
    }
}

console.log('01: true  |', isIPv4Address('172.16.254.1'));
console.log('02: false |', isIPv4Address('172.316.254.1'));
console.log('03: false |', isIPv4Address('.254.255.0'));
console.log('04: false |', isIPv4Address('1.1.1.1a'));
console.log('05: false |', isIPv4Address('1'));
console.log('06: true  |', isIPv4Address('0.254.255.0'));
console.log('07: false |', isIPv4Address('1.23.256.255.'));
console.log('08: false |', isIPv4Address('1.23.256..'));
console.log('09: false |', isIPv4Address('0..1.0'));
console.log('10: false |', isIPv4Address('1.1.1.1.1'));
console.log('11: false |', isIPv4Address('1.256.1.1'));
console.log('12: false |', isIPv4Address('a0.1.1.1'));
console.log('13: false |', isIPv4Address('0.1.1.256'));
console.log('14: false |', isIPv4Address('129380129831213981.255.255.255'));
console.log('15: false |', isIPv4Address('255.255.255.255abcdekjhf'));
console.log('16: false |', isIPv4Address('7283728'));