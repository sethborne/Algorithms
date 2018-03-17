function Node(value){
    this.value = value;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
}

SinglyLinkedList.prototype.addNode = function(value){
    // make node
    let addNode = new Node(value);
    if(!this.head){
        this.head = addNode;
        return this;
    }
    else{
        // define a current
        let currentNode = this.head;
        while(currentNode.next){
            // well look for where the nodes stop by traversing
            currentNode = currentNode.next;
        }
        // we are now at teh current node, its next is nul..
        currentNode.next = addNode;
        return this;
    }
    // return new List with added Node
}

SinglyLinkedList.prototype.addFront = function(value){
    // make a node
    let addNodeForFront = new Node(value);
    // check if there is a head (if list has values)
    if(!this.head){
        // if not just make it the head
        this.head = addNodeForFront;
    }
    else{
        // don't really need to traverse, just assign a next and swap head
        // assign the new nodes next to current head
        addNodeForFront.next = this.head;
        // assign new head to the new (added) node
        this.head = addNodeForFront;
        // return list
        return this;
    }
}

SinglyLinkedList.prototype.removeFront = function(){
    // what if no front?
    if(!this.head){
        return null;
    }
    else {
        // no need to traverse, we have a head.
        // what if the head is the only one?
        // if node, save, swap, return node
        // save currenth head in a var
        let nodeToRemove = this.head;
        // set new head to saved nodes .next
        this.head = nodeToRemove.next;
        // cut all next of the node to remove
        nodeToRemove.next = null;
        // return the node to remove
        console.log(nodeToRemove);
        return nodeToRemove;
    }
    return this;
}

SinglyLinkedList.prototype.contains = function(value){
    // return boolean if value exists in LL, if not false.  If no nodes, null
    if(!this.head){
        return null;
    }
    else {
        // then this list has values.  we'll need to traverse, and check those values
        let currentNode = this.head;
        // check every node and value, so currentNode
        while(currentNode){
            // if the value of the node we are at equals the value we are looking for return ture - (found it)
            if(currentNode.value === value){
                return true;
            }
            else {
                // traverse (inside else optional?)
                currentNode = currentNode.next;
            }
        }
        // if we break the loop, we've checked all nodes and the value isn't there, so return false (not in list)
        return false;
    }
}

SinglyLinkedList.prototype.frontValue = function(){
    // if there is a first node (head)- return the value, else, return null
    if(!this.head){
        return null;
    }
    else {
        return this.head.value;
    }
}

SinglyLinkedList.prototype.length = function(){
    // if no head return 0
    if(!this.head){
        return 0;
    }
    else {
        let count = 0;
        let currentNode = this.head;
        while(currentNode){
            // console.log("here");
            count += 1;
            currentNode = currentNode.next;
        }
        return count;
    }
}

SinglyLinkedList.prototype.max = function(){
    // if no head - no max  - return null
    if(!this.head){
        return null;
    }
    else{
        // just saving the value here
        let max = this.head.value;
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value > max){
                // just the value here
                max = currentNode.value
            }
            currentNode = currentNode.next
        }
        // after the last node, just return max
        return max;
    }
}

SinglyLinkedList.prototype.min = function(){
    // if no head , then return null
    if(!this.head){
        return null;
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
        // after the last nod here so return min
        return min;
    }
}

SinglyLinkedList.prototype.average = function(){
    // if  no head - return null, if nodes, sum then divide by total count for average
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
        // now we are here, we have a count, total sum and have traversed accross all nodes.  clog in case
        console.log(count, finalSum);
        let average = finalSum / count;
        return average;
    }
}

let SLL = new SinglyLinkedList();
SLL.addNode(10);
SLL.addNode(20);
SLL.addNode(30);
SLL.addNode(40);
// turn off all above to get the if condition
SLL.addFront(5);
SLL.removeFront();
SLL.removeFront();
// // console.log(SLL.removeFront());
console.log(SLL.contains(40));
console.log(SLL.contains(60));
console.log(SLL.frontValue());
console.log(SLL.length());
// console.log(SLL);
console.log(SLL.max());
console.log(SLL.min());
console.log(SLL.average());
console.log(SLL);