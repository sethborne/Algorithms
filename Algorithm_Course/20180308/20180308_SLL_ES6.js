class SinglyLinkedList {
    constructor(){
        this.head = null;
    }
    addNode(value){
        // instantiate node
        let addNode = new Node(value);
        //  if no nodes - make the node this.head
        if(!this.head){
            this.head = addNode;
            return this;
        }
        else {
            // set a current
            let currentNode = this.head;
            while(currentNode.next){
                // traverse
                currentNode = currentNode.next;
            }
            currentNode.next = addNode;
            return this;
        }
    }
    min(){
        if(!this.head){
            return null;
        }
        else {
            let min = this.head.value;
            let currentNode = this.head;
            while(currentNode){
                // go through all nodes
                if(currentNode.value < min){
                    min = currentNode.value;
                }
                currentNode = currentNode.next;
            }
            return min;
        }
    }
    max(){
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
            // 
            return max;
        }
    }
    length(){
        // if no nodes, return length 0
        if(!this.head){
            return 0;
        }
        else {
            let length = 0;
            let currentNode = this.head;
            while(currentNode){
                length += 1;
                currentNode = currentNode.next;
            }
            return length;
        }
    }
    average(){
        // if no nodes, return null
        if(!this.head){
            return null;
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
            // console.log(count, finalSum, average);
            return average;
        }
    }
    display(){
        // no nodes
        if(!this.head){
            return null;
        }
        else {
            var count = 0;
            let currentNode = this.head;
            while(currentNode){
                count += 1;
                console.log("Node Number: ", count, " | Value: ", currentNode.value);
                currentNode = currentNode.next;
            }
            // no return
        }
    }
    back(){
        // no nodes
        if(!this.head){
            return null;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            return currentNode.value;
        }
        
    }
    removeBack(){
        // no nodes
        if(!this.head){
            return null;
        }
        else if(this.head.next === null){
            // this means there is one node,
            let removeNode = this.head;
            this.head = null;
            // don't need to set remove node to null, already is
            return removeNode;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next.next){
                currentNode = currentNode.next;
            }
            // now we have the node before the last
            let removeNode = currentNode.next;
            currentNode.next = removeNode.next;
            // removeNode is last node, so its already null, dont need to set it
            return removeNode;
        }
    }
    addBack(value){
        // 
        let addNode = new Node(value);
        // no nodes
        if(!this.head){
            this.head = addNode;
            return this;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            // now on last node.
            currentNode.next = addNode;
            return this;
        }
    }
    moveMinToFront(){
        
    }
    moveMaxToBack(){
        
    }
    prependValue(value, beforeVal){
        
    }
    appendValue(value, afterVal){
        
    }
    removeValue(value){
        // if no nodes
        if(!this.head){
            return null;
        }
        else if(this.head.next === null){
            if(this.head.value === value){
                let removeNode = this.head;
                this.head = null;
                return removeNode;
            }
            else {
                return null;
            }
        }
        else {
            let currentNode = this.head;
            while(currentNode.next.next){
                if(currentNode.value === value){
                    break;
                }
                else{
                    currentNode = currentNode.next;
                }
            }
            // should be at the node, or at the end.
            if(currentNode){
                // then we need to remove it
                let removeNode = currentNode.next;
                currentNode.next = removeNode.next;
                removeNode.next = null;
                return removeNode;
            }
            else {
                // no node to return
                return this;
            }
        }
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let SLL = new SinglyLinkedList();
SLL.addNode(5);
SLL.addNode(25);
SLL.addNode(10);
SLL.addNode(20);
SLL.addNode(15);
console.log("Min: ", SLL.min());
console.log("Max: ", SLL.max());
console.log("Length: ", SLL.length());
console.log("Average: ", SLL.average());
SLL.display();
console.log("Back: ", SLL.back());
console.log("removeBack: ", SLL.removeBack());
SLL.display();
console.log("addBack: ", SLL.addBack(100));
console.log("moveMinToFront: ", SLL.moveMinToFront());
console.log("moveMaxToBack: ", SLL.moveMaxToBack());
console.log("prependValue: ", SLL.prependValue(100, 25));
console.log("appendValue: ", SLL.appendValue(200, 15));
console.log("removeValue: ", SLL.removeValue(10));

console.log(SLL);