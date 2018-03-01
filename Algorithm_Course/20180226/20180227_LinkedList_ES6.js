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
    length(){}
    display(){}
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
console.log(SLL.front());
