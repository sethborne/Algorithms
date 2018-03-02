class SingleLinkedList {
    constructor() {
        this.head = null;
    }
    // add value to front
    addToFront(value){
        let addNode = new Node(value);
        // console.log(addNode);
        if(!this.head){
            this.head = addNode;
        }
        else{
            // there is a head
            addNode.next = this.head;
            this.head = addNode;
        }
    }
    contains(value){
        // return a boolean
        if(!this.head){
            return false;
        }
        else{
            // if the current node, doesn't equal the value 
            // traverse
            let currentNode = this.head;
            let findValue = false;
            // run until we find, if we dont find, it returns false
            while(!findValue){
                if(currentNode.value === value){
                    findValue = true;
                }
                else{
                    //traverse to next node, as long as its next isn't null (because then, there is no value)
                    if(currentNode.next){
                        // traverse
                        currentNode = currentNode.next;
                    }
                    else{
                        //break out of the loop (because findValue will never be true because we have exhausted all options)
                        break;
                    }
                }
            }
            console.log(findValue);
            return findValue;
        }
    }
    removeFront(){
        // if there is a head, remove it.  otherwise return null, because there was no head to remove
        // fast fail - if no head, ret null
        let startHead;
        if(!this.head){
            return null
        }
        else{
            // there is a current head. - need to reassign the head's next to null to break the chain, then redefine this.head to be the current head's next.  this will cover a LL of just one value.
            startHead = this.head;
            // capture next node in a temp - will either be a node or (null)
            let tempNode = this.head.next;
            // cut the tconnection from the current head to its next
            this.head.next = null;
            // assign the head title to the stored node
            this.head = tempNode
        }
        console.log(startHead);
        return startHead;
    }
    front(){
        // return value of list head
        // so if there is a head - give val, if not a head, give null
        // if not a head - give null
        if(!this.head){
            // there is no head, so no value!
            return null
        }
        else{
            // there is a head!
            // console.log(this.head.value);
            return this.head.value
        }
    }
    // return number of nodes in the SLL
    length(){
        // if no head - return null because there is no length (also do a varient where return 0 and check if it evals false (it should))
        if(!this.head){
            return null;
        }
        else{
            // wer'll need to traverse and make a count
            let count = 0;
            let currentNode = this.head;
            // while we have a current node
            while(currentNode){
                // console.log("Value: ", currentNode.value);
                // count
                count += 1;
                // then traverse
                currentNode = currentNode.next;
            }
            return count;
        }
    }
    // display - create a "print to console function", that will show the value of all nodes in the list
    display(){
        // if there is not a head
        if(!this.head){
            return  "There are no Values in the Linked List";
        }
        // else there are values
        else {
            // Want to display a message like:  Node (count): | has a Value of: (value)
            // count var
            let count = 0;
            // traverse node
            let currentNode = this.head;
            // string
            let displayString = '';
            while(currentNode){
                count += 1;
                displayString += `Node Number: ${count} has a Value of: ${currentNode.value} | `;
                //traverse
                currentNode = currentNode.next;
            }
            return displayString;
        }
    }
    // return the max
    max(){
        // if no head null
        if(!this.head){
            return null;
        }
        else {
            // there are nodes
            // make node
            let max = this.head.value;
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value > max){
                    max = currentNode.value;
                }
                // traverse
                currentNode = currentNode.next
            }
            return max;
        }
    }
    min(){
        // if no head null
        if(!this.head){
            return null
        }
        else {
            // there is a length
            let min = this.head.value;
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value < min){
                    min = currentNode.value;
                }
                currentNode = currentNode.next
            }
            return min;
        }
    }
    average(){
        // if no head, return null
        if(!this.head){
            return null;
        }
        else {
            let sum = 0;
            let count = 0;
            let currentNode = this.head;
            while(currentNode){
                sum += currentNode.value;
                count += 1;
                // traverse
                currentNode = currentNode.next;
            }
            let average = sum / count;
            console.log(average);
            console.log(sum);
            console.log(count);
            return average;
        }
    }
    // return the last value of the array
    back(){
        // if no head - null
        if(!this.head){
            return null;
        }
        else{
            // 
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
                console.log(currentNode);
            }
            return currentNode.value;
        }
    }
    // remove and return last node
    removeBack(){
        if(!this.head){
            return null
        }
        else{
            let currentNode = this.head;
            while(currentNode.next.next){
                currentNode = currentNode.next;
            }
            // this will traverse until the 2nd to last end.
            let backNodeToRemove = currentNode.next;
            currentNode.next = currentNode.next.next 
            // ^ could probably do this as just null.  it is the last.
            return backNodeToRemove;
        }
    }
    // pass a value.  make a node, if there is no head then assign it otherwise traverse to .next
    addBack(value){
        let addNode = new Node(value);
        if(!this.head){
            this.head = addNode;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            // now at the end node
            currentNode.next = addNode;
            return this;
        }
    }
    moveMinToFront(){
        // if no head null
        if(!this.head){
            return null;
        }
        else {
            // there are nodes, we'll need to find the minimum
            let min = this.head.value;
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value < min){
                    min = currentNode.value;
                }
                // traverse
                currentNode = currentNode.next;
            }
            // find the node before the min
            currentNode = this.head;
            if(this.head.value === min){
                return this;
            }
            else {
                while(currentNode.next.value !== min){
                    currentNode = currentNode.next;
                }
                // capture min Node
                let minNode = currentNode.next;
                // set node before min node to min nodes next
                currentNode.next = currentNode.next.next;
                // now make minNode the head
                minNode.next = this.head;
                this.head = minNode;
                return this;
            }
        }
    }
    moveMaxToBack(){
        // if no head null
        if(!this.head){
            return null
        }
        else {
            let max = this.head.value;
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value > max){
                    max = currentNode.value;
                }
                // this check is for the condition where the max is the last value.  if thats the case, just return the list no need to move.
                if(currentNode.value === max && currentNode.next === null){
                    return this;
                }
                // traverse
                currentNode = currentNode.next;
            }
            // now have a max - need to find the node before this node
            currentNode = this.head;
            // covered with check above
            // could check for next - meaning if null only one value, but prefer to check for value
            // if(this.head.value === max && this.head.next === null){
            //     // if the head value equals max - and there is no next (just a head value) then you can't return just return the list
            //     return this;
            // }
            // otherwise, the 
            while(currentNode.next.value !== max){
                // traverse
                currentNode = currentNode.next;
                console.log(currentNode.next);
            }
            // so now we are on the node before the node
            let maxNodeToMove = currentNode.next;
            console.log(currentNode.next);
            currentNode.next = currentNode.next.next;
            // we now have the max node, and we need to retraverse to attach the item to the end of the list
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = maxNodeToMove;
            maxNodeToMove.next = null;
            return this
        }
    }
}

class Node {
    constructor(value){
        this.next = null;
        this.value = value;
    }
}

let SLL = new SingleLinkedList();
SLL.addToFront(10);
SLL.addToFront(30);
SLL.addToFront(20);
SLL.addToFront(5);
SLL.addToFront(15);
// SLL.addToFront(25);
console.log(SLL);
// false
SLL.contains(50);
// true
SLL.contains(10);
// SLL.removeFront();
// console.log(SLL);
// SLL.removeFront();
// console.log(SLL);
// SLL.removeFront();
// console.log(SLL);
// 20
console.log("Front: ", SLL.front());
console.log("Length: ", SLL.length());
console.log(SLL.display());
console.log("Max: ", SLL.max());
console.log("Min: ", SLL.min());
console.log("Average: ", SLL.average());
console.log("Back: ", SLL.back());
// console.log("Back: ", SLL.removeBack());
// console.log("Back: ", SLL.removeBack());
// console.log("Add to Back ", SLL.addBack(100));
console.log(SLL.display());
console.log(SLL.moveMinToFront());
console.log(SLL.moveMaxToBack());
console.log(SLL.display());