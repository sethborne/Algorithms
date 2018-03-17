function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value){
    this.value = value;
    this.prev = null;
    this.next = null;
}

DoublyLinkedList.prototype = {
    // addNodeToFront
    addToFront: function(value){
        let addNode = new Node(value);
        if(!this.head && !this.tail){
            this.head = addNode;
            this.tail = addNode;
            return this;
        } else {
            addNode.next = this.head;
            this.head.prev = addNode;
            this.head = addNode;
            return this;
        }
    },
    // addNodeToBack
    addToBack: function(value){
        // make node
        let addNode = new Node(value);
        // if no head make head
        if(!this.head && !this.tail){
            this.head = addNode;
            this.tail = addNode;
            return this;
        } else {
            // just add to tail
            this.tail.next = addNode;
            addNode.prev = this.tail;
            this.tail = addNode;
            return this;
        }
    },
    // Combine previous work with a function that fixes errors found by isValid and breaks loops.
    repair: function(){
        
    },
    // Given 1) dList, 2) new value, and 3) existing value, insert new val into dList immediately after existing val. 
    appendValue: function(newValue, exValue){
        // make new node
        let addNode = new Node(newValue);
        // 
        if(exValue === this.head.value || exValue === this.tail.value){
            // if both
            if(exValue === this.head.value && exValue === this.tail.value){
                this.tail.next = addNode;
                this.tail = addNode;
                return this;
            }
            // if one
            else if(exValue === this.head.value){
                addNode.next = this.head.next;
                this.head.next = addNode;
                addNode.prev = this.head;
                return this;
            }
            // if other
            else if(exValue === this.tail.value){
                this.tail.next = addNode;
                addNode.prev = this.tail;
                this.tail = addNode;
                return this;
            }
        } else {
            // its somewhere between the head and the tail
            let currentNode = this.head;
            while(currentNode.next){
                if(currentNode.value === exValue){
                    addNode.next = currentNode.next;
                    currentNode.next = addNode;
                    addNode.next.prev = addNode;
                    addNode.prev = currentNode; 
                }
            }
            return this;
        }
    },
    // Given a node in the middle of a dList, remove it.
    // always get an odd number 
    deleteMiddleNode: function(){
        let isOdd = false;
        let frontNode = this.head;
        let backNode = this.tail;
        while(frontNode.next !== backNode.prev){
            frontNode = frontNode.next;
            backNode = backNode.prev;
        }
        // should be the node
        let removedNode = frontNode.next;
        frontNode.next = backNode;
        backNode.prev = frontNode;
        if(removedNode === null){
            isOdd = false;
            return 'Not an Odd Length DLL';
        }
        else{
            isOdd = true;
            return removedNode
        }
    },
    // Create function to reverse nodes in a dList. 
    reverse: function(){
        if(!this.head){
            return null
        }
        else{
            if(this.head === this.tail){
                //there is only one node
                return this;
            }
            else if(this.head.next === this.tail){
                // only two nodes
                let tempValue = this.head;
                this.head = this.tail;
                this.tail = tempValue;
                this.head.next = this.tail;
                this.tail.prev = this.head;
            }
            else {
                // 3 or more nodes
                console.log('three');
                let frontNode = this.head;
                let backNode = this.tail;
                while(frontNode.prev !== backNode && frontNode.next !== backNode.prev){
                    let tempValue = frontNode.value;
                    frontNode.value = backNode.value;
                    backNode.value = tempValue;
                    // traverse
                    frontNode = frontNode.next;
                    backNode = backNode.prev;
                }
                return this;
            }
        }
    },
    // Create partition(list,value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved. 
    // Given: (3)->(1)->(2)->(4)->(5)
    // Return: (1)->(2)->(3)->(4)->(5)
    addNodeToHead: function(nodeForHead){
        
    },
    addNodeToTail: function(nodeForTail){
        console.log("nodeForTail", nodeForTail);
        this.tail.next = nodeForTail;
        nodeForTail.prev = this.tail;
        this.tail = nodeForTail;
        return this;
    },
    partition: function(value){
        if(!this.head){
            return null;
        }
        else {
            if(this.head === this.tail){
                // its is only one node
                return null;
            }
            else{
                // start at head
                let currentNode = this.head;
                let isValFound = false;
                while(currentNode.next){
                    console.log("currentNode", currentNode);
                    if(currentNode.value === value){
                        isValFound = true;
                        break;
                    }
                    else if(!isValFound){
                        if(currentNode.value > value){
                            // then we need to move it to back
                            if(currentNode === this.head){
                                console.log("is head");
                                let tempHead = currentNode;
                                currentNode = currentNode.next;
                                this.head.next.prev = null;
                                this.head = tempHead.next;
                                tempHead.prev = null;
                                tempHead.next = null;
                                // console.log(tempHead);
                                // console.log(this);
                                this.addNodeToTail(tempHead)
                            } else {
                                let tempNode = currentNode;
                                tempNode.prev.next = currentNode.next;
                                tempNode.next.prev = currentNode.prev;
                                tempNode.next = null;
                                tempNode.prev = null;
                                console.log(tempNode);
                                console.log(this);
                                // currentNode = currentNode.next
                                this.addNodeToTail(tempNode)
                            }
                        }
                        console.log("Line 192: ", currentNode);
                        currentNode = currentNode.next;
                    }
                    else if(isValFound){
                        console.log("foundValue");
                    }
                    else{
                        console.log("Don't Hit this Please!");
                    }
                }
                return;
            }
        }
    },
    breakLoop: function(){
        
    }
    // displayDLL: function(){
    //     let topDash = '_'
    //     console.log(topDash + topDash + topDash + topDash + topDash + topDash + topDash);
    //     let sides = '|';
    //     let divider = '-------'
    //     console.log(sides + "     " + sides);
    //     console.log(divider);
    //     console.log(sides + "     " + sides);
    //     console.log(divider);
    //     console.log(sides + "     " + sides);
    //     let bottomDash = '\u203E';
    //     console.log(bottomDash + bottomDash + bottomDash + bottomDash + bottomDash + bottomDash + bottomDash);
    // }
}


// console.log('U+0304');
// console.log(U+00AF);
// console.log('\u00AF');
// console.log('\u203E');


let DLL = new DoublyLinkedList();
DLL.addToBack(5);
DLL.addToBack(10);
DLL.addToBack(15);
DLL.addToBack(20);
DLL.addToBack(25);
// DLL.addToBack(30);
// DLL.addToBack(35);
// DLL.addToBack(40);
// DLL.addToBack(45);
DLL.addToFront(0);
// DLL.appendValue(15, 10);
// console.log(DLL.deleteMiddleNode());
DLL.reverse();
// DLL.displayDLL();
console.log(DLL.partition(15));

// 0, 5, 10, 20, 25
// 25, 20, 10, 5, 0

console.log(DLL);