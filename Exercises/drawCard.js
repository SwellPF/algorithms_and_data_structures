// Solution #1
// function drawCard(){
//     const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
//     const suits = ['clubs', 'diamonds', 'hearts', 'spades']
//     i = Math.floor(Math.random() * value.length);
//     j = Math.floor(Math.random() * suits.length);
//     return `${value[i]} of ${suits[j]}`;
// }



// Solution #2
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const suits = ['clubs', 'diamonds', 'hearts', 'spades']

function pick(arr){
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx];
}

function drawCard(){
    return {value: pick(values), suit: pick(suits)};
}