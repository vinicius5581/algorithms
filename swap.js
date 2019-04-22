const swap = (array, firstIndex, secondIndex) => {
    const temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

// const testArray = [7, 9, 4];
// swap(testArray, 0, 1);
// console.log(testArray); // [ 9, 7, 4 ]
// swap(testArray, 1, 2);
// console.log(testArray); // [ 9, 4, 7 ]
// swap(testArray, 0, 2);
// console.log(testArray);  // [ 7, 4, 9 ]


module.exports = swap;