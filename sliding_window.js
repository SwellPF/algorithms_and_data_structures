// Given an array of integers and a number, write a function which finds the
// maximum sum of a subarray with the length of the number passed to the function. 

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null; // edge case if num is longer than array
    for (let i = 0; i < num; i++) {    // establishes first maxSum
        maxSum += arr[i];
    }
    tempSum = maxSum;   
    // traverses the array adding and removing one item, comparing to max
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
  }