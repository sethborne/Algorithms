// ========================================
// from around 1:20:00 in the video
// ========================================

// --------------------------------------------------
// #1 -- this is my node constructor function
// it takes a value
// --------------------------------------------------
function Node(value){
    this.value = value;
    this.next = null;
}

// --------------------------------------------------
// #2 -- lets build some nodes
// --------------------------------------------------
node1 = new Node(10);
node2 = new Node(5);
node3 = new Node(15);
console.log("Node1: | ", node1, node2, node3);

// --------------------------------------------------
// #3 -- lets connect these into a list
// --------------------------------------------------
// node 1 next should be node 2
node1.next = node2;
// node 2 next should be node 3
node2.next = node3;
// should see node 2 in next (maybe more)
console.log(node1);
// should see node 3 in next (maybe more)
// console.log(node2);

// --------------------------------------------------
// #4 -- so now: my "linked list" looks like:
// --------------------------------------------------
// node1
    // node2
        // node3

// ========================================
// from around 1:24:00 - end in the video
// ========================================
// addFront(firstNode, val) pass a pointer to the first node as arg/param, and a value to make new node from => returns newFirstNode
function addFront(firstNode, value){
    // instantiate a new node with passed Value
    let nodeToAddToFront = new Node(value);
    // did I get a node?
    // console.log("nodeToAddToFront: | ", nodeToAddToFront);
    nodeToAddToFront.next = firstNode;
    console.log("NewFirst: | ", nodeToAddToFront);
    return nodeToAddToFront;
}
// node1 (from #4 above, is my firstNode, 20 is value for new first node)
addFront(node1, 20);

// before should be like #4 schematic

// after should look like:
// nodeToAddToFront
    // node1
        // node2
            // node 3

// removeFront(firstNode) returns newFirst
function removeFront(firstNode){
    let newFirst = firstNode.next;
    firstNode.next = null;
    console.log("RemoveFirst", newFirst);
    return newFirst;
}
// removeFront(node1)
// node1
    // node2
        // node3
        
// node2
    // node3

// contains(firstNode, value) returns boolean
function contains(firstNode, value){
    let currentNode = firstNode;
    while(currentNode.next){
        if(currentNode.value === value){
            console.log("Contains: true");
            return true;
        }
        else{
            currentNode = currentNode.next;
        }
    }
    console.log("Contains: false");
    return false;
}


// node1
    // node2
        // node3
// contains(node1, 10)

// front(firstNode) returns val or null
function front(firstNode){
    if(firstNode.value){
        console.log("front: | ", firstNode.value);
        return firstNode.value;
    }
    else{
        console.log("front: | ", null);
        return null;
    }
}
// front(node1)