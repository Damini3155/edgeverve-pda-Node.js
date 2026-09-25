/**
 * Node.js Functions Overview:
 * In Node.js (JavaScript runtime), functions are defined using the `function` keyword,
 * followed by the function name and parameters in parentheses.
 * 
 * Key Points:
 * 1. Data types are not explicitly specified for parameters (Dynamic Typing).
 * 2. Function argument counts do not need strict type checking at signature level.
 * 3. Follows standard JavaScript function execution rules.
 */

// Function declaration to calculate multiplication of two numbers
function multiply(num1, num2) {
    // It returns the multiplication of num1 and num2
    return num1 * num2;
}

// Declare variables
let x = 2;
let y = 3;

// Display the answer returned by multiply function
console.log("Multiplication of", x, "and", y, "is", multiply(x, y));
