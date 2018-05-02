// build essential push, pop, top, contains, isEmpty, size for ArrStack
// make sure you designate the underlaying array as private (declared var), not public (attached to this)

function ArrStack(){
  var items = [];
  // this.items = [];
  this.push = function(value){
    items[items.length] = value
    // this.items[this.items.length] = value
  },
  this.pop = function(value){
    // let removeValue = this.items[this.items.length - 1];
    let removeValue = items[items.length - 1];
    // this.items.length = this.items.length - 1;
    items.length = items.length - 1;
    return removeValue
  },
  this.top = function(){
    // return this.items[this.items.length - 1];
    return items[items.length - 1];
  },
  this.contains = function(value){
    // for(let i = 0; i < this.items.length; i += 1){
    for(let i = 0; i < items.length; i += 1){
      // if(this.items[i] === value){
      if(items[i] === value){
        return true;
      }
    }
    return false;
  },
  this.isEmpty = function(){
    // return this.items.length ? true : false;
    return items.length ? true : false;
  },
  this.size = function(){
    // return this.items.length
    return items.length
  }
  this.getItems = function(){
    return items;
  }
}

// Given two Stack objects, create a standalone function to return whether they are equal. Stacks are equal only if they have equal elements in identical order. You can use an additional third Stack for storage; you will need it because you must return the given Stacks to their original condition upon exit.

function compareStacks(inputStack1, inputStack2){
  let inputStack1Items = inputStack1.getItems();
  let inputStack2Items = inputStack2.getItems();
  if(inputStack1Items.length !== inputStack2Items.length){
  //   // if not equal then its false
    return false;
  }
  else {
    // both are same length
    console.log('here');
    for(let i = 0; i < inputStack1Items.length; i += 1){
    //   // console.log(inputStack1.items[i], inputStack2.items[i]);
      if(inputStack1Items[i] !== inputStack2Items[i]){
        return false;
      }
    }
    return true;
  }
}

let arrStack = new ArrStack();
arrStack.push(5);
arrStack.push(10);
arrStack.push(15);
arrStack.push(20);
arrStack.push(25);
console.log(arrStack);

console.log(arrStack.contains(5));
console.log(arrStack.pop());
console.log(arrStack.pop());

let arrStack1 = new ArrStack();
arrStack1.push(2);
arrStack1.push(4);
arrStack1.push(6);
arrStack1.push(8);
arrStack1.push(10);
console.log(arrStack1);
let arrStack2 = new ArrStack();
arrStack2.push(2);
arrStack2.push(4);
arrStack2.push(6);
arrStack2.push(8);
arrStack2.push(10);
console.log(arrStack2);

console.log('compareStacks: ', compareStacks(arrStack1, arrStack2));