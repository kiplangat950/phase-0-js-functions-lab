
function calculateTax(amount) {
    return amount * 0.10;
}


function convertToUpperCase(text) {
    return text.toUpperCase();
}


function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}


function isPalindrome(word) {

    const reversed = word.split('').reverse().join('');
    return word === reversed;
}


function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
console.log("--- 1. calculateTax ---");
console.log(calculateTax(100) === 10); 
console.log(calculateTax(50) === 5); 
console.log("\n--- 2. convertToUpperCase ---");
console.log(convertToUpperCase("hello") === "HELLO"); 
console.log(convertToUpperCase("moringa") === "MORINGA"); 

console.log("\n--- 3. findMaximum ---");
console.log(findMaximum(5, 10) === 10);
console.log(findMaximum(45, -3) === 45);

console.log("\n--- 4. isPalindrome ---");
console.log(isPalindrome("racecar") === true); 
console.log(isPalindrome("hello") === false); 

console.log("\n--- 5. calculateDiscountedPrice ---");
console.log(calculateDiscountedPrice(100, 20) === 80);
console.log(calculateDiscountedPrice(50, 10) === 45); 