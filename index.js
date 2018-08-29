
function sum(low, high) {
  if (low + 1 === high) {
    return low + high;
  }
  return sum(low, high - 1) + high;
}
console.log(sum(2, 5));

module.exports = sum;