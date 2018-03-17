class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }
    
    addNode(value){
        // instant node
        let addNode = new Node(value);
        // have a node to add now
        //if no head
        if(!this.head){
            this.head = addNode;
        }
        else {
            // set a currentNode for traverse
            let currentNode = this.head;
            while(currentNode.next){
                // this should give us all nodes - and we'll break out of this loop on the last node
                currentNode = currentNode.next;
            }
            currentNode.next = addNode;
            // console.log(this);
            return this;
        }
    }
    
    addToFront(value){
        // instantiate node
        let nodeToAddToFront = new Node(value);
        // console.log(nodeToAddToFront);
        // if there are no node, no head, make this head
        if(!this.head){
            this.head = nodeToAddToFront;
        }
        else {
            // there are nodes.  but thats ok
            nodeToAddToFront.next = this.head;
            this.head = nodeToAddToFront;
            return this;
        }
    }
    
    removeFront(){
        // if head remove it, if not return null, return list if remove
        if(!this.head){
            return null;
        }
        else{
            // save node
            let removeNode = this.head;
            this.head = removeNode.next;
            removeNode.next = null;
            return this;
        }
    }
    
    contains(value){
        // return true if val exists, false if it doesn't, null if there are no nodes.
        // null if no nodes
        if(!this.head){
            // no nodes
            return null;
        }
        else{
            // there are nodes. - lets traverse and check along the way
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value === value){
                    return true;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
            return false;
        }
    }
    
    frontValue(){
        // if head, return val if not return null
        if(!this.head){
            return null;
        }
        else {
            return this.head.value;
        }
    }
    
    length(){
        if(!this.head){
            return null;
        }
        else {
            let count = 0;
            let currentNode = this.head;
            while(currentNode){
                count += 1;
                currentNode = currentNode.next;
            }
            return count;
        }
    }
    
    max(){
        // if node has values return max, if no values null
        if(!this.head){
            return null;
        }
        else {
            let max = this.head.value;
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value > max){
                    max = currentNode.value;
                }
                currentNode = currentNode.next;
            }
            return max;
        }
    }
    
    min(){
        // if nodes return min value, if not return null
        if(!this.head){
            return null
        }
        else{
            let min = this.head.value;
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value < min){
                    min = currentNode.value;
                }
                currentNode = currentNode.next;
            }
            return min;
        }
    }
    
    average(){
        // if nodes - average, if not return null
        if(!this.head){
            return null
        }
        else {
            let count = 0;
            let finalSum = 0;
            let currentNode = this.head;
            while(currentNode){
                count += 1;
                finalSum += currentNode.value;
                currentNode = currentNode.next;
            }
            let average = finalSum / count;
            return average;
        }
    }
}

let SLL = new SinglyLinkedList();
SLL.addNode(10);
SLL.addNode(20);
SLL.addNode(30);
SLL.addNode(40);
SLL.addToFront(5);
console.log(SLL.contains(50));
console.log(SLL);
console.log("Remove Front");
console.log(SLL.removeFront());
console.log(SLL.length());
console.log(SLL.max());
console.log(SLL.min());
console.log(SLL.average());
// console.log(SLL);