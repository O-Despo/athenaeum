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
- The fundamental idea of a closure is very simple: A free variable inside a function means exactly what it means outside. 
