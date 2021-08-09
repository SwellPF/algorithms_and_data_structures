// Implement a function which accepts a sorted array and counts the unique
// values in the array.

function countUniqueValues(arr){
    let left = 0;
    let right = 1;
    while (right < (arr.length+1)) {
        if (arr[left] == arr[right]) {
            right++
        } else {
            left++;
            arr[left] = arr[right];
            right++
          }
      } 
      return left;
  }

  // ALTERNATE SOLUTION

  function countUniqueValues2(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])