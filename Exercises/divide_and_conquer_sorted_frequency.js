function sortedFrequency(array, target){
    let start = 0;
    let end = array.length;
    let foundMin=0;
    let foundMax=array.length;
    console.log(`Target: ${target}`);
    while(start <= end){
        let middle = Math.floor((start + end)/2);
        if(array[middle] < target) start = middle +1;
        if(array[middle] >= target) {
            end = middle -1;
        }
        if(array[middle] == target && array[middle-1] != target) foundMin = middle;
    }
    end = array.length-1; 
    start = foundMin;
    while(start <= end){
        let middle = Math.floor((start + end)/2);
        if(array[middle] <= target) start = middle +1;
        if(array[middle] == target && array[end] == target){
            foundMax = middle;
            return (foundMax - foundMin + 1);
        }
        if(array[middle] > target) end = middle -1; 
    }
    return -1;
}