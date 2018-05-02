function Node(value){
  this.value = value;
  this.next = null;
}

function Queue(){
  this.head = null;
}

Queue.prototype = {
  enqueue: function(value){
    //add the given value to the end of our queue
    let addToQueue = new Node(value);
    // if no head or tail, assign
    if(!this.head && !this.tail){
      this.head = addToQueue;
      this.tail = addToQueue;
    }
    else{
      this.tail.next = addToQueue;
      this.tail = addToQueue;
    }
    return this;
  },
  dequeue: function(){
    // Create a method to remove and return the value of the front of the queue
    if(!this.head && !this.tail){
      return null;
    }
    else if(this.head === this.tail){
      let returnNode = this.head;
      this.head = null;
      this.tail = null;
      return returnNode.value;
    }
    else {
      let returnNode = this.head;
      this.head = returnNode.next;
      returnNode.next = null;
      return returnNode.value;
    }
  },
  front: function(){
    if(!this.head && !this.tail){
      return null;
    }
    else{
      return this.head;
    }
  },
  contains: function(value){
    // return whether given value is found within our queue.
    if(!this.head){
      return null;
    }
    else {
      let currentNode = this.head;
      while(currentNode){
        if(currentNode.value === value){
          return true;
        }
        else{
          // traverse
          currentNode = currentNode.next;
        }
      }
      return false;
    }
  },
  isEmpty: function(){
    // return true/false if queue has no values
    return !this.head && !this.tail ? true : false;
  },
  size: function(){
    if(!this.head && !this.tail){
      return null;
    }
    else {
      let currentNode = this.head;
      let count = 0;
      while(currentNode){
        count += 1;
        currentNode = currentNode.next;
      }
      return count;
    }
  },
  removeMinimums: function(){
    // if no head return null
    if(!this.head){
      return null;
    }
    else {
      // need to go through and look for head
      let currentNode = this.head;
      let min = this.head.value;
      while(currentNode){
        if(currentNode.value < min){
          min = currentNode.value;
        }
        // traverse
        currentNode = currentNode.next;
      }
      console.log(min);
      if(this.head.next === null && this.head.value !== min){
        return this;
      }
      else {
        // its in the middle or end;
        let currentNode = this.head;
        // console.log(currentNode);
        while(currentNode.next){
          if(this.head.value === min){
            // handle head condition
            let tempHead = this.head;
            this.head = this.head.next;
            tempHead.next = null;
          }
          else if(currentNode.next === null){
            return this;
          }
          else if(currentNode.next.value === min){
            let removeNode = currentNode.next;
            currentNode.next = removeNode.next;
            removeNode.next = null;
          }
          else {
            // traverse
            currentNode = currentNode.next;
          }
        }
        return this;
      }
    }
  },
  interleaveQueue: function(){
    if(!this.head){
      return null;
    }
    else{
      // send a runner forward to find middle
      let middleNode = this.tail;
      let runner = this.tail;
    }
  }
}

function compareObjects(inputQueue1, inputQueue2){
  if(!inputQueue1.head && !inputQueue2.head){
    return null;
  }
  else{
    let inputQueue1CurrentNode = inputQueue1.head;
    let inputQueue2CurrentNode = inputQueue2.head;
    while(inputQueue1CurrentNode.next && inputQueue2CurrentNode.next){
      if(inputQueue1CurrentNode.value !== inputQueue2CurrentNode.value){
        return false;
      }
      else{
        inputQueue1CurrentNode = inputQueue1CurrentNode.next;
        inputQueue2CurrentNode = inputQueue2CurrentNode.next;
      }
    }
    // console.log(inputQueue1CurrentNode.value);
    if(inputQueue1CurrentNode.next || inputQueue2CurrentNode.next){
      return false;
    }
    else {
      return true;
    }
  }
}

let aQueue = new Queue();
aQueue.enqueue(5);
aQueue.enqueue(10);
aQueue.enqueue(15);
aQueue.enqueue(20);
aQueue.enqueue(25);
// console.log('Front: ', aQueue.front());
// console.log('DeQueue: ', aQueue.dequeue());
console.log('removeMinimums', aQueue.removeMinimums());
console.log(aQueue);

// let compareQueue1 = new Queue();
// compareQueue1.enqueue(5);
// compareQueue1.enqueue(10);
// compareQueue1.enqueue(15);
// compareQueue1.enqueue(20);
// let compareQueue2 = new Queue();
// compareQueue2.enqueue(25);
// compareQueue2.enqueue(30);
// compareQueue2.enqueue(35);
// compareQueue2.enqueue(40);

// console.log(compareObjects(compareQueue1, compareQueue2));



