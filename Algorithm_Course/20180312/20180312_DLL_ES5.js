function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value){
    this.value = value;
    this.next = null;
    this.prev = null;
}

DoublyLinkedList.prototype.addNode = function(value){
    let addNode = new Node(value);
    
    if(!this.head){
        this.head = addNode;
        this.tail = addNode;
    }
    else{
        this.tail.next = addNode;
        addNode.prev = this.tail;
        this.tail = addNode;
    }
    return this;
}

// Instanceof determines if the keyword ‘new; was used to create this object.
// If it was not, we can assist by creating a new instance and returning it.



// ===========================================================================
// Prepend Value
// ===========================================================================
// Prompt
// Given dList, new value, and ex value, insert new val into dList Immediately before existing Val, head is always first node
// 1 - 2 - 3 - 4 ==== (9, 4)
// 1 - 2 - 3 - 9 - 4

DoublyLinkedList.prototype.prependValue = function(value, insertBeforeVal){
    // instantiate node
    let addNode = new Node(value);
    // if no head, return null?  can't insert
    if(!this.head){
        return null;
    }
    else {
        let findNode = false;
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === insertBeforeVal){
                // found the node
                findNode = true;
                // do the swap here
                // capture state
                let afterNode = currentNode;
                let beforeNode = currentNode.prev;
                beforeNode.next = addNode;
                addNode.prev = beforeNode;
                addNode.next = afterNode;
                afterNode.prev = addNode;
                return this;
            }
            else {
                // traverse
                currentNode = currentNode.next;
            }
        }
        return false;
    }
}


// ===========================================================================
// Kth Value
// ===========================================================================
// Prompt - Given K, return the value K from a dList's end
// PsuedoCode - start at the tail, make a count, traverse while count, decrement
// 

DoublyLinkedList.prototype.kthValue = function(kthValue){
    //
    if(!this.head){
        return null;
    }
    else {
        let nodeAtEnd = this.tail;
        let loopNumber = kthValue - 1;
        // while(loopNumber){
        while(nodeAtEnd.prev && loopNumber > 0){
            if(loopNumber > 0){
                nodeAtEnd = nodeAtEnd.prev;
                // 
                loopNumber -= 1;
            }
        }
        if(loopNumber > 0){
            // then list doesn't have enough values
            return null;
        }
        else {
            // has enough, hit kthValue
            kthNode = nodeAtEnd;
            return kthNode;
        }
    }
}

// ===========================================================================
// Is Valid dList
// ===========================================================================
// Prompt - Determine whether given DList is valid: whether next and prev pointers
// match, no loops, etc.
// 
DoublyLinkedList.prototype.isValid = function(){
    
}


// ===========================================================================
// Palindrome
// ===========================================================================
// Prompt - Determine whether a DList is a palindrome
//
DoublyLinkedList.prototype.palindrome = function(){
    
}

// ===========================================================================
// Loop Start
// ===========================================================================
// Prompt - Given a DList that may contain a loop, return node where loop
// begins (or null if no loop)
//
DoublyLinkedList.prototype.loopStart = function(){
    
}

let DLL = new DoublyLinkedList();
DLL.addNode(1);
DLL.addNode(2);
DLL.addNode(3);
DLL.addNode(4);
// DLL.prependValue(9, 4)
console.log(DLL.kthValue(5));

console.log(DLL);