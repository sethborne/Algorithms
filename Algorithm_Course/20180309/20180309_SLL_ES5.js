function SinglyLinkedList(){
    this.head = null;
}

function Node(value){
    this.value = value;
    this.next = null;
    this.removeSelf = function(){
        removeNode = this;
        tempNode = this.next;
        this.value = tempNode.value;
        this.next = tempNode.next;
        return removeNode;
    }
}

// ===================================================================
// addNode
// ===================================================================

SinglyLinkedList.prototype.addNode = function(value){
    // define node
    var addNode = new Node(value);
    // if no head make head return list
    if(!this.head){
        this.head = addNode;
        return this.head;
    }
    else {
        var currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = addNode;
        return this;
    }
};

// ===================================================================
// split on value
// ===================================================================
    // Create splitOnVal(list,num) that, given number, splits a list in two. The latter half of the list should be returned, starting with node containing num. E.g.: splitOnVal(5) for the list (1 >3>5>2>4) will change list to (1>3) and return value will be (5>2>4). 
    // Given: (1)->(2)->(3)->(4), 3
    // Return: (3)->(4)

SinglyLinkedList.prototype.splitOnValue = function(num){
    // if no nodes return null
    if(!this.head){
        return null;
    }
    else {
        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.value === num){
                let tempList = currentNode.next;
                currentNode.next = null;
                console.log(this);
                return tempList;
            }
            else{
                currentNode = currentNode.next;
            }
        }
        // if here, then haven't found the number, return the list?
        return this;
    }
}

// ===================================================================
// partition
// ===================================================================
    // Create partition(list,value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved. 
    // Given: value (3) - list = (1)->(2)->(4)->(5)
    // Return: (1)->(2)->(3)->(4)->(5)
    
    // psuedocode
    // loop once - have boolean if found
    // while on a current node, if !isfound then all that matters is higher, if highter, move to back, if node is equal value, then set isfound flag, traverse, after isFound, all that matters is min, if so, addFront
    
    SinglyLinkedList.prototype.addNodeToFront = function(nodeForFront){
        nodeForFront.next = this.head;
        this.head = nodeForFront;
        return this;
        
    }
    
    SinglyLinkedList.prototype.addNodeToBack = function(nodeForBack){
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = nodeForBack;
        return this;
    }

    SinglyLinkedList.prototype.partition = function(value){
        // if no nodes
        if(!this.head){
            return null;
        }
        else if(this.head.next === null){
            // there isn't anything you can do something with
            return this;
        }
        else {
            // if head value is greater than value we have a problem
            while(this.head.value > value){
                let nodeToAddToBack = this.head;
                this.head = nodeToAddToBack.next;
                nodeToAddToBack.next = null;
                // use helper function to add node to back
                this.addNodeToBack(nodeToAddToBack);
            }
            // at this point, this.head should be either equal or less
            let isValFound;
            if(this.head.value === value){
                isValFound = true;
            }
            else{
                isValFound = false;
            }
            let count = 0;
            let currentNode = this.head;
            while(currentNode.next){
                count += 1;
                if(!isValFound){
                    if(currentNode.next.value > value){
                        let nodeToAddToBack = currentNode.next;
                        currentNode.next = nodeToAddToBack.next;
                        nodeToAddToBack.next = null;
                        this.addNodeToBack(nodeToAddToBack);
                    }
                    else if(currentNode.next.value === value){
                        isValFound = true;
                    }
                    // traverse
                    currentNode = currentNode.next;
                }
                // && currentNode.value === value
                else if(isValFound){
                    console.log("count: ", count, " | currentNode.value: ", currentNode.value, " | value: ", value, " | action: NONE - WE FOUND THE VALUE");
                    if(currentNode.next.value < value){
                        // console.log("count: ", count, " | currentNode.next.value: ", currentNode.next.value, " | value: ", value, " | action: AT VALUE - NEXT LESS, ADD FRONT");
                        let nodeToAddToFront = currentNode.next;
                        currentNode.next = nodeToAddToFront.next;
                        nodeToAddToFront.next = null;
                        this.addNodeToFront(nodeToAddToFront)
                    }
                    else{
                        // traverse
                        currentNode = currentNode.next;
                    }
                }
                else{
                    // here isValFound is true and we should be at nodes after the one with our value
                    // so all we care about is value lower?  if so, add to front, if not don't worry
                    if(currentNode.next.value < value){
                        // console.log("count: ", count, " | currentNode.value: ", currentNode.next.value, " | value: ", value, " | action: ADD TO FRONT");
                        let nodeToAddToFront = currentNode.next;
                        currentNode.next = nodeToAddToFront.next;
                        nodeToAddToFront.next = null;
                        this.addNodeToFront(nodeToAddToFront);
                    }
                    // we don't need to check because we already found the value
                    currentNode = currentNode.next;
                }
                // currentNode = currentNode.next;
            }
            return this;
        }
    }
    
// ===================================================================
// delete Given Node
// ===================================================================
    // Create listNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list, and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by .next.

    // Hint:
    // function sList() {
    //        this.head = null;
    //        this.____  = function(){ .... }
    //  }
    // function sNode(val) {
    //        this.val = val;
    //        this.next = null;
    //        this.removeSelf = function() { ... }
    //  }


var SLL = new SinglyLinkedList();
// SLL.addNode(5);
// SLL.addNode(10);
// SLL.addNode(15);
// SLL.addNode(20);
// SLL.addNode(25);
// SLL.addNode(30);
// SLL.addNode(35);
SLL.addNode(3);
SLL.addNode(1);
SLL.addNode(2);
SLL.addNode(4);
SLL.addNode(5);

// SLL.partition(3);
// 3 -- 3 1 2 4 5
// 2 1 3 4 5
// SLL.partition(2);
// 2 -- 3 1 2 4 5
// 1 2 4 5 3

console.log(SLL.head.next.next.removeSelf());

// console.log(SLL.splitOnValue(20));

console.log(SLL);