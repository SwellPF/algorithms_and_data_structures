// Write a function that accepts a string and returns true if the string
// is a valid palindrome. Otherwise returns false.

function isPalindrome(string){
    if(string.length === 1) return true;
    if(string.length === 2) return str[0] === str[1];
    if (string[0] === string.slice(-1)) return isPalindrome(string.slice(1,-1));
    return false;
  }


  