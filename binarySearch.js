/**  
 *  @name Binary Search
 *  @description Requires a sorted array,
 * 
 *  Time: 
 *     logarithmic time 
 *  O(log n) 
 * 
 *   Space:  
 *      constant space
 *      O(1) 
 * 
 *   @param {array} array - The sorted array to be searched
 *   @param {number} targetValue - The value to be found
 * 
 *   @returns Returns either the index of the location in the array or -1 if the array did not contain the targetValue 
 * 
 * 
 *  */ 
 
  const binarySearch = function(array, targetValue) {
	let min = 0;
	let max = array.length - 1;
    let guess;
    while ( min <= max ){
        guess = Math.floor(( min + max ) / 2);
        count++;
        if (array[guess] === targetValue){
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