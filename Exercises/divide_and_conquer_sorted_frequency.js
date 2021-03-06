function sortedFrequency(array, target){
    let start = 0;
    let end = array.length;
    let foundMin;
    let foundMax;
    if(target > array[array.length-1] || target < array[0]) return -1;
    while(start <= end){
        let middle = Math.floor((start + end)/2);
        if(array[middle] < target) start = middle +1;
        if(array[middle] >= target) end = middle -1;
        if(array[middle] == target) foundMin = middle;
    }
    end = array.length-1; 
    start = foundMin;
    while(start <= end){
        let middle = Math.floor((start + end)/2);
        // console.log(`Evaluating... startIdx: ${start}, middleIdx: ${middle}, endIdx: ${end}, FoundMin: ${foundMin}, FoundMax: ${foundMax}`)
        if(array[middle] <= target) start = middle +1;
        if(array[middle] > target) end = middle - 1;
        if(array[middle] == target) foundMax = middle;
    }
    if (foundMax){
            console.log(`Success!!!! From: ${foundMin} To: ${foundMax}`);
            return (foundMax - foundMin + 1);
        } else {
            return -1;
        }
}