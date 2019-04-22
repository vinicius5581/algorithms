const swap = require('./swap');
const indexOfMinimum = require('./indexOfMinimum');

const selectionSort = array => {
    let current;
    for(let i = 0; i < array.length; i++){
        current = indexOfMinimum(array, i);
        swap(array, i, current);
    }
    return array;
};


const array = [22, 11, 99, 88, 9, 7, 42];
console.log(selectionSort(array)); // [ 7, 9, 11, 22, 42, 88, 99 ]