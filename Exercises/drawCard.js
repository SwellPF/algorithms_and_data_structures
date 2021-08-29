function drawCard(){
    const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits = ['clubs', 'diamonds', 'hearts', 'spades']
    i = Math.floor(Math.random() * value.length);
    j = Math.floor(Math.random() * suits.length);
    return `Value: ${value[i]}  Suit: ${suits[j]}`;
}