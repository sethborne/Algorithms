function Stack(){
    this.collection = [];
}

Stack.prototype = {
    push: function(value){
        // add to tend of stack
        this.collection[this.collection.length] = value;
        return this;
    },
    top: function(){
        return this.collection[this.collection.length - 1];
    },
    isEmpty: function(){
        return this.collection.length === 0 ? true : false;
    },
    pop: function(){
        let popVal = this.collection[this.collection.length - 1];
        this.collection.length = this.collection.length - 1;
        return popVal;
    },
    contains: function(value){
        // return true or false - could loop through and throw a boolean
        return this.collection.includes(value)
    },
    size: function(){
        return this.collection.length
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.top());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.contains(30));
console.log(stack.size());
console.log(stack);

function SinglyLinkedList(){
    this.head = null;
}

function Node(value){
    this.value = value;
    this.next = null;
}

SinglyLinkedList.prototype = {
    push: function(value){
        // push should add to the front
        let addNode = new Node(value);
        if(!this.head){
            this.head = addNode;
        }
        else{
            addNode.next = this.head;
            this.head = addNode;
        }
    },
    pop: function(){
        // need to remove the head and return it
        let removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return removeNode;
    },
    top: function(){
        // return the head
        return this.head;
    },
    contains: function(value){
        let doesContain = false;
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                doesContain = true;
                return doesContain;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        doesContain = false;
        return doesContain
    },
    isEmpty: function(){
        // if there is no head
        return !this.head ? true : false;
    },
    size: function(){
        // set a count and loop through
        let size = 0;
        let currentNode = this.head;
        while(currentNode){
            size += 1;
            currentNode = currentNode.next;
        }
        return size;
    }
    
}

let SLL = new SinglyLinkedList();
SLL.push(10);
SLL.push(15);
SLL.push(20);
SLL.push(25);
SLL.push(30);
SLL.push(35);
SLL.push(40);
console.log(SLL);
console.log(SLL.pop());
console.log(SLL.top());
console.log(SLL.contains(10));
console.log(SLL.contains(15));
console.log(SLL.contains(25));
console.log(SLL.isEmpty());
console.log(SLL.size());
console.log(SLL);