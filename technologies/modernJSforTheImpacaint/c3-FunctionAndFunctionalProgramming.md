# Chapter 3 Functions and Functional programming

## 3.1 Declaring functions

To make function we provide

1. Func name
2. Name of params
3. Body of function

```js
function half(x, y){
    return (x + y) / 2
}
```

- `return`: gives yielded result and ends loops
- call func with `funcname(params)`


```js
let b = half(3, 2)
```
- `return`: defaults to undefined

## 3.2 Higher-Order Functions

- JS is functional programing language
- function are values that you can store in variables pass as arguments or return as functions results

```js
let a = half
let b = half(43, 2)
```

- `.map` is used to apply func to every elm in arr
- *higher-oder function*: a function consumes another function

## 3.3 Function literals

- You can use a function as a literal without giving it a name

```js
result = [0, 1, 2, 4].map(function (x) { return 10 * x })
```

- To give it a name just assign the function to a variable


## 3.4 arrow functions

- `=>` is like the `function` keyword
- using `=>` provide parameter variabels to the left and return to the right

```js
const average = (x, y) => (x + y) / 2
const average = () => 4
const average = z => z + 4
const average = (x, y) => {
    a = x + y
    return a
}
}
```

## 3.5 Functional Array Processing

- use `forEach` to pass each arr elm to function

```js
arr.forEach((element, index) => { console.log(`${index}: ${element}`) })
arr.forEach(element => { console.log(`${element}`) })
```

- For each had a side effect and dose not alter the arr but can print are assign a value
- `map()` and `filter()` both alter arr

## 3.6 Closures

- `setTimeout()`: takes two args, func and timer for when to run it

```js

const sayLater = (text, when) => {
  let task = () => console.log(text)
  setTimeout(task, when)
}

sayLater('Hello', 1000)
sayLater('Goodbye', 10000)
```

- We can see the line `let task = () => console.log(text)` is called way latter but the var `text` has stuck around
  
Functions ingredients

  1. Block of code
  2. Paramters
  3. Free Vars: vars but not params or local vars

- **closure**: function with free variables
- **Free variables**: Vars that are used in code but not declared as params or local vars
- The fundamental idea of a closure is very simple: A free variable inside a function means exactly what it means outside. 

- A captured var is a reference to another var not its current value ; changing contant of captured var > visible in closure


## 3.7 Hard Objects

- Since there are no `private` variable in JS we must find a different method of ensuring data is only mutable from provided methods and not direct access
- We do this by keeping the private variable as a local variable then only returning methods and taking advantage of closures

- Make a bank acounts where no one can directly acess the balance

```js
const createAccount = () => {
  let b = 0
  return {
    deposit: amount => {
      b += amount
    },
    withdraw: amount => {
      if (b >= amount)
        balance -= amount
    },
    getBalance: () => b
  }



const harrysAccount = createAccount()
const sallysAccount = createAccount()
sallysAccount.deposit(500)
```
- called *closure pattern*  or *factory class pattern* or *hard objects*

Using [mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) as ref

- When we call a function the local variables only exist during the call, unless they are still being used. If they are being used a closure is created. When defining a function in a function if the interal function uses local variables then those local variables current variables will be captured. This means that the value at the time of call is stored in a anonymous variable. If you return this defined functions or even other functions based on it a closure is made. The internal variables are not accessible so it can be used to mirror Object Oriented Programming.

```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

```js
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.
```

- This can be cons

## 3.8 Strict Mode

- `strict mode`: changed JS rules to make it better for large scale development

#### To use strict mode

To use strict mode place
```js
'use strict'
```
on the first non-comment line of your file.


- You can use function based strict mode but **DONT** use whole file strict mode

### Key Strict Mode features

- Assigning a value to undecleared variables is error not global and must use `let`, `const` or `var`
- Cannot Assign new value to read-only global
- Funcs can only be declared in top level of script or function
- `delete`: cannot delete "unqualified identifiers"(A non configurable prop)
- Cannot dup function params `function av(x, x)`
- octal literal change
- `with` is prohibited

Note

- You need to use `typeof` for a undefined variable or else get reference error 

## 3.9 Testing Arg Types

- In JS you cannot specify type of function args
- You often must check what type a variable is in the function

```js
const average = (x, y) => {
  let sum = 0
  let n = 0
  if (Array.isArray(x)) {
    for (const value of x) { sum += value; n++ }
  } else {
    sum = x; n = 1
  }
  if (Array.isArray(y)) {
    for (const value of y) { sum += value }
  } else {
    sum += y; n++
  }
  return n === 0 ? 0 : sum / n
}
```

- Testing can be complex to check if somthing is a string we use `typeof x === 'string' || x instanceof String` b/c it could be `newString()`

## 3.10 Supplying MOre or Fewer Arguments 

- In JS you can provide more args then are accepted by a function and they are ignored without throwing a error
- If you provide fewer they are changed to `undefined`

```js
const average = (x, y) => (x + y) / 2
let result = average(3, 4, 5) // 3.5—the last argument is ignored
```
## 3.11 default args

- Just like python but you can add a default anywhere

```js
const average = (x = 0, y = x) => (x + y) / 2
```

## 3.12

- Any number of args with `...`

```js
const average = (first = 0, ...following) => {
  let sum = first
  for (const value of following) { sum += value }
  return sum / (1 + following.length)
}
```

- Following is a array with the extra params

#### Spread operator

- The spread operator is `...`. When place before a array in a function call is passes each elm of the arr like a individual item.
- The spread operator can also be used in array creation

```js
let numbers = [1, 7, 2, 9]
result = Math.max(numbers)

let arr = [1, 2, ...numbers]

let g = "hello"
let chars = [...g]
```

### Simulating named args with destructuring

- JS has not "named arg" feature but can be simulated with object literal
- Default values are tedius in this case so we use destruction syntax.

```js
const mkString = (array, {
    separator = ',',
    leftDelimiter = '[',
    rightDelimiter = ']'
  } = {}) => {
  . . .
}
```

- The destructuring syntax { separator = ',', leftDelimiter = '[', rightDelimiter = ']' } declares three parameter variables separator, leftDelimiter, and rightDelimiter that are initialized from the properties with the same names. The defaults are used if the properties are absent or have undefined values.

REVIEW

## 3.14 Hoisting

### AVOID HOISTING WITH

- Dont use `var`
- Use strict mode
- Declare vars and functions before use

- Pretty much js scopes are confusing and strange


## 3.15 Throwing Exceptions

- when it fails a function can throw a error
- `throw`: throws a exception `throw value`
- Can throw any type but usually `error` type is useful
- `throw`: stops execution and goes to nearest `catch` or `finally`

```js
let reason = `Element ${elem} not found`
throw Error(reason)
```

## 3.16 Catching Exceptions

- `try`: used to catch exceptions
- `catch`: code to be run if there is a error takes a error as a parameter

```js
try {
  // Do work
  . . .
} catch (e) {
  // Handle exceptions
  console.log(e)
  throw e //throw to handler
} 
```

### 3.17 `finally`

- `try` statement can have a `finally` clause which will execute even if a exeption did not occur
- it purpose is to relinquish resources

```js
try {
  . . .
} catch (e) {
  . . .
} finally {
  . . .
}
```