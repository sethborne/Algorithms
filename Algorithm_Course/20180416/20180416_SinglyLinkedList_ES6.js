class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
    
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
    }
    add(value){
        // add will add to the last node
        // instantiate node
        let addNode = new Node(value);
        if(!this.head){
            this.head = addNode;
            return this;
        }
        else {
            // more than one node.  traverse
            let currentNode = this.head;
            // this will loop until we hit the last node
            while(currentNode.next){
                // this continues the traverse
                currentNode = currentNode.next;
            }
            currentNode.next = addNode;
            return this;
        }
    }
    addFront(value){
        // addFront will add to the front of the list
        // instantiate node
        let addNode = new Node(value);
        // if there is no head, then just make it hte head
        if(!this.head){
            this.head = addNode;
        }
        else {
            // there are many nodes
            // need to make addNode.next the head
            addNode.next = this.head;
            // need to make addNode the head
            this.head = addNode;
            return this;
        }
    }
    removeFront(){
        // don't need a valuse
        if(!this.head){
            // if no head return null (can't remove anything)
            return null;
        }
        else{
            // many nodes
            let removedNode = this.head;
            this.head = this.head.next;
            removedNode.next = null;
            return removedNode;
        }
    }
    contains(value){
        // if we don't have a head return null (no nodes to check)
        if(!this.head){
            return null
        }
        else {
            // we have many nodes - we'll need to traverse
            let currentNode = this.head;
            // because we are checking values, we'll look at all valid nodes
            while(currentNode){
                if(currentNode.value === value){
                    // found it!
                    return true;
                }
                else {
                    // currentNode value doesn't equal the passed value, so traverse
                    currentNode = currentNode.next;
                }
            }
            // if we hit this, we've looped thorugh all nodes, and haven't found the value, return false
            return false;
        }
    }
    
    front(){
        // get value of first node (head)
        if(!this.head){
            // we don't have a node so return null
            return null
        }
        else{
            // we have a head so just return the value
            return this.head.value;
        }
    }
}

let SLL = new SinglyLinkedList();
console.log(SLL.add(5));
console.log(SLL.add(10));
console.log(SLL.addFront(15));
console.log(SLL.removeFront());
console.log("Contains 5: ", SLL.contains(5));
console.log("Contains 50: ", SLL.contains(50));
console.log("Current Head Value: ", SLL.front());
console.log(SLL);