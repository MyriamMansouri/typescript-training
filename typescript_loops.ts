// while
let x : number = 0;
while (x < 10) {
    console.log(x);
    x += 1;
}

const baseballPlayers : number[] = [3, 25, 12, 5];
// ==> for in
for (let player in baseballPlayers) {
    console.log(`Player position: ${player}`);
}
// for in returns 0 1 2 3

// ==> for of
for (let player of baseballPlayers) {
    console.log(`Player number: ${player}`);
}
// for of returns 3 25 12 5