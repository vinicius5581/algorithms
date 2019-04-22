const indexOfMinimum = (array, startIndex) => {
    let minValue = array[startIndex];
    let minIndex = startIndex;
    for(let i = minIndex + 1; i < array.length; i++){
        if(array[i] < minValue){
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 22, 14];   

// console.log(indexOfMinimum(array, 2));  // 4
// console.log(indexOfMinimum(array, 0));  // 1
// console.log(indexOfMinimum(array, 5));  // 6

module.exports = indexOfMinimum;
