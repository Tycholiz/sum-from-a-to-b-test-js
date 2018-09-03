const factorial = (low, high) => {
  if (low > high) {
    return 0;
  }
  return low + factorial(low + 1, high);
}

console.log(factorial(3, 4));