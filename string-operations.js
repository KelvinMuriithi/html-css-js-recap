let studentName = "John Doe"
let age =18
// interpolation operation
console.log(`Hello my name is ${studentName} and I am ${age} years old`)
// concatenation operation
console.log("Hello my name is "  + studentName + " and I am "  + age + " years old.")
// string manipulation operations using js methods
let upperCaseName = studentName.toUpperCase()
console.log(upperCaseName)
let lowerCaseName=studentName.toLowerCase()
console.log(lowerCaseName)

// getting the length of a string and checking if a string contains a specific word
let length = studentName.length
console.log(length)
let hasJohn = studentName.includes("z")
console.log(hasJohn)

// plucking a specific character from a string
let firstChararacter = studentName.charAt(0)
console.log(firstChararacter)
let lastCharacter = studentName.charAt(studentName.length - 1)
console.log(lastCharacter)
let fifthCharacter = studentName.charAt(4)
console.log(fifthCharacter)