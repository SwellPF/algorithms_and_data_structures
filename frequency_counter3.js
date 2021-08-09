// Implement a function which accepts a variable number of arguments and
// checks whether there are any duplicates among the arguments passed in. 

function areThereDuplicates(args) {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }