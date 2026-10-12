//Debugging tools in Node.js
// 1.console.log() and console.error()

function calculateTotalPrice(price, quantity) {
  debugger;
  const total = price * quantity;
  return total;
}

const result = calculateTotalPrice(100, 5);
console.log(result);
