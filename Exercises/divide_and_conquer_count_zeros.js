function countZeroes(array){
    let min = 0;
    let max = array.length;
    while(min <= max){
        let middle = Math.floor((max + min)/2);
        let currentElement = array[middle];
        if(array[middle] === 0 && array[middle-1] === 1 ) return array.length-middle;
        if(array[middle] === 1){
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }
    array[min] == 0 ? result = array.length : result = 0;
    return result;
}