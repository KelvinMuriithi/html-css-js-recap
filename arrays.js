let numbers = [1, 2, 3, 4, 5];
console.log(numbers)
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// console.log(numbers[5]) // undefined

// array operations
// adding an element to the end of the array
// numbers[5] = 6
// numbers.push(6)
// console.log(numbers)
// adding an element to the beginning of the array
// numbers[0] = 0
// numbers.unshift(0)
// console.log(numbers)
// removing the last element of the array
// numbers.pop()
numbers.splice(numbers.length - 1, 1)
console.log(numbers)
// console.log(numbers.length) // 1

let mixedArray = [1, "Hello", true, null, undefined, {name: "Alice"}, [1, 2, 3]]
console.log(mixedArray)