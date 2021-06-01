// closures
// the inner function maintains access to the outer scope event
// AFTER the values are returned
const lineup = () => {
    let nowBatting : number = 1;

    return {
        nextBatter() { nowBatting++ },
        currentBatter() { return nowBatting}
    }
}

let batters = lineup();
console.log(batters.currentBatter()) // 1
batters.nextBatter()
console.log(batters.currentBatter()) // 2
batters.nextBatter()
console.log(batters.currentBatter()) // 3

let pitchers = lineup();
console.log(pitchers.currentBatter()) // 1
