function Node(data){
    this.data = data;
    this.children = [];
}

function Tree(){
    this.root = null;
}

Node.prototype = {
    add: function(data){
        const node = new Node(data);
        this.children.push(node)
    }, 
    remove: function(data){
        
    }
}

Tree.prototype = {
    traverseBF: function(){
        if(!this.root){
            // console.log(null);
            return null;
        }
        else{
            // this array will let you see the values as you traverse (because the traverseQueue will get empty)
            let finalArrayOfValues = [];
            // added a count for the log at the bottom.
            let count = 0;
            // put the first node in the traverseQueue - becuase well run the while until the queue is empty (no length)
            let traverseQueue = [];
            let firstNode = this.root;
            traverseQueue.push(firstNode);
            // ^^^^^^^^^^ this is equivalent to const arr = [ this.root ] ^^^^^^^^^^
            while(traverseQueue.length > 0){
            // ^^^^^^^^^^ this is equivalent to while (arr.length) ^^^^^^^^^^
                // remove entire first item (node) in the traverse queue
                let currentNode = traverseQueue.shift();
                // ^^^^^^^^^^ this is equivalent to const node = arr.shift(); ^^^^^^^^^^
                // if this node has children (if the children array prop has a length)
                if(currentNode.children.length > 0){
                    // then push these children into the queue.
                    // a - using a for loop
                    for(let i = 0; i < currentNode.children.length; i += 1){
                        traverseQueue.push(currentNode.children[i]);
                    }
                    // b - the forEach method
                    // currentNode.children.forEach(function(child){
                    //     traverseQueue.push(child)
                    // })
                    // c - a for ... of loop
                    // for(let child of currentNode.children){
                    //     traverseQueue.push(child);
                    // }
                    // d - the ES6 spread operator (lets you push more than one)
                    // traverseQueue.push(...currentNode.children)
                    
                    // ^^^^^^^^^^ one of any of these is equal to arr.push(...node.children) ^^^^^^^^^^
                }
                // traverseQueue.shift()  will remove and then return the first item of the array
                // so this would change to:  finalArrayofValues.push(traverseQueue[0])
                finalArrayOfValues.push(currentNode.data);
                // ^^^^^^^^^^ if you want to see the entire node, just remove.data - but you should probably view this in a browser then, node will probably chop off info ^^^^^^^^^^
                count += 1;
                console.log('');
                console.log(`At end of Loop: ${count} | Looked at Node: ${currentNode} | pushed ${currentNode.children.length} children into the traverseQueue: ${currentNode.children} | and pushed the currentNode's Value: ${currentNode.data} into the finalArrayOfValues`);
                console.log('');
                console.log("Traverse Queue:  ", traverseQueue);
                console.log("Final Array Of Values In Traversal Order:  ", finalArrayOfValues);
                console.log('');
            }
            // return an object containing both arrays - traverseQueue should be empty
            // finalArrayOfValues should match your 
            return {
                traverseQueue: traverseQueue,
                finalArrayOfValues: finalArrayOfValues
            }
        }
    },
    traverseDF: function(){
        
    }
}

const BTree = new Tree();
// give root value
BTree.root = new Node(20)
BTree.root.add(0)
BTree.root.add(40)
BTree.root.add(-15)
BTree.root.children[0].add(12);
BTree.root.children[0].add(-2);
BTree.root.children[0].add(1);
// I changed this value to -4 just so its different thatn the other -2
BTree.root.children[2].add(-4);
console.log("Tree", BTree);
// the function that he passed in his algo is so it will pass his test - you don't need it here.
console.log(BTree.traverseBF());




// this is my Tree
//             20
//     0       40      -15
// 12  -2  1              -2