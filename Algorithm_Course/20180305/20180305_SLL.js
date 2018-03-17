function sNode(value){
    this.value = value;
    this.next = null;
}

let node1 = new sNode(10);
let node2 = new sNode(20);
let node3 = new sNode(30);
let node4 = new sNode(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(node1);

// addFront
// Given a pointer to the first node in a list, and a value, create a new node, connect it to the head of the list, and return a pointer to the list’s new head node.
// addFront(Node, Number) => Node

function addFront(frontNode, value){
    let newNode = new sNode(value);
    // console.log(newNode);
    if(frontNode === undefined){
        // this should never happen...but in case
        return newNode;
    }
    else {
        newNode.next = frontNode;
        console.log(newNode);
        return newNode;
    }
}

// addFront(node1, 50);

// removeFront
// Given a pointer to the first node in a list, remove the head node and return the new list. If list is empty, return null.
// removeFront(Node) => Node

function removeFront(firstNode){
    if(firstNode.next === null){
        return null;
    }
    else {
        let newFirstNode = firstNode.next;
        firstNode.next = null;
        // console.log(newFirstNode);
        return newFirstNode;
    }
}

// console.log(removeFront(node1));

// contains
// Given a pointer to a listNode and a value, return whether value is found in any node within the list.
// contants(Node, Number) => Boolean

function contains(firstNode, value){
    if(firstNode === undefined){
        return null;
    }
    else{
        // we have a node
        let currentNode = firstNode;
        while(currentNode){
            // this will get us to hit every node
            if(currentNode.value === value){
                // if we find the value we jsut return
                console.log("Found", value);
                return true;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        // if we break the loop - we've cleared all nodes and not found ours
        console.log("Have Not Found", value);
        return false;
    }
}

// contains(node1, 40);
// contains(node1, 60);

// front
// Return the value (not the node) at the head of the list. If list is empty, return null.
// front(Node) => Number


function front(firstNode){
    if(!firstNode.value){
        return null
    }
    else{
        return firstNode.value;
    }
}

// console.log(front(node1));
// let node = new sNode();
// console.log(front(node));
