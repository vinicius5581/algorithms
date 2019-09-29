/*** 
 * Array
 * */ 

// Splice
// returns the removed item(s).
// changes the original array.
array.splice(index, howmany, item1, ..., itemX)


// Slice
// returns the selected elements in an array, as a new array object
// original array will not be changed.
array.slice(start, end)

// Shift
// return the removed item.
// changes the length of the array.
// removes the first item of an array.
array.shift();

// Unshift
// adds new items to the beginning of an array.
// changes the length of an array
// returns the new length.
array.unshift("Lemon","Pineapple");

// Pop
// removes the last element of an array.
// returns that element.
// changes the length of an array.
array.pop();

// Push
// adds new items to the end of an array.
// returns the new length.
// changes the length of the array.
array.push("Kiwi");

/***
 * Map
 * */

// Returns the number of key/value pairs in the Map object.
Map.prototype.size
// Removes all key/value pairs from the Map object.
Map.prototype.clear()
// Returns true if an element in the Map object existed 
//and has been removed, or false if the element does not exist. 
Map.prototype.delete(key)
Map.prototype.entries()
Map.prototype.get(key)
Map.prototype.has(key)
Map.prototype.set(key, value)
Map.prototype.forEach(callbackFn[, thisArg])

 /***
 * Set
 * */
Set.prototype.size
Set.prototype.add(value)
Set.prototype.clear()
Set.prototype.delete(value)
Set.prototype.has(value)
Set.prototype.forEach(callbackFn[, thisArg])
