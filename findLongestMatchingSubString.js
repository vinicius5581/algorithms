/**
 * @description
 * Find the longest matching substring on two strings. 
 * There can be characters in between the substrings chars.
 *
 *  e.g.:
 * 
 * Given: "ABCDEF" and "ABCDEF"
 * Should return: ABCDEF
 * 
 * @param {string} s1 
 * @param {string} s2 
 */

const longestSubSeq = (s1, s2) => {
    let longest = "";
    const s1Length = s1.length;
    let count = 0;
	for (let i = 0; i < s1Length; i++) {
        let candidateS1CharIndex = 0;
        let result = "";
        let subString = s2;
        while ((s1Length !== 1 && candidateS1CharIndex !== s1Length) && (subString.length + result.length > longest.length)) {
            candidateS1Char = s1.charAt(candidateS1CharIndex);
            candidateS1CharIndex++;            
            const candidateS2CharIndex = [...subString].findIndex(char => char === candidateS1Char);    
            const match = subString.charAt(candidateS2CharIndex);
            result += match
            if (result.length > longest.length) {
                longest = result;
            }  
            subString = subString.substring(candidateS2CharIndex + 1);
            count++; 
        }        
    }
    return `${longest} in ${count} runs`;
}

console.log('"ABCDEF", "ABCDEF": ',longestSubSeq("ABCDEF", "ABCDEF"));
console.log('"ABAZDC", "BACBAD": ',longestSubSeq("ABAZDC", "BACBAD"));
console.log('"aa", "aaaa": ',longestSubSeq("aa", "aaaa"));
console.log('"", "aaaa": ',longestSubSeq("", "aaaa"));
console.log(longestSubSeq("ABFDESG", "ABCDESG"));