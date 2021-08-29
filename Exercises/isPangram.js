
// Solution #1
// function isPangram(phrase){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     for(let letter of alphabet){
//         if (phrase.toLowerCase().indexOf(letter) === -1) return false;
//     }
//     return true;
// }

// Solution #2
function isPangram(phrase){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let letter of alphabet){
        if (!phrase.toLowerCase().includes(letter)) return false;
    }
    return true;
}