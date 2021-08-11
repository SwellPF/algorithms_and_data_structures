// Write a function that accepts a number and adds up all the numbers up to and
// including that number.

function recursiveRange(num){
    if (num ===0) return 0;
    return num + recursiveRange(num-1);
 }
 
 