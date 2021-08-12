// Write a function that accepts a sorted array and a value and returns the
// index at which that value exists.  Otherwise, return -1.

function binarySearch(arr, val){
    let left = 0;
    let right = arr.length-1;
    while(left <= right){
        let checkpoint = Math.floor((left + right)/2);
        if(arr[checkpoint] === val) return checkpoint;
        if(arr[checkpoint] < val) {
            left = checkpoint+1;
            
        } else { right = checkpoint-1;
        }
    }
        return -1;
}