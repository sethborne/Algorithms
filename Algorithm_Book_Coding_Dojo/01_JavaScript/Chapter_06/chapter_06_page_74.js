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