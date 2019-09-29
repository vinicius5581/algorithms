/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I


3x

0,  , 4,  , 8,  ,12
1, 3, 5, 7, 9,11,13
2,  , 6,  ,10,  ,14

4x

0,  ,  , 6,  ,  ,12     // n,  ,n + (n/2 + 1)
1,  , 5, 7,  ,11,13     
2, 4,  , 8,10,  ,14
3,  ,  , 9,  ,  ,15


5x
0,  ,  ,  , 8,  ,  ,  ,17
1,  ,  , 7, 9,  ,  ,16,
2,  , 6,  ,10,  ,14,  ,
3, 5,  ,  ,11,13,  ,  ,
4,  ,  ,  ,12,  ,  ,  ,



 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const rows = [...new Array(numRows)].map(row => []);
    let currRow = 0;
    let direction = 'down';
    const topRow = 0;
    const bottomRow = numRows - 1;
    for(let currChar = 0; currChar < s.length; currChar++) {
        if (currRow === topRow) {
            direction = 'down';
        }
        if (direction === 'down') {
            rows[currRow].push(s.charAt(currChar));
        } else if (direction === 'up') {
            for (let row = 0; row < numRows; row++) {
                if (row === currRow) {
                    rows[row].push(s.charAt(currChar));
                } else {
                    rows[row].push(null);
                }  
            }
        }
        if (currRow === bottomRow) {
            direction = 'up';
        }
        if (direction === 'up') {
            currRow--;
        }
        
        if (direction === 'down') {
            currRow++;            
        }
    }
    console.table(rows)
    return(rows.map(row => row.filter(r => !!r).join('')).join(''));
};

// console.log(convert("0123456789", 3));
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("AB", 1));

// PAHNAPLSIIGYIR