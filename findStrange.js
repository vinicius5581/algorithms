function smallestUnusualNumber(a) {
    let candidate = parseInt(a) - 1;
    let isUnusual = false;
    let sum;
    let prod;
    while(!isUnusual) {        
      candidate++;
      const numbers = candidate.toString().split('').map(n => parseInt(n));
      sum = numbers.reduce((a, b) => a + b, 0);
      prod = numbers.reduce((a, b) => a * b, 1);
      isUnusual = sum > prod;
    }
    return candidate - parseInt(a);
  }
  

  console.log(smallestUnusualNumber('22'));