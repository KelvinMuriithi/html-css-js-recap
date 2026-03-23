// function calculation(a, b) {
    
//     function add() {
//         return a + b;
//     }
//     function subtract() {
//         return a - b;
//     }
//     function multiply() {
//         return a * b;
//     }
//     function divide() {
//         return a / b;
//     }

//     // return add() + " " + subtract() + " " + multiply() + " " + divide();
// }

// console.log(calculation(5, 10)); // Output: 15

// convert the above code to use arrow functions


const calculation = (a,b) =>{
    const add = () => a + b;

    return add()
}
console.log(calculation(5, 10)); // Output: 15