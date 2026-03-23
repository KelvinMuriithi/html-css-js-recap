function calculation(a, b) {
    
    function add() {
        return a + b;
    }
    function subtract() {
        return a - b;
    }
    function multiply() {
        return a * b;
    }
    function divide() {
        return a / b;
    }

    return add() + " " + subtract() + " " + multiply() + " " + divide();
}

console.log(calculation(5, 10)); // Output: 15