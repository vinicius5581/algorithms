function largestSumContiguousSubarray(arr) {
    const arrSize = arr.length; 
    let max_so_far = Number.MIN_VALUE;
    let max_ending_here = 0; 

    for (let i = 0; i < arrSize; i++) { 
        max_ending_here = max_ending_here + arr[i]; // -2
        if (max_so_far < max_ending_here) 
            max_so_far = max_ending_here; 
        if (max_ending_here < 0) 
            max_ending_here = 0; 
    } 
    return max_so_far;
  

}


const arr = [-2, -3, 4, -1, -2, 1, 5, -3];

console.log(largestSumContiguousSubarray(arr));



/*

i   max_so_far  max_ending_here

0                
1
2
3
4
5
6
7

*/
