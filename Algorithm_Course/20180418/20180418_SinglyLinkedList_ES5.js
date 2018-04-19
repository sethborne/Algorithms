
// ============================================================================================================
// List Stuff
// ============================================================================================================

function Node(value){
    this.value = value;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
}

SinglyLinkedList.prototype = {
    // ============================================================================================================
    // add
    // ============================================================================================================
    add: function(value){
        // take value and instantiate a node
        let addNode = new Node(value);
        // if no head then just add as head
        if(!this.head){
            this.head = addNode;
            return this;
        }
        else{
            // we have nodes, we'll need to traverse to find the last one.
            let currentNode = this.head;
            while(currentNode.next){
                // this will traverse until we come to the last node, and its next is null
                currentNode = currentNode.next;
            }
            // now assign
            currentNode.next = addNode;
            return this;
        }
    },
    // ============================================================================================================
    // length
    // Create a function that accepts a pointer to first list node, and returns number of nodes in sList. 
    // ============================================================================================================
    length: function(){
        // length
        // no head null
        if(!this.head){
            return null
        }
        else{
            let count = 0;
            let currentNode = this.head;
            // while current
            while(currentNode){
                count += 1;
                currentNode = currentNode.next;
            }
            return count;
        }
    },
    // ============================================================================================================
    // average
    // Create a standalone function average(node) that returns the average of all values contained in that list.
    // ============================================================================================================
    average: function(){
        // 
        if(!this.head){
            return null;
        }
        else{
            let finalSum = 0;
            let count = 0;
            let currentNode = this.head;
            while(currentNode){
                finalSum += currentNode.value;
                count += 1;
                // traverse
                currentNode = currentNode.next;
            }
            let average = finalSum / count;
            return {
                finalSum: finalSum,
                count: count,
                average: average
            };
        }
    },
    // ============================================================================================================
    // removeNode
    // Create removeVal(list,value) that removes from our list the node with the given value. Return the new list. 
    // ============================================================================================================
    removeNode: function(value){
        // if not head return null no val
        if(!this.head){
            return null;
        }
        else if(this.head.value === value){
            console.log('hit');
            let nodeToRemove = this.head;
            this.head = this.head.next;
            nodeToRemove.next = null;
            return nodeToRemove;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next.next){
                if(currentNode.next.value === value){
                    // found node you want to remove
                    let nodeToRemove = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    nodeToRemove.next = null;
                    return nodeToRemove;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
            return false;
        }
    },
    // ============================================================================================================
    // min and max
    // Create function min(node) and max(node) to returning smallest and largest values in the list.
    // ============================================================================================================
    min: function(){
        // no head ret null
        if(!this.head){
            return null;
        }
        else {
            let currentNode = this.head;
            let min = this.head.value
            while(currentNode){
                if(currentNode.value < min){
                    min = currentNode.value
                }
                // traverse
                currentNode = currentNode.next
            }
            return min;
        }
    }, 
    max: function(){
        if(!this.head){
            return null;
        }
        else {
            let currentNode = this.head;
            let max = this.head.value;
            while(currentNode){
                if(currentNode.value > max){
                    max = currentNode.value;
                }
                currentNode = currentNode.next;
            }
            return max;
        }
    },
    // ============================================================================================================
    // display
    // Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!
    // ============================================================================================================
    display: function(){
        if(!this.head){
            return null;
        }
        else{
            // have nodes
            let arrayOfNodeValues = [];
            let currentNode = this.head;
            let count = 0;
            while(currentNode){
                count += 1
                console.log(`Node ${count}: Value is: ${currentNode.value}`);
                arrayOfNodeValues.push(currentNode.value);
                // traverse
                currentNode = currentNode.next;
            }
            return arrayOfNodeValues;
        }
    }, 
    // ============================================================================================================
    // prependNode
    // Create prependVal(list,value,before) that inserts a listNode with given value immediately before the node with before(value) (or at end). Return the new list. 
    // (1)->(2)->(3)->(4)
    // (list, 99, 4)
    // (1)->(2)->(3)->(99)->(4)
    // ============================================================================================================
    prependNode: function(value, beforeValue){
        // if no list
        let addNode = new Node(value);
        if(!this.head){
            this.add(value);
            return this;
        }
        else if(this.head.value === beforeValue){
            let tempNode = this.head;
            this.head = addNode;
            this.head.next = tempNode;
            return this;
        }
        else if(this.head.value !== beforeValue && !this.head.next){
            this.add(value);
            return this;
        }
        else {
            //
            let currentNode = this.head;
            while(currentNode.next){
                // so always looking ahead now.
                if(currentNode.next.value === beforeValue){
                    let tempNode = currentNode.next;
                    currentNode.next = addNode;
                    addNode.next = tempNode
                    return this
                }
                currentNode = currentNode.next
            }
            return false
        }
    },
    // ============================================================================================================
    // appendNode
    // Create appendVal(list,value,after) that inserts a new listNode with given value immediately after the node containing after (or at end). Return the new list. 
    // (1)->(2)->(3)->(4)
    // (list, 99, 4)
    // (1)->(2)->(3)->(4)->(99)
    // ============================================================================================================
    appendNode: function(value, afterValue){
        let addNode = new Node(value);
        if(!this.head){
            this.add(value);
            return this;
        }
        else {
            // for appendNode - it inserts after, so never need to switch this.head
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value === afterValue){
                    let tempNode = currentNode.next
                    currentNode.next = addNode;
                    addNode.next = tempNode;
                    return this;
                }
                currentNode = currentNode.next;
            }
            return false;
        }
    }
}

let SLL = new SinglyLinkedList();
SLL.add(5);
SLL.add(10);
SLL.add(15);
SLL.add(20);
SLL.add(25);
console.log('Append Default 1: ', SLL.appendNode(150, 10));
console.log('Prepend Default 1: ', SLL.prependNode(50, 10));
console.log('Prepend Default 2: ', SLL.prependNode(30, 10));
console.log('Prepend Head: ', SLL.prependNode(25, 50));
// console.log('Prepend: ', SLL.prependNode(50, 10));
// console.log('Append: ', SLL.appendNode(50, 10));
console.log('Current Average: ', SLL.average());
console.log('Current Length: ', SLL.length());
// console.log(SLL.removeNode(5));
console.log('Min: ', SLL.min());
console.log('Max: ', SLL.max());
console.log('Display (inOrder): ', SLL.display());
console.log(SLL);
