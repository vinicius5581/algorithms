// Given
var endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

const a = endorsements.reduce((acc, val) => {
    console.log('acc: ', acc);
    console.log('val: ', val);
    return acc;
},[]);

// Result
var expectedResult = [
    { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
    { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
    { skill: 'html', user: ['Sue'], count: 1 }
]; 

/**
 * @endorsements: array of shape {skill: string user s}
 */
// const groupBySkill0 = endorsements => { 
   
//     const skills = [...new Set(endorsements.map(el => el.skill))]; // [css, javascript, html];
    
//     return skills.map(userSkill => { 
//         const usersPerSkill = endorsements.filter(endorsement => endorsement.skill === userSkill).map(el => el.user);
//         return {
//             skill: userSkill,
//             user: usersPerSkill,
//             count: usersPerSkill.length
//         }
//     })
// }


// console.log(groupBySkill0(endorsements));

const groupBySkill1 = (endorsements) => { 
    const cache = {};
    for (let i = 0; i < endorsements.length; i++) { 
        if (!cache[endorsements[i].skill]) {
            cache[endorsements[i].skill] = {
                skill: endorsements[i].skill,
                user: [endorsements[i].user],
                count: 1
            }
        } else { 
            cache[endorsements[i].skill].user = user.push(endorsements[i].user);
            cache[endorsements[i].skill].count = count++;
            // cache[endorsements[i].skill] = {
            //     ...cache[endorsements[i].skill],
            //     user: user.push(endorsements[i].user),
            //     count: count++
            // }
        }
    }
    return Object.values(cache);
}

// groupBySkill1(endorsements)


const groupBySkill2 = (endorsements) => { 
    const cache = {};
    for (let i = 0; i < endorsements.length; i++) {         
        if (!cache[endorsements[i].skill]) {
            cache[endorsements[i].skill] = {
                skill: endorsements[i].skill,
                user: [endorsements[i].user],
                count: 1
            }
        } else { 
            cache[endorsements[i].skill].user.push(endorsements[i].user);
            cache[endorsements[i].skill].count++;          
        }
    }
    return Object.values(cache);
}

// console.log(groupBySkill2(endorsements));


const groupBySkill3 = (endorsements) => { 
    const cache = {};
    for (let i = 0; i < endorsements.length; i++) { 
        if (!cache[endorsements[i].skill]) {
            cache[endorsements[i].skill] = {
                skill: endorsements[i].skill,
                user: [endorsements[i].user],
                count: 1
            }
        } else { 
            cache[endorsements[i].skill].user.push(endorsements[i].user);
            cache[endorsements[i].skill].count++;
        }
    }
    return cache;
}

// console.log(groupBySkill3(endorsements))


const groupBySkill4 = (endorsements) => { 
    // const cache = {};
    // for (let i = 0; i < endorsements.length; i++) {         
    //     if (!cache[endorsements[i].skill]) {
    //         cache[endorsements[i].skill] = {
    //             skill: endorsements[i].skill,
    //             user: [endorsements[i].user],
    //             count: 1
    //         }
    //     } else { 
    //         cache[endorsements[i].skill].user.push(endorsements[i].user);
    //         cache[endorsements[i].skill].count++;          
    //     }
    // }

    const resultado = endorsements.reduce((result, currEndors) => {
        const currentSkill = currEndors.skill;
        const candidateResult = {};
        // console.log(result);
        if (!result[currentSkill]) {
            result.skill = {
                skill: currentSkill,
                user: [currEndors.user],
                count: 1
            }
        } else { 
            result[currentSkill].user.push(currEndors.user);
            result[currentSkill].count++;          
        } 
        return result;
    },{});

    console.log(resultado);

    // return Object.values(cache);
}

// console.log(groupBySkill4(endorsements));


const testFun = arr => {
    return arr.reduce((acc, curr) => {},{});
}

// console.log(testFun([{a: 1, b: 2},{a: 3, b: 4}]));