function greet(){
    console.log("Hello, World!");
}
// greet()

function greetUser(studentName){
    return "Hello, " + studentName + "!";
}
// console.log(greetUser("Alice"))

function add(a, b){
    return a + b;
}

let sumOfTwoNumbers = add(50, 30)
// console.log(sumOfTwoNumbers)

//Get the even numbers in between 1 and 15
// the algorithm
// 1. Create an empty array to store the even numbers
// 2. Loop through the numbers from 1 to 15
// 3. For each number, check if it is even (i.e., divisible by 2)
// 4. If it is even, add it to the array of even numbers
// 5. Return the array of even numbers

function getEvenNumbers(start, end){
    let evenNumbers = []
    for(let i = start; i <= end; i++){
        if(i % 2 === 0){
            evenNumbers.push(i)
        }
    }
    return evenNumbers
}

let evenNumbersBetween1And15 = getEvenNumbers(1, 15)
console.log(evenNumbersBetween1And15)        



let memberName = "Alice"
let upperCase = memberName.toUpperCase() // this will not change the value of name
console.log(upperCase) // Alice









// let age =null;
// let studentAge;
// console.log(age) // null
// console.log(studentAge) // undefined
