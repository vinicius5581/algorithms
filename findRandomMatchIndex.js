/**
Generate random max index 
Given an array of integers, randomly return an index of the maximum value seen by far. 

e.g.:
Given [11,30,2,30,30,30,6,2,62, 62] 
Having iterated up to the at element index 5 (where the last 30 is), randomly give an index among [1, 3, 4, 5] which are indices of 30 - the max value by far. Each index should have a ¼ chance to get picked. 
Having iterated through the entire array, randomly give an index between 8 and 9 which are indices of the max value 62.
source: https://www.careercup.com/question?id=5732335291465728
 */

const arr = [11,30,2,30,30,30,6,2,62, 62];
const findRadomMatchingIndex = arr => {
    const matchesMap = {};
    let max = Number.MIN_VALUE;
    arr.forEach((el, idx) => {
        if (el > max) {
            max = el;
        }
        matchesMap[el] ? matchesMap[el].push(idx) : matchesMap[el] = [idx];
    });
    return matchesMap[max][Math.floor(Math.random() * matchesMap[max].length)]
}

console.log(findRadomMatchingIndex(arr));