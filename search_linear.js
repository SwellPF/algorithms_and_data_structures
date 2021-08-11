// Write a function that accepts an array and a value and returns the index
// at which that value exists.  If it does not exist, return -1.

function linearSearch(array, val){
    for(let i=0; i<array.length; i++){
        if (array[i] === val) return i;
    }
    return -1;
  }