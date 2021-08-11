// Write a function that accepts a number and returns the nth number of
// the Fibonacci sequence.

function fib(num){
    if (num<=2) return 1;
    return fib(num-1) + fib(num-2);
}