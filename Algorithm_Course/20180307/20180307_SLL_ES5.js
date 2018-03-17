// make list 
function SinglyLinkedList(){
    this.head = null;
}

// make node
function Node(value){
    this.value = value;
    this.next = null;
}

// so now we have a list and a node, now we need an addnode function at least

// ==================================================================
// SList: addNode
// ==================================================================
SinglyLinkedList.prototype.addNode = function(value){
    // instantiate a new Node
    var addNode = new Node(value);
    // if there is no head
    if(!this.head){
        // make the addNode the head
        this.head = addNode;
    }
    else {
        // we'll need to traverse to find the last node
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        // we are now on the last node
        currentNode.next = addNode;
        // return list
        return this;
    }
};

// ==================================================================
// SList: min
// ==================================================================
// create a function that returns the lowest value in the list
// PsuedoCode:
// if no nodes, no min return null
// if nodes, set a var to min, traverse, if the currentnode val is lower, set
// to min

SinglyLinkedList.prototype.min = function(){
    if(!this.head){
        return null;
    }
    else {
        var min = this.head.value;
        var currentNode = this.head;
        while(currentNode){
            if(currentNode.value < min){
                min = currentNode.value;
            }
            currentNode = currentNode.next;
        }
        // now through the list
        return min;
    }
};

// ==================================================================
// SList: max
// ==================================================================
// create a function that returns the highest value in the list
// PsuedoCode:
// if no nodes, no max, return null
// if nodes, set var to max, traversee, if the currentNode is higher, set the max to that value, return!

SinglyLinkedList.prototype.max = function(){
    // if no nodes
    if(!this.head){
        return null;
    }
    else {
        var max = this.head.value;
        var currentNode = this.head;
        while(currentNode){
            if(currentNode.value > max){
                max = currentNode.value;
            }
            currentNode = currentNode.value;
        }
        // return the max
        return max;
    }
};

// ==================================================================
// SList: length
// ==================================================================
// create a function that returns a number value indicating the length of the list
// PsuedoCode:
// need length var.  if no nodes, no length, length is null
// if nodes, traverse through and iterate length by 1, return length

SinglyLinkedList.prototype.length = function(){
    // if no nodes
    var length;
    if(!this.head){
        length = 0;
        return length;
    }
    else {
        length = 0;
        var currentNode = this.head;
        while(currentNode){
            length += 1;
            currentNode = currentNode.next;
        }
        // through nodes return
        return length;
    }
};

// ==================================================================
// SList: average
// ==================================================================
// create a function that returns an average of all values in the list
// PsuedoCode:
// need an finalSum, count, average.  if no head return null
// if head, then traverse, iterating count by 1 and finalSum by 

SinglyLinkedList.prototype.average = function(){
    var count;
    var finalSum;
    if(!this.head){
        return null;
    }
    else {
        // have nodes
        var currentNode = this.head;
        finalSum = 0;
        count = 0;
        while(currentNode){
            count += 1;
            finalSum += currentNode.value;
            // traverse
            currentNode = currentNode.next;
        }
        // now we are done traversing, and have a count and sum, so
        // lets average!
        var average = finalSum / count;
        return average;
    }
};

// ==================================================================
// SList: display
// ==================================================================
// create a function that returns a message - create your ideal "print"
// to print - Node Number: X | Value: Y
// PsuedoCode:
// if no nodes return null
// if nodes, then console.log the Number and the Value.  Need a count var

SinglyLinkedList.prototype.display = function(){
    // no nodes
    if(!this.head){
        return null;
    }
    else {
        // var
        var count = 0;
        var currentNode = this.head;
        while(currentNode){
            // this will hit all nodes, so message
            count += 1;
            console.log("Node Number:", count, " | Value: ", currentNode.value);
            currentNode = currentNode.next;
        }
    }
};

// ==================================================================
// SList: Back
// ==================================================================
// create a function that returns the last value of the list
// PsuedoCode:

SinglyLinkedList.prototype.back = function(){
    // if no nodes, return null
    if(!this.head){
        return null;
    }
    else{
        // traverse till on last node return val
        var currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        // now on last node
        return currentNode.value; //last;
    }
};

// ==================================================================
// SList: Remove Back
// ==================================================================
// create a function that removes the last Node in the list and returns the new list
// PsuedoCode:

SinglyLinkedList.prototype.removeBack = function(){
    // if there are no nodes (no head, null)
    var removeNode;
    if(!this.head){
        return null;
    }
    // if its only a head - then you'll need to handle this case
    else if(this.head.next === null){
        removeNode = this.head;
        this.head = null;
        return this;
    }
    else {
        // we'll need to traverse - start at head
        var currentNode = this.head;
        // we'll traverse to the node before the last node
        while(currentNode.next.next){
            // traverse
            currentNode = currentNode.next;
        }
        // now save the last
        removeNode = currentNode.next;
        // console.log(removeNode);
        // this will detach the remove node, and set currentNode.next to null
        currentNode.next = removeNode.next;
        // cut out removeNode just for safety
        removeNode.next = null;
        return this;
    }
};

// ==================================================================
// SList: Add Back
// ==================================================================
// create a function that inserts a new node at the back of the list
// PsuedoCode:
// if no nodes - return null
// if nodes, start at head, go until last node, out of while then assign

SinglyLinkedList.prototype.addBack = function(value){
    // if there are no nodes(no head return null)
    if(!this.head){
        return null;
    }
    else {
        // make a node
        var addNode = new Node(value);
        // start at head
        var currentNode = this.head;
        while(currentNode.next){
            // traverse till we are on currentLast node and then break
            currentNode = currentNode.next;
        }
        // on last node, make next add
        currentNode.next = addNode;
        // return list
        return this;
    }
};

// ==================================================================
// SList: Move Min to Front
// ==================================================================
// create a function that inserts a new node at the back of the list
// PsuedoCode:
// if there are no nodes null
// if nodes, then find min, once min found, traverse to min
// save in temp, cut next, and redefine at head


SinglyLinkedList.prototype.moveMinToFront = function(){

};


// ==================================================================
// SList: Move Max to Back
// ==================================================================
// create a function that inserts a new node at the back of the list

SinglyLinkedList.prototype.moveMaxToBack = function(){
    
};

// ==================================================================
// SList: Prepend Val
// ==================================================================
// create a function that inserts a new node at the back of the list

SinglyLinkedList.prototype.prependValue = function(){
    
};

// ==================================================================
// SList: Append Val
// ==================================================================
// create a function that inserts a new node at the back of the list

SinglyLinkedList.prototype.appendValue = function(){
    
};

// ==================================================================
// SList: Create SList
// ==================================================================
// create a function that inserts a new node at the back of the list

SinglyLinkedList.prototype.createSList = function(){
    
};

// ==================================================================
// SList: Remove Val
// ==================================================================
// create a function that inserts a new node at the back of the list

SinglyLinkedList.prototype.removeValue = function(){
    
};

// instantiate SLL "class"
var SLL = new SinglyLinkedList();
SLL.addNode(5);
SLL.addNode(25);
SLL.addNode(10);
SLL.addNode(20);
SLL.addNode(15);
console.log("Back (Last) Value: ", SLL.back());
console.log("Remove Back (Last) Value", SLL.removeBack());
console.log("Add Back (Value)", SLL.addBack(50));
SLL.addBack(1);
console.log("Current Min: ", SLL.min());
console.log("Length: ", SLL.length());
console.log("Average: ", SLL.average());
SLL.display();
// this should work
console.log(SLL);