// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function testClosure() {
  let dan = "hi, i'm dan.";

  function john() {
    console.log(`I'm John. My friend dan says ${dan}`);
  }

  john();
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;

  function counter() {
    count++;
    return count;
  }
  return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const counterMaker = () => {
  let limit = 2;
  let count = 0;

  function counter() {
    if (count < limit) count++;
    else {
      console.log('count has reached limit. Resetting at 1');
      count=1;
    }

    return count;
  }

  return counter;
};

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
var counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var count = 0;

  var obj = {
    increment: function() {count++; return count;},
    decrement: function() {count--; return count;},
  }
  return obj;
};

var danCounter = counterFactory();

danCounter.increment();
danCounter.increment();
danCounter.decrement();
