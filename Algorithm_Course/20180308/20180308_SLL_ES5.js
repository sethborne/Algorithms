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
// create a function that inserts the min at the front of the list
// PsuedoCode:
// if there are no nodes null
// if nodes, then find min, once min found, traverse to min
// save in temp, cut next, and redefine at head

SinglyLinkedList.prototype.moveMinToFront = function(){
    // if no nodes
    if(!this.head){
        return null;
    }
    // else if there is only one node
    else if(this.head.next === null){
        // return the list
        return this;
    }
    else {
        var min = this.head.value;
        var currentNode = this.head;
        while(currentNode){
            // this will go through all nodes
            // if a nodes value is less than the min
            if(currentNode.value < min){
                // reassign
                min = currentNode.value;
            }
            console.log("currentNode: ", currentNode, " | min: ", min);
            // traverse
            currentNode = currentNode.next;
        }
        console.log(min);
        // now we have a min value
        // but we need to find the actual node, to pull it out
        // 
        var nodeBeforeMin = this.head;
        // we want to find the node before out minNode (makes it easier to pull out)
        while(nodeBeforeMin.next.value !== min){
            // will run until you hit the node before the min
            // console.log("CLOG: ", nodeBeforeMin);
            if(nodeBeforeMin.value === min){
                console.log("Node: ", nodeBeforeMin);
                break;
            }
            else {
                // traverse
                nodeBeforeMin = nodeBeforeMin.next;
            }
        }
        // now we are on the node before the node.
        // pull out the minNode
        var minNode = nodeBeforeMin.next;
        console.log("minNode: ", minNode);
        // connect node before to node after minNode
        nodeBeforeMin.next = minNode.next;
        // finally, disconnect minNode
        minNode.next = null;
        
        // so know, found min, sep min - so lets add min to the front
        // min node next = current head
        minNode.next = this.head;
        // min node is now head
        this.head = minNode;
        // return list
        return this;
        
    }
};

// ==================================================================
// SList: Move Max to Back
// ==================================================================
// create a function that inserts the max at the end of the list
// psuedocode
// if no nodes - return null
// if there is only one node, return the list
// if there are many nodes, find the max, then the maxNode, take out maxNode
// then traverse and put node at the end.

SinglyLinkedList.prototype.moveMaxToBack = function(){
    // if no nodes
    if(!this.head){
        return null;
    }
    else if(this.head.next === null){
        // ^-- could also be !this.head.next
        return this;
    }
    else {
        var max = this.head.value;
        var currentNode = this.head;
        while(currentNode){
            // looking for max
            if(currentNode.value > max){
                max = currentNode.value;
            }
            currentNode = currentNode.next;
        }
        // so have gone through all nodes and have max
        console.log("max: ", max);
        // node before the maxNode
        var nodeBeforeMax = this.head;
        while(nodeBeforeMax.next){
            if(nodeBeforeMax.next.value === max){
                break;
            }
            else{
                // traverse
                nodeBeforeMax = nodeBeforeMax.next;
            }
        }
        // captured nodeBefore
        console.log("nodeBeforeMax: ", nodeBeforeMax);
        // save the maxNode in a variable
        var maxNode = nodeBeforeMax.next;
        // connect the nodebefore the max to the nodeafter the max
        nodeBeforeMax.next = maxNode.next;
        // disconnect maxNode
        maxNode.next = null;
        
        // now the list is buttoned up - and we have a max node
        // need to traverse to end to connect.
        var traverseNode = this.head;
        while(traverseNode.next){
            traverseNode = traverseNode.next;
        }
        // on last node
        traverseNode.next = maxNode;
        // 
        return this;
    }
};

// ==================================================================
// SList: Prepend Val
// ==================================================================
// create a function that inserts a new Node with a val immediately 
// before the node containing beforeVal, if no beforeVal, then at end
// psuedocode

SinglyLinkedList.prototype.prependValue = function(value, beforeVal){
    // instantiate the node
    var addNode = new Node(value);
    // if no nodes
    if(!this.head){
        this.head = addNode;
        return this;
    }
    else {
        if(this.head.value === beforeVal){
            addNode.next = this.head;
            this.head = addNode;
        }
        else {
            var currentNode = this.head;
            while(currentNode.next){
                // check for the value
                if(currentNode.next.value === beforeVal){
                    break;
                }
                else{
                    currentNode = currentNode.next;
                }
            }
            // we are either on the node before the beforeVal, or the last node
            console.log("What Node Are We At: ", currentNode);
            var afterNode = currentNode.next;
            currentNode.next = addNode;
            addNode.next = afterNode;
            return this;
        }
    }
};

// ==================================================================
// SList: Append Val
// ==================================================================
// create a function insert a new Node with value after the node with 
// afterVal, or if value isn't found at the end.
// psuedocode
// if no nodes, then add node as head

SinglyLinkedList.prototype.appendValue = function(value, afterVal){
    // instantiate the node
    var addNode = new Node(value);
    // no nodes
    if(!this.head){
        this.head = addNode;
    }
    else {
        var currentNode = this.head;
        while(currentNode.next){
            if(currentNode.value === afterVal){
                break;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        // we now are either on the node with the afterVal, or last node
        if(currentNode.next){
            var nodeAfterAfterVal = currentNode.next;
            currentNode.next = addNode;
            addNode.next = nodeAfterAfterVal;
        }
        else {
            currentNode.next = addNode;
        }
    }
};

// ==================================================================
// SList: Remove Val
// ==================================================================
// create a function 
// psuedocode

SinglyLinkedList.prototype.removeValue = function(value){
    var removalNode;
    if(!this.head){
        return null;
    }
    else if(this.head.value === value){
        removalNode = this.head;
        this.head = this.head.next;
        removalNode.next = null;
        return removalNode;
    }
    else {
        var currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.value === value){
                console.log("currentNode: ", currentNode);
                break;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        // at this point, we should either have the node, or be at the end of the list
        if(currentNode.next){
            // this should be a valid node before the removalNode
            removalNode = currentNode.next;
            currentNode.next = removalNode.next;
            // decouple removalNode
            removalNode.next = null;
            return removalNode;
        }
        else{
            return this;
        }
        
    }
}

// ==================================================================
// SList: Create SList
// ==================================================================
// create a function that makes an Slist with the values entered
// Use the prompt function to gather values one at a time from the user
// putting each into a ListNode that you add to the end of the list
// psuedocode

SinglyLinkedList.prototype.createSList = function(){
    // var temp = prompt();
    // console.log(temp);
    var temp = prompt();
    while(temp){
        this.addNode(Number(temp));
        temp = prompt();
    }
    return this;
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
// console.log("Add Back (Value)", SLL.addBack(50));
SLL.addBack(1);
console.log("Current Min: ", SLL.min());
console.log("Length: ", SLL.length());
console.log("Average: ", SLL.average());
// SLL.display();
console.log("Move Min to Front: ", SLL.moveMinToFront());
// SLL.display();
console.log("Move Max to Back: ", SLL.moveMaxToBack());
// SLL.display();
console.log("prependValue", SLL.prependValue(100, 50));
console.log("prependValue", SLL.appendValue(200, 50));
console.log("remvoeValue: ", SLL.removeValue(150));
SLL.display();
// this should work
console.log(SLL);
console.log("========= From Prompt =========");
var SLL1 = new SinglyLinkedList();
console.log("========= Can't run Line Below with Node =========");
// console.log(SLL1.createSList());