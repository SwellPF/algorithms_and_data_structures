// Write a function that accepts two parameters, an array of positive integers
// and a single positive integer.  Function should return the minimal length 
// of a contiguous subarray of which the sum is greater than or equal to 
// the integer passed to the function.  If there isn't one, return 0.

function minSubArrayLen(arr, sum) {
    let start = 0;
    let end = 0;
    let total = 0;
    let minLength = Infinity;
    
    while (start < arr.length) {
        if (total < sum && end < arr.length) {
        total += arr[end];
        end++;
        }
        else if (total >= sum) {
            minLength = Math.min(minLength, end-start);
            total -= arr[start];
            start++;
        }
        else {
            break;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}