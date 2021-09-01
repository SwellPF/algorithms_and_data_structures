const votes = ['y','y','n','y','n','n','a','y']
const results = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0 ) + 1
    return tally;
}, {}
)