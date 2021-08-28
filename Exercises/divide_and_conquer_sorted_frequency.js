function sortedFrequency(array, target){
    let start = 0;
    let end = array.length;
    let foundMin=999;
    let foundMax=999;
    console.log(`Target: ${target}`);
    while(start <= end){
        let middle = Math.floor((start + end)/2);
        console.log(start, end, middle);
        if(array[middle] < target) start = middle +1;
        if(array[middle] > target) foundMax = end;
        if(array[middle] >= target) {
            end = middle -1;
        }
        if(array[middle] == target && array[middle-1] != target) foundMin = start;
    }
    end = foundMax; start = foundMin;
    console.log(`foundMin: ${foundMin}   foundMax: ${foundMax}`);
    while(start <= end){
        let middle = Math.floor((start + end)/2);
        console.log(start, end, middle);
        if(array[middle] < target) start = middle +1;
        if(array[middle] >= target) end = middle -1;
        if(array[middle] === target && array[middle+1] !== target){
            foundMax = end;
            return (foundMax - foundMin + 1);
        }
    return -1;
    }
}
      //         0 1 2 3 4 5 6 7          
sortedFrequency([1,1,2,2,2,2,2,3], 2)   //5
                           