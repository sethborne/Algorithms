function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

DoublyLinkedList.prototype = {
  add: function (value) {
    let addNode = new Node(value);
    // DLL
    // if no head, then AN is head and tail
    if (!this.head && !this.tail) {
      this.head = addNode;
      this.tail = addNode;
    }
    // if head === tail
    else {
      let prevTail = this.tail;
      this.tail.next = addNode;
      this.tail = addNode;
      addNode.prev = prevTail;
      return this;
    }
  },
  // Given dList, new value, and existing value, insert new val into dList immediately before existing val. 
  prepend: function (newValue, existValue) {
    // instant new Node
    let addNode = new Node(newValue);
    // start at the head
    if (!this.head) {
      return null;
    }
    else if (this.head.value === existValue) {
      // do a redef of the head
      addNode.next = this.head;
      this.head.prev = addNode;
      addNode.prev = null;
      this.head = addNode;
      return this;
    }
    else {
      let currentNode = this.head;
      while(currentNode){
        if(currentNode.value === existValue){
          // now we need to put in the newValue (addNode)
          let prevNode = currentNode.prev;
          prevNode.next = addNode;
          addNode.prev = prevNode;
          addNode.next = currentNode;
          currentNode.prev = addNode;
          return this;
        }
        // traverse
        currentNode =  currentNode.next;
      }
      // if we get here, then we can't add because the value doesn't exist\
      console.log("Existing Value: ", existValue, " does not Exist");
      return false;
    }
  },
  // Given k, return the value ‘k’ from a dList’s end
  kthToLastValue: function (kValue) {
    // 
    if(!this.head && !this.tail){
      return null;
    }
    else {
      let currentNode = this.tail;
      let count = 0;
      while(currentNode){
        count += 1;
        if(count === kValue){
          return currentNode.value;
        }
        else{
          currentNode = currentNode.prev;
        }
      }
      if(count < kValue){
        // not enough items in the array;
        return null;
      }
    }
  },
  // Determine whether given dList is well-formed and valid: whether next and prev pointers match, etc. 
  isValidDList: function () {
    
  },
  // Determine whether a dList is a palindrome
  palindrome: function () {
    //
    if(!this.head && !this.tail){
      return null;
    }
    else if(this.head === this.tail){
      return true;
    }
    else {
      // more than one node
      let front = this.head;
      let back = this.tail;
      let loop = 0;
      // two conditions for evens - if front.next === back.prev, and we've traversed this far, its true.  if front.prev = back && back.next = front then break for evens
      while(front && back){
        loop += 1;
        console.log(`At Loop: ${loop} | Front Value: ${front.value} | Back Value: ${back.value}`);
        if(front.value !== back.value){
          return false;
        }
        if(front.next === back.prev || front.prev === back && back.next === front){
          console.log('hit');
          return true;
        }
        else{
          front = front.next;
          back = back.prev;
        }
      }
      // if traverses thorugh to the condtion, and breaks the while, its true;
      return true;
    }
  },
  // Reverse
  // Create function to reverse nodes in a dList. 
  reverse: function(){
    if(!this.head){
      return null;
    }
    else if(this.head === this.tail){
      return this;
    }
    else {
      let startNode = this.head;
      let tailNode = this.tail;
      while(startNode && tailNode){
        // swap values
        tempNode = startNode.value;
        startNode.value = tailNode.value;
        tailNode.value = tempNode;
        // traverse
        startNode = startNode.next;
        tailNode = tailNode.prev;
        // breaks
        if(startNode === tailNode){
          return this;
        }
        if(startNode.prev === tailNode && tailNode.next === startNode){
          return this;
        }
      }
    }
  },
  // Partition
  // Given dList and partition value, perform a simple partition (no need to return the pivot index).
  partition: function(){
    let smallerThan = new DoublyLinkedList();
    // let equalThan = newDoubley
    
    // 10 - 50 - 40 - 30 - 20
    // 30
    // 20 - 10 - 30 - 50 - 40
  },
  // Break Loop
  // Given dList that may contain a loop, break the loop while retaining original node order.
  breakLoop: function(){
    
  }

}

let DLL = new DoublyLinkedList();
// DLL.add(40);
// DLL.add(30);
// DLL.add(20);
DLL.add(10);
// DLL.add(20);
// DLL.add(30);
// DLL.add(40);
DLL.add(20);
DLL.add(30);
DLL.add(40);
DLL.add(50);
DLL.add(60);
// console.log("Prepend: ", DLL.prepend(5, 15));
// console.log("Prepend: ", DLL.prepend(5, 10));
// console.log("Prepend: ", DLL.prepend(15, 10));
// console.log("Prepend: ", DLL.prepend(5, 15));
// let kValue1 = 4;
// console.log("Kth Value: ", DLL.kthToLastValue(kValue1));
console.log('isPalindrome: ', DLL.palindrome());
// console.log(DLL);
console.log('Reverse: ', DLL.reverse());