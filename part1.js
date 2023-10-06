function calculate(num1, operator, num2) {
    // TODO
    // Step 2: Switch on the operator
    // alert(operator)
    // alert(typeof(operator))
    switch (operator) {
        // Step 3: Handle addition
        case "+":
            return num1 + num2;

        // Step 4: Handle subtraction
        case "-":
            return num1 - num2;

        // Step 5: Handle multiplication
        case "*":
            return num1 * num2;

        // Step 6: Handle division
        case "/":
            return num1 / num2;

        // Step 7: Handle invalid operator
        default:
            alert("operator error");
    }
}

// Get input from user
// ask the user for the first number
var num1 = parseFloat(prompt("Enter a number:"));
// ask the user for the operator
var operator = prompt("Enter an operator (+, -, *, /):");
// ask the user for the second number
var num2 = parseFloat(prompt("Enter another number:"));

// Perform calculation and display result
// perform the calculation based on the operator, and display the result
var result = calculate(num1, operator, num2);
alert("Result: " + result);