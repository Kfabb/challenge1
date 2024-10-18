const counter = createCounter();
function createCounter() {
  let count = 0; 
  return {
    count,
    increment: function(){
      count++;
      return count;
      
    },
    decrement: function(){
    count--;
    return count;
  } 
}}

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());