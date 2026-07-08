function squareSum(numbers){
  const newNum = numbers.map(n => n * 2);
  const total = newNum.forEach( n => n + n);

  return total;
  // if (total === num) return true; else return false;
}

console.log(squareSum([1,2]));
