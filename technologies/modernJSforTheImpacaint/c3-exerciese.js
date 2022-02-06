'use strict'
//Chapter 3 exercises

// 1: indexof returns the key for the specified value

/*const indexOf = (arr, value) => {
    for (let i in arr) {
        if (arr[i] === value) return i
    }
}

let s = "a string"
let o = {test: 3, a: 53}

console.log(indexOf(o, 53))
*/

//2 Rewrite the indexOf function of Section 3.1, “Declaring Functions” (page 51), so that it has a single return at the end.

const indexOf = (arr, value) => {
    let i = 0
    while (i < arr.length) {
        if (arr[i] === value) break
        i ++
    }
    return i
}

let o = {test: 3, a: 53}
console.log(indexOf(o, 53))


//3

const funcHighLow = (f, low, high) => {
    let arr = []
    for (let  i = 0; i <= high; i++) {
        console.log(i)
        arr.push(f(i))
    }
    return arr
}

let b = funcHighLow(function (b) {return 2 + b}, 4, 6)
console.log(b)

//4 

const posDecrease = (x, y) => {
    if(x > y) return -1
    else if(x < y) return 1
    else return 0
}

const stringIncreaseLength = (x, y) => {
    if(x.length < y.length) return -1
    else if(x.length > y.length) return 1
    else return 0
}

let a = [3, 2, 4,1 ,2, 64]

console.log(a.sort(posDecrease))

let s = ['test', 'blue', 'hello there', 'hi']

console.log(s.sort(stringIncreaseLength))

//5 
 
function constructCounter() {
    let count = 0
    return {
        count: () => {
            return count += 1
        }
    }
    
}

let counter1 = constructCounter()
console.log(counter1.count())
console.log(counter1.count())

//6

function f(a=1, b=2){ console.log(`a=${a}, b=${b}`) }
f()
f() // a=1, b=2
f(a=5) // a=5, b=2
f(a=7, b=10) // a=7, b=10
f(b=10, a=7) // Order is required: a=10, b=7

//Its just postional and 
//7

const average = (...input) => {
    let sum = 0
   for (let i in input) {
       sum += input[i]
   }
   return sum
}

console.log(average(23, 23, 1,2 , 2))

//8
//A arr of chars

const toArrs = (...str) => {
    return str

}

console.log(toArrs("Thesis terst"))

//9

const mkString = (array, {
    separator = ',',
    leftDelimiter = '[',
    rightDelimiter = ']'
    } = {}) => {
    let str = ""
    for (let i in array) {
        str = str.concat(array[i])
    }
    return str
}

console.log(mkString(["H", "i"]))


//10

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 1000 * i)
}


//11

const fac = n => n > 1 ? n * fac(n - 1) : 1

//B/c the function is hoisted it can be used whithen its own declaration 

//12

//if (Math.random() < 0.5) {
  //say('Hello')
 // function say(greeting) { console.log(`${greeting}!`) }
//}
//say('Goodbye')

//in non-strcit it works b/c the func say is hoisted

//13

const avrg = (...nums) => {
    let sum = 0
    for (let i in nums) {
        if (typeof nums[i] === 'number'|| nums[i] instanceof Number) {
           sum += nums[i] 
        }
        else {
            throw Error("Must use only Numbers")
        }
    }
    return sum / nums.length    
}

let av = avrg(2, 4, '3', 8)
console.log(av)

//14

