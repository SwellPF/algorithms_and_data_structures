// Write a function that accepts a string and returns a reversed version of the string.

function reverse(str){
    if (str.length === 0) return str;
    return reverse(str.slice(1)) + str[0];
  }