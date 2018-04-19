function Node(value){
    this.value = value;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
}

SinglyLinkedList.prototype = {
    add: function(value){
        // instantiate node with our value
        let addNode = new Node(value);
        // if there is no head
        if(!this.head){
            this.head = addNode;
            return this;
        }
        else{
            // we have more than one node
            // start at the beginning and get ready to traverse
            let currentNode = this.head;
            // loop, set th econdtino to break when the .next is not true (aka, when the next is null)
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            // once loop is broke, we are at the end.
            currentNode.next = addNode
            return this;
        }
    },
    addFront: function(value){
        // instantiate the new node
        let addNode = new Node(value);
        // if there isn't a head just make node the head - its added to front
        if(!this.head){
            this.head = addNode;
            return this;
        }
        else{
            // we have multiple values
            // what we'll need to do here is
            // make addNodes next this.head
            addNode.next = this.head;
            // reassign this.head to addNode
            this.head = addNode;
            return this
        }
    },
    removeFront: function(){
        // this doesn't need a value
        // so if there isn't a head - there are no nodes, return null
        if(!this.head){
            return null;
        }
        else{
            // there is a head
            let removeNode = this.head;
            this.head = this.head.next;
            removeNode.next = null;
            return removeNode;
        }
    },
    contains: function(value){
        // need a value to check
        // if no head - then return null
        if(!this.head){
            return null
        }
        else{
            // we'll need to traverse the list.  
            // while traversing, we'll do a conditional check for the value.  if we
            // ever hit the value, return true (first), if we don't we'll return false
            // setup traverse
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value === value){
                    return true;
                }
                else{
                    // traverse
                    currentNode = currentNode.next
                }
            }
            // if we get here - we have traversed the entire list, and haven't found the value.
            // return false;
            return false;
        }
    },
    front: function(){
        // Return the value (not the node) at the head of the list. If list is empty, return null.
        if(!this.head){
            return null
        }
        else{
            // there is a head.
            return this.head.value;
        }
    }
}


let SLL = new SinglyLinkedList();
SLL.add(5);
SLL.add(10);
SLL.add(15);
SLL.add(20);
SLL.addFront(0);
console.log("Remove Front: ", SLL.removeFront());
let findValue = 5;
console.log(`Contains ${findValue}: `, SLL.contains(findValue));
let findValue2 = 50;
console.log(`Contains ${findValue2}: `, SLL.contains(findValue2));
console.log('Head Value: ', SLL.front());
console.log(SLL);