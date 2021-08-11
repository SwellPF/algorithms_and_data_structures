// Write a function which accepts an array and a callback.
// Function returns true if a single value in the array returns true when
// passed to the callback.  Otherwise, returns false.

function someRecursive(array, callback){
  if(array.length === 0) return false;
  if(callback(array[0])) return true;
  return someRecursive(array.slice(1), callback)
}