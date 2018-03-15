function Queue(){
    this.collection = [];
}

// [front , back]
// push is getting in line.

Queue.prototype = {
    enqueue: function(value){
        this.collection.push(value);
        return this;
    },
    dequeue: function(){
        // remove front.
        return this.collection.shift();
    },
    front: function(){
        return this.collection.length ? this.collection[0] : false;
    },
    contains: function(value){
        return this.collection.includes(value)
    },
    isEmpty: function(){
        return this.collection.length === 0 ? true : false;
    },
    size: function(){
        return this.collection.length;
    }
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("Front: ", queue.front());
console.log("Contains: ", queue.contains(20));
console.log("Contains: ", queue.contains(5));
console.log("isEmpty: ", queue.isEmpty());
console.log("Size: ", queue.size());
console.log(queue);
// console.log(Array.isArray(queue));


function SinglyLinkedList(){
    this.head = null;
}

function Node(value){
    this.value = value;
    this.next = null;
}

SinglyLinkedList.prototype = {
    enqueue: function(value){
        let addNode = new Node(value);
        if(!this.head){
            this.head = addNode;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = addNode;
            return this;
        }
    },
    dequeue: function(){
        if(!this.head){
            return null
        }
        else {
            let dequeueNode = this.head;
            this.head = dequeueNode.next;
            dequeueNode.next = null;
            return dequeueNode;
        }
    },
    front: function(){
        return this.head;
    },
    contains: function(value){
        if(!this.head){
            return null;
        }
        else{
            let nodeContained;
            let currentNode = this.head;
            while(currentNode){
                if(currentNode.value === value){
                    nodeContained = true;
                    return nodeContained;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
            nodeContained = false;
            return nodeContained;
        }
    },
    isEmpty: function(){
        return !this.head ? true : false;
    },
    size: function(){
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
SLL.enqueue(5);
SLL.enqueue(10);
SLL.enqueue(15);
SLL.enqueue(20);
SLL.enqueue(25);
SLL.enqueue(30);
SLL.enqueue(35);
console.log("Dequeue: ", SLL.dequeue());
console.log("Dequeue: ", SLL.dequeue());
console.log("Front: ", SLL.front());
console.log("Contains: ", SLL.contains(15));
console.log("isEmpty: ", SLL.isEmpty());
console.log("size: ", SLL.size());
console.log(SLL);
