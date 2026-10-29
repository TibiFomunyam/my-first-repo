// Function 1: Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Function 2: Find the largest of three numbers
function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
}

// Function 3: Reverse a string
function reverseString(text) {
    return text.split("").reverse().join("");
}

// Test Function 1
console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));
console.log("Is 0 even?", isEven(0));
console.log("Is -6 even?", isEven(-6));

// Test Function 2
console.log("Largest:", largestOfThree(3, 8, 5));
console.log("Largest:", largestOfThree(12, 4, 9));
console.log("Largest:", largestOfThree(2, 6, 15));

// Test Function 3
console.log("Reverse hello:", reverseString("hello"));
console.log("Reverse JavaScript:", reverseString("JavaScript"));
console.log("Reverse A:", reverseString("A"));