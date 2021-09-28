/* Write a recursive function called fib which accepts a number and returns the th number in the Fibonacci sequence. Recall that the Fibonacci sequence 
is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous 
two numbers. */

function fib(num, memo = {}) {
  if (memo[num]) return memo[num];

  if (num < 2) {
    memo[num] = num;
  } else {
    memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  }
  return memo[num];
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
