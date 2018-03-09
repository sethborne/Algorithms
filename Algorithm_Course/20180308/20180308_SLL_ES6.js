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
            console.log("addBack last node: ", currentNode);
            console.log(addNode);
            currentNode.next = addNode;
            console.log(this);
            return this;
        }
    }
    moveMinToFront(){
        // create a function that inserts the min at the front of the list
        // PsuedoCode
        // if no head, no nodes, return null
        // if head.next === null, return this (list)
        // cycle through, find min
        // after finding min, then research for node before, cut out min
        // put min at front
        if(!this.head){
            return null;
        }
        else if(this.head.next === null){
            // there is only one node
            return this;
        }
        else {
            let min = this.head.value;
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value < min){
                    min = currentNode.value;
                }
                // traverse
                currentNode = currentNode.next;
            }
            // have min
            if(this.head.value === min){
                // if the heads value is min then return the list
                return this;
            }
            else {
                // we'll need to move it
                let nodeBeforeMin = this.head;
                while(nodeBeforeMin.next.value !== min){
                    // traverse
                    nodeBeforeMin = nodeBeforeMin.next;
                }
                // at node before min
                let minNode = nodeBeforeMin.next;
                nodeBeforeMin.next = minNode.next;
                minNode.next = null;
                // removed node - now assign to front
                minNode.next = this.head;
                this.head = minNode;
                return this;
            }
        }
        
    }
    moveMaxToBack(){
        // create a function that inserts the max at the end of the list
        // psuedocode
        // if no nodes return null
        // if head.next is null then its max at back return list
        // if many nodes - first find max, then find node before max, then remove max, then traverse to end
        if(!this.head){
            return null;
        }
        else if(this.head.next === null){
            return this;
        }
        else {
            let max = this.head.value;
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value > max){
                    max = currentNode.value;
                }
                // traverse
                currentNode = currentNode.next;
                // console.log(max);
            }
            // 
            let nodeBeforeMax = this.head;
            // find node before max
            if(this.head.value === max){
                // handle this case
                let maxNode = this.head;
                this.head = maxNode.next;
                maxNode.next = null;
            }
            else {
                while(nodeBeforeMax.next){
                    if(nodeBeforeMax.next.value === max){
                        break;
                    }
                    else{
                        nodeBeforeMax = nodeBeforeMax.next;
                    }
                }
                // at this point, we should have the node before the max
                let maxNode = nodeBeforeMax.next;
                nodeBeforeMax.next = maxNode.next;
                maxNode.next = null;
                // so now max is removed, need to traverse to get to the end.
                let currentNode = this.head;
                while(currentNode.next){
                    currentNode = currentNode.next;
                }
                currentNode.next = maxNode;
                return this;
            }
        }
    }
    prependValue(value, beforeVal){
        // create a function that inserts a new Node with a val immediately 
        // before the node containing beforeVal, if no beforeVal, then at end
        // psuedocode
        // make a node with val
        // traverse until we find the node before the node that contains beforeVal, connect the node here
        let addNode = new Node(value);
        if(!this.head){
            this.head = addNode;
            return this;
        }
        else if(this.head.value === beforeVal){
            addNode.next = this.head;
            this.head = addNode;
            return this;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next){
                if(currentNode.next.value === beforeVal){
                    break;
                }
                else{
                    currentNode = currentNode.next;
                }
            }
            // at this point we are either at the end, or at the node before 
            let tempNodewithBeforeVal = currentNode.next;
            currentNode.next = addNode;
            addNode.next = tempNodewithBeforeVal;
            return this;
        }
    }
    appendValue(value, afterVal){
        // create a function insert a new Node with value after the node with 
        // afterVal, or if value isn't found at the end.
        // psuedocode
        // if no nodes, then add node as head
        let addNode = new Node(value);
        if(!this.head){
            this.head = addNode;
            return this;
        }
        else if(this.head.next === null){
            this.head.next = addNode;
            return this;
        }
        else {
            // look for afternode
            let currentNode = this.head;
            while(currentNode.next){
                if(currentNode.value === afterVal){
                    break;
                }
                else{
                    currentNode = currentNode.next;
                }
            }
            // now either at the afterNode, or at the end.
            if(currentNode.next){
                // so if we have nodes on either side
                let tempNode = currentNode.next;
                currentNode.next = addNode;
                addNode.next = tempNode;
                return this;
            }
            else {
                currentNode.next = addNode;
            }
        }
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
            while(currentNode.next){
                if(currentNode.next.value === value){
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
console.log("addBack: ", SLL.addBack(1));
console.log("moveMinToFront: ", SLL.moveMinToFront());
console.log("moveMaxToBack: ", SLL.moveMaxToBack());
console.log("prependValue: ", SLL.prependValue(42, 100));
console.log("appendValue: ", SLL.appendValue(200, 10));
SLL.display();
console.log("removeValue: ", SLL.removeValue(10));


console.log(SLL);