// Write a recursive function that accepts an array and returns a new
// array with all the values flattened.

function flatten(origArr){
    let newArr = [];
    for (let i = 0; i < origArr.length; i++){
        if (Array.isArray(origArr[i])){
            newArr = newArr.concat(flatten(origArr[i]))
        } else {
            newArr.push(origArr[i])
        }
    }
    return newArr;
  }  