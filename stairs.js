// r
// x 
// y 

// n number of steps
// possible steps

/*
            ***    0
          ***      1 
        ***        2
      ***          3
    ***            4
  ***              5
***                6

*/

// 0  [[0,0]] 
// 1  [[1,0]]
// 2  [[2,1],[1,0]], [[2,0]]
// 3  [[3,2],[2,1],[1,0]], [[3,2],[2,0]], [[3,1],[1,0]] 
// 4  [[4,3],[3,2],[2,1],[1,0]], [[4,3],[3,2], [2,0]], [[4,3],[3,2],[2,1],[1,0]], [[4,3]],[[3,1][1,0]],[[4,2], [2,0]]

function stairsWays(n, ways = {fromCache: 0, calculated: 0}) {    
    console.log(ways)
    if (ways[n]) {
        console.log(`${n} = ${ways[n]} :: FROM CACHE`)
        ways.fromCache++;
        return ways[n];
    } else {
        let result;        
        if (n === 0 || n === 1) {
            result =  1;
            ways[n] = result;
        } else {
            result = stairsWays(n - 1, ways) + stairsWays(n - 2, ways); 
            ways[n] = result;
        }
        console.log(`${n} = ${result} :: CALCULATED`)
        ways.calculated++;
        return result;
    }
}

console.log(stairsWays(3))