// Write a function that takes in two strings and checks whether the 
// characters in the first string form a subsequence within the second string.

function isSubsequence(string1, string2) {
      let i = 0;
      let j = 0;
      if (string1.length == 0) return true;
      while (j < string2.length) {
          if (string2[j] === string1[i]) i++;
          if (i === string1.length) return true;
          j++;
      }
      return false;
}