#Chapter 1 Values and Variables

## Section 1.1 Running JavaScript

### Options for running JavaScript

1. Add a script to a HTML file and open it in your browser
```html
<html>
   <head>
      <title>My First JavaScript Program</title>
      <script type="text/javascript">
         let a = 6
         let b = 7
         window.alert(a * b)
      </script>
   </head>
   <body> </body> ```
2. Use the developer console with the F12 key
3. Install and use Node.js and run a "read-eval-print-loop" or REPL
4. For longer code put the code in a file and use `console.log` to print then run it as `node fileName.js`
5. Use a ODE like VS code, Eclipse, komodo or WebStorm

## Section 1.2 Type and the `typeof` operator

A value in JS can be one of the following

1. Number
2. Boolean
3. Special values `null` and `undefined`
4. String
5. symbol
6. Object

**primitive type**: non-object types

`typeof` returns the type of a var

## Section 1.3 Comments

There are sing line `//` comments and multi line `/* */` comments

```js
//single
/*
multi line
*/
```

## 1.4 Variable Declarations

### `let`

- `let` lets you store a var
- Variables do not have type in JS so you can store whatever you want in them
- Swiching var type is often not good
- by default vars are `undefined`

```javascript
let a //undefined
let a = 4
let a = "sring"
```

### `const`

- If you never want to change a variables value you use `const`
- `const` vars will through error on change

### multi def and `var`

you can define multiple values at once

```js
const F = 123, D = 12
let d,s
```

*var* has issues and so is deprecated do not use it

### **GOLDEN RULES**

1. Declare vars with `let` or `const` never `var`
2. use strict mode

## 1.5 Identifiers

Generics syntax for identifiers.

- letters digits `_` and `$` can be used
- tend not to use `_` and `$` at start or end as they signal info
- use `camelCase`
- You can not use keywords

## 1.6 Numbers

- All nums in js are double-precision floating-point
- You will have not rounding errors if you stay between `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTERGER`
- B/C of round off errors cents should be represented as a integer multiple of a penny
- `parseFloat` or `parseInt` converts a string to a number and `toString` goes back

```javascript
const notQuitePi = parseFloat('3.14')
const evenLessPiString = (3).toString() // The string '3'
```

- `Math.trunc()` truncates decimal
- `Math.round()` rounds to the nearest integer

## 1.7 Arithmetic Operators

- js uses `+ - * /`
- `/` always return float
- `%` gives remainder
- `**` to the power of
- any `nan` in eq leads to `nan` result
- `+=` etc.
- `++` and `--`

some hate `++` and `--` b/c of post and pre incremnet

- `+` can also be used for string concatenation

There is a concat concerstion table I should get

You should not rely on these rules and should instead expliclty convert them

## 1.8 Boolean Values

`0`, `NaN`, `null`, `undefined`, and `""` converted to `false` all others `true`

## 1.9 `null` and `undefined`

Two ways to indicate absence of a value

1. `undefined`: when you call a function
2. `null`: a intentional absent value

When starting a project you should decent between `null` and `undfined`

## 1.10 String literal

- Enclosed in `'string'` or `"string"`
- `\` is used to escape
- You can include UTF-8 or \u{}
- Some chars needs two code units in uni-code

## 1.11 Template Literals

**Template literals**: string that can compute expression and snap multiple lines `\`\``

the form `${}` is used to show where in process code

```javascript
let greeting = `Hello, ${destination.toUpperCase()}!` // A template literal
```

## 1.12 Objects

- In js objects are just name/value pairs

```js
let p = { name: 'Harry Smith', age: 42 }
let page = p.age
```

- You can mutate tha values in a `const` object but not totaly reasign the value
- `delete` operater to remove prop
- acessing a ellemnt that dose not exist returns `undefined`

## 1.13 objects literal syntax

```js
let age = 43
let harry = { name: 'Harry Smith', age: age }
let harry = { name: 'Harry Smith', age } // The age property is now 43
//brackets can be used for computed properteis
let harry = { name: 'Harry Smith', [field.toLowerCase()] : 42 }
//if it dose not follow identfier you can decalre it as string (always will be string)
let harry = { name: 'Harry Smith', 'favorite beer': 'IPA' }
//Bracket notation can be used
harry['favorite beer'] = 'Lager'
```

## 1.14 Arrays

```js
const numbsers = [23, 323, 1, 'are']
const numbsers = [23, , 1, 'are'] //no prop 1 returns undefined at that index
numbers['1'] 
numbers[1]//auto converted to string
```

- 'length` methods gets the max index + 1
- the index is always technically a string b/c numbers cannot be identifiers
- arrays are objects

## 1.15 JSON

JSON is a lightweight text format for exchanging object data between applications

- Values are object literals, array literals, strings, floating-point numbers, and the values true, false, and null.
- All strings are surrounded by `""`
- Props names have `""`
- No trailing commas or skipped elements

- `JSON.stringify` converts JSON to JSON string
- `JSON.pars` Parses JSON string to JS object
- Stringify turns undefined props to null

## 1.16 Destructing

Destructing is a convenient syntax for fetching the elements of an array or values of an object.

```js
let first = pair[0]
let second = pair[1]
//goes to
let [first, second] = pair
let [first, [second, third]] = [1, [2, 3]]
[x, y] = [y, x] //swaps values
let [first, second] = [1, 2, 3]//only, 1 and 2 are set
```

- Left hand side can be and `lvalue`

```js
let { name, age } = harry
\\ =
let { name: name, age: age } = harry
\\ =
let name = harry.name
let age = harry.age

## 1.17 advanced Destructing

### 1.17.1 More About Object Destructing

You can destructure nested objects

```js
let { birthday: { year: patsBirthYear } } = pat
```

### 1.17.2

```js
numbers = [1, 7, 2, 9]
let [first, second, ...others] = numbers   // first is 1, second is 7, and others is [2, 9]
```

### 1.17.3

You can set defaults if the needed value is not present

```
let { nickname = 'None' } = harry //if harry has no nickname then set to `null`
```

