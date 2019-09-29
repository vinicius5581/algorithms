function firstMultiple(divisors, start) {
    let candidate = start - 1;
    let foundIt = false;
    while (!foundIt) {
        candidate++;
        foundIt = divisors.every(n => candidate % n === 0);
    }
    return candidate;
}
// function firstMultiple(divisors, start) {
//     let foundIt = false;
//     let candidate = start;
//     while(!foundIt){
//         foundIt = divisors.every(n => {candidate % n === 0});
//         candidate++;
//     }
//     console.log(candidate);
// }

console.log(firstMultiple([2, 3, 4], 13));
// console.log([2, 3, 4].every(n => 13 % n === 0))
// console.log([2, 3, 4].every(n => 24 % n === 0))
// console.log();
// console.log(24 % 2);
// console.log(24 % 3);
// console.log(24 % 4);