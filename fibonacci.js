// return a fibonacci sequence

// result = 2 numbers of the sequence // start point
// len = how many numbers to print

const fibonacci = (result, len) => {
    let num1 = result[0];
    let num2 = result[1];
    let next;
    let cnt = 2;
    
    while (cnt <= len) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result.push(next);
        cnt++;
    }
    return result;
}

console.log(fibonacci([0,1], 15));


function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}


function fibonacciRecursive(result, len) {
    if (result.length >= len) {
        return result;
    }
    result.push(result[result.length-2] + result[result.length - 1]);
    return fibonacci(result, len);
}

console.log(fibonacciRecursive([0,1], 15));


