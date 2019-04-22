/**
 *  Binary Search
 * 
 *  - Requires a sorted array
 *  - Returns either the index of the location in the array or -1 if the array did not contain the targetValue 
 * 
 *   Time: 
 *      logarithmic time 
 *      O(log n) 
 * 
 *   Space:  
 *      constant space
 *      O(1) 
 * 
 *  */ 
 
  const binarySearch = function(array, targetValue) {
	let min = 0;
	let max = array.length - 1;
    let guess;
    let count = 0;
    while ( min <= max ){
        guess = Math.floor(( min + max ) / 2);
        console.log('guess index: ', guess, ' value: ', array[guess]);
        count++;
        if (array[guess] === targetValue){
          console.log('count: ',count);
          return guess;
        }
        else if ( array[guess] < targetValue ){
          min = guess++;
        }
        else{
          max = guess--;
        }
    }
	return -1;
};

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const result = binarySearch(primes, 73);

console.log("Found prime at index " + result);