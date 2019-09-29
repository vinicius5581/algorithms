const items = [
  {type: 'phone', name: 'iPhone', color: 'gold'}, // 3 < K < 10
  {type: 'laptop', foo: 'Chromebook', color: 'gray'},
  {type: 'tvs', foo: 'Chromebook', color: 'gray'},
  // ... N
]

const excludes = [
  {k: 'color', v: 'gold'},
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
  // ... M
]


/**
 *  BIG O NOTATION
 */

//  const a = 1;

//  const b = [1,2, 3 , infint]; // n      O(n)

//  // O(n)
//  for (let i = 0; i < b.length; i++) {
//    console.log(b);
//  }

//   // O(n^3)
//   for (let i = 0; i < b.length; i++) {  // n * n * n
//     for (let j = 0; j < b.length; j++) {
//       for (let m = 0; m < b.length; m++) {
//         console.log(j);
//       }
//     }
//   }


function removeExcludes1(items, excludes) {
  excludes.forEach(function(pair) { // M 3
    items = items.filter((item) => item[pair.k] !== pair.v); // N
  });
  return items;
}

console.log(removeExcludes1(items, excludes))





















// (key, value) -> true if should be excluded => O(1)
// excludes2 = {
//   color: {gold: 1, silver: 1},
//   type: {tv: 1},
// }
  
// excludes["color"]

// N >>>> M

function convertArrayToObject(arr) {
  const result = {};
  arr.forEach(el => {
    if (!result[el.k]) {
      result[el.k] = {[el.v]: 1}
    } else {
      if(!result[el.k][el.v]) {
        result[el.k][el.v] = 1
      }
    }
  });
  return result;
}

// 15000 N, 1000 M => 2.5s ==> O(N * M) => x => O(N)
function removeExcludes(items, excludes) {
  // excludes.forEach(function(pair) { // M
  //   items = items.filter((item) => item[pair.k] !== pair.v); // N
  // });
  // return items;
  const excludesMap = convertArrayToObject(excludes);
  return items.filter(item => {
    let shouldBeExcluded = true;
    const itemsKeys = Object.keys(item); 
    itemsKeys.forEach(el => {
      // if map contains the key
      if (excludesMap[el] && excludesMap[el][item[el]]){
          shouldBeExcluded = false;
        }
    })
    return shouldBeExcluded;
  })
  
  
  
  /**
   * 1. Convert the excldues array -> object
   * 2. Use the excludes object to filter items
   */
  
  
}

// console.log(removeExcludes(items, excludes))

// output = [
//   {type: 'laptop', name: 'Chromebook', color: 'gray'},
//   // ...
// ]