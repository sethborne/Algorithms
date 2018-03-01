// linked list - single, made up of nodes with a value.

function SingleLinkedList(){
    this.head = null;
}

function Node(value){
    this.next = null;
    this.value = value;
}

SingleLinkedList.prototype.addToFront = function(value){
    let addNode = new Node(value)
    // console.log(addNode);
    if(!this.head){
        console.log("no Head");
        this.head = addNode;
    }
    else{
        // do a quick swap?
        // let tempNode = this.head;
        addNode.next = this.head;
        this.head = addNode
    }
    console.log(this.head);
    return this.head;
}

// CONTAINS
// given a ListNode Pointer and Val, return wheither the val is found in any node in the list

SingleLinkedList.prototype.contains = function(value){
    console.log("Does Single Linked List contain value: ", value);
    // fast fail
    if(!this.head){
        return false;
    }
    else {
        let currentNode = this.head;
        // console.log("Head", currentNode);
        while(currentNode.next !== null){
            // console.log("This Node Value: ", currentNode.value);
            if(currentNode.value === value){
                console.log("true");
                return true;
            }
            else{
                currentNode = currentNode.next;
            }
        }
        if(currentNode.value === value){
            console.log("true");
            return true;
        }
        else {
            console.log("false");
            return false;
        }
    }
}

// Hey Seth - what the heck?  this returns nothing!
// Oh - Hey Seth - isn't your previous head still connected to the current head?  GASP!
SingleLinkedList.prototype.removeFront = function(){
    // fast fail
    if(!this.head){
        return null;
    }
    else {
        this.head = this.head.next;
    }
}

// return the value of the list head
SingleLinkedList.prototype.front = function(){
    // fast fail
    if(!this.head){
        return null
    }
    else{
        return this.head.value;
    }
}

// return number of nodes in the SLL
SingleLinkedList.prototype.length = function(){
    // fast fail
    if(!this.head){
        return null
    }
    else{
        let count = 0;
        let currentNode = this.head;
        // while value
        while(currentNode.value){
            // iterate teh count
            count += 1;
            // while there is a next, traverse
            if(currentNode.next){
                currentNode = currentNode.next;
            }
            // if not leave the loop
            else{
                break;
            }
        }
        // count += 1;
        console.log(count);
        return count;
    }
}

SingleLinkedList.prototype.display = function(){
    let displayString = '';
    if(!this.head){
        displayString += "There are no Values";
        return displayString;
    }
    else{
        let count = 1;
        let currentNode = this.head;
        while(currentNode.value){
            displayString += ` | current Node Number is: ${count} current Node Value is: ${currentNode.value}`
            // traverse
            if(currentNode.next){
                count += 1;
                currentNode = currentNode.next;
            }
            else {
                break;
            }
        }
        return displayString;
    }
}

SingleLinkedList.prototype.max = function(){
    // fast fail
    if(!this.head){
        return null;
    }
    else {
        let max = this.head.value;
        let currentNode = this.head;
        while(currentNode.value){
            // if the currentNode Value is greater than max, then set it to 
            if(currentNode.value > max){
                max = currentNode.value;
            }
            // traverse
            if(currentNode.next){
                currentNode = currentNode.next;
            }
            else {
                break;
            }
        }
        return max;
    }
}

SingleLinkedList.prototype.min = function(){
    // fast fail
    if(!this.head){
        return null;
    }
    else {
        let min = this.head.value;
        let currentNode = this.head;
        while(currentNode.value){
            // if the currentNode value is less than min, then set it to min.
            if(currentNode.value < min){
                min = currentNode.value;
            }
            // traverse
            if(currentNode.next){
                currentNode = currentNode.next;
            }
            else{
                break;
            }
        }
        return min;
    }
}

SingleLinkedList.prototype.average = function(){
    // fast fail
    if(!this.head){
        return null;
    }
    else {
        let finalSum = 0;
        let nodeInListCount = 0;
        let currentNode = this.head;
        while(currentNode.value){
            // add currentNode value to finalSum
            finalSum += currentNode.value
            // iterate count
            nodeInListCount += 1;
            // traverse
            if(currentNode.next){
                currentNode = currentNode.next;
            }
            else {
                break;
            }
        }
        let average = finalSum / nodeInListCount;
        return average;
    }
}

// return the last value of the array
SingleLinkedList.prototype.back = function(){
    // ff
    if(!this.head){
        return null;
    }
    else {
        let currentNode = this.head;
        while(currentNode.value){
            
            // traverse
            if(currentNode.next){
                currentNode = currentNode.next;
            }
            else{
                break;
            }
        }
        let lastVal = currentNode.value
        return lastVal
    }
}

