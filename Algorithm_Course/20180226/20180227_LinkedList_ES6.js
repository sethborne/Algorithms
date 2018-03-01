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
    max(){}
    min(){}
    average(){}
    back(){}
    removeBack(){}
    addBack(){}
    moveMinToFront(){}
    moveMaxToBack(){}
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