SingleLinkedList.prototype.removeBack = function(){
    // ff
    if(!this.head){
        return null;
    }
    else{
        let currentNode = this.head;
        if(this.head.next === null){
            this.head = null;
        }
        else{
            while(currentNode.value){
                //traverse to find second to last node
                if(currentNode.next.next){
                    currentNode = currentNode.next;
                }
                else{
                    break;
                }
            }
            let secondToLastNode = currentNode;
            secondToLastNode.next = null;
        }
        return this;
    }
}

SingleLinkedList.prototype.addBack = function(value){
    let addNode = new Node(value);
    // if head, assign
    if(!this.head){
        this.head = addNode;
        return this;
    }
    else{
        let currentNode = this.head;
        // traverse
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        // now on last item
        console.log("Here", currentNode);
        currentNode.next = addNode;
        return this;
    }
}

// standalone function that locates the minimum value in a LL, moves to Front of LL
SingleLinkedList.prototype.moveMinToFront = function(){
    // ff
    if(!this.head){
        return null;
    }
    else{
        if(this.head.next === null){
            return this;
        }
        else{
            let minVal = this.head.value
            let currentNode = this.head;
            while(currentNode.value){
                // find min
                if(currentNode.value < minVal){
                    minVal = currentNode.value
                }
                else{
                    // traverse
                    if(currentNode.next){
                        currentNode = currentNode.next;
                    }
                    else {
                        break;
                    }
                }
                // should have a min value now
            }
            // lets find the node before the minVal node
            currentNode = this.head;
            if(currentNode.value === minVal){
                // if head is min, you dont need to move so just return
                return this;
            }
            else {
                while(currentNode.next.value !== minVal){
                    // traverse
                    currentNode = currentNode.next;
                }
                // on the node before minVal, store minVal Node
                let tempNodeMin = currentNode.next;
                // set currentNode.next to minVal Node next - now minVal only exists in the tempVar
                currentNode.next = currentNode.next.next;
                // set tempNode to head
                tempNodeMin.next = this.head;
                this.head = tempNodeMin;
                return this;
            }
        }
    }
}

// create standalone function that locates the maximum value in a LL and moves the node to the back of the list
// return the new list with all values still present, and execpt for the max, in the original order
SingleLinkedList.prototype.moveMaxToBack = function(){
    // ff
    if(!this.head){
        return null
    } // list has vals
    else{
        // if just the head
        let maxVal = this.head.value;
        let currentNode = this.head
        // if there is only one value
        if(currentNode.next === null){
            // just return the list
            return this;
        }
        // traverse to find the max
        else {
            while(currentNode){
                // maxVal Check
                if(currentNode.value > maxVal){
                    maxVal = currentNode.value;
                }
                else{
                    // traverse
                    if(currentNode.next){
                        currentNode = currentNode.next;
                    }
                    else{
                        break;
                    }
                }
            }
            console.log("MaxVal: ", maxVal);
        }
        // we now have a max value
        let tempNodeMax;
        currentNode = this.head;
        if(currentNode.value === maxVal && currentNode.next === null){
            return this;
        } // if head with other values
        else if(currentNode.value === maxVal){
            tempNodeMax = currentNode;
            this.head = currentNode.next;
            tempNodeMax.next = null;
        }
        else{
            // if the current doesn't equal = then traverse
            while(currentNode){
                if(currentNode.next.value === maxVal){
                    break;
                }
                else{
                    currentNode = currentNode.next;
                }
            }
            // should hit the pre-max value node which is cN
            tempNodeMax = currentNode;
            console.log(tempNodeMax);
            currentNode.next = currentNode.next.next;
            // this gets rid of the max node

        }
        console.log("Temp", tempNodeMax);
        currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next
        }
        // this gets us to our last node
        // now reassign
        currentNode.next = tempNodeMax;
        return this;
        // then this means that its either id'd or its the 
    }
}

let SLL = new SingleLinkedList();
SLL.addToFront(10);
console.log(SLL);
SLL.addToFront(15);
console.log(SLL);
SLL.addToFront(20);
SLL.addToFront(30);
SLL.addToFront(45);
SLL.contains(5);
SLL.contains(10);
SLL.contains(20);
SLL.contains(30);
// SLL.removeFront();
console.log(SLL);
// console.log(SLL.front());
// console.log(SLL.length());
// console.log(SLL.display());
console.log("Max: ", SLL.max());
console.log("Min: ", SLL.min());
console.log("Average: ", SLL.average());
console.log("Last Val: ", SLL.back());
console.log("Before Last Remove: ");
console.log(SLL);
// console.log(SLL.removeBack());
// console.log(SLL.removeBack());
console.log(SLL.addBack(5));
// console.log("Move to Front");
// console.log(SLL.moveMinToFront());
console.log(SLL.display());
console.log("Move Max to Back");
console.log("this", SLL.moveMaxToBack());
console.log(SLL.display());


