# Chapter 2 Control Structure
## 2.1 Exprestions and Statements

In JavaScript expressions and statements are different

**Statements**: never have a value they are executed to get a effect

**Expressions**: have value which is used

```js
let number = 6 * 7;
```
This is a statement with the effect of initializing the number variable: called *variable declaration*

Other common type are branches and loops

*expression statement*: a statement that is a statement followed by a semi colon

```js
console.log(6 * 7);
```

That is what a read-eval-print loop, or REPL, does: It reads an expression, evaluates it, and prints the value.

REPL Displayes the outcome of the statement

## 2.2 Semicolon Insertion

The basic rule is simple. When processing a statement, the parser includes every token until it encounters a semicolon or an “offending token”—something that could not be part of the statement. If the offending token is preceded by a line terminator, or is a }, or is the end of input, then the parser adds a semicolon.

The “offending token” rule is simple, and it works well in almost all cases. However, it fails when a statement starts with a token that could have been a part of the preceding statement. Consider this example:

```js
let x = a
(console.log(6 * 7))
```

Never start a statement with ( or [. Then you don’t have to worry about the statement being considered a continuation of the previous line.

Second rule: A semicolon is inserted after a nonlinear control flow statement

*non linear control flow statements*: `break`, `continue`, `return`, `throw` or `yeild`

```js
return
  x + someComplicatedExpression;
//a semicolon is inserted after nonlinear control flow statemnet
return; 
  x + someComplicatedExpression;
```

 A semicolon is inserted if a ++ or -- is immediately preceded by a line terminator.

```js
x
++
y
```
goes to 
```js
x;
++y;
```

## 2.3 Branches

```js
if (condition) statement
\\or
if (condition) 
        statement
\\or
if (condition) {
        statement
        statement
} else if {
        statement 
} else {
        statement 
}
```

You can put a full if statement on a single line

```js
if (yourSales > target) bonus = 100; else bonus = 0`
```

### `?:` operator
```js
if (x > y) max = x; else max = y
```

This statement is ugly. Instead we use

`conditon ? first : second`

```js
let max = x > y ? x : y
```

## 2.4 Boolishness

- `false`, `0`, `null`, `NaN`, `undefined` and `""` all a `falsy`
- Everything else is `truthy`

You often want to explictly code

```js
if (p === True)
```

## 2.5 Comparison and Equality Testing

1. `<` less than
2. `<=` less than or equal
3. `>` more than
4. `>=` more than or equal
5. `===` strict equal to
6. `!==` not strictly equal to

### NaN note

You cannot compare `NaN` in comparison statement (they are always considerd different) use `Number.isNaN(x)` or `Objects.is(NaN, NaN)`

### Obj notes

Testing object equality tests if the variables point to the same object.

## 2.6 mixed Comparisons

Follow goldern rule 3 avoid mixed comparisons

## 2.7 Boolean operators

1. `&&` and
2. `||` or
3. `!` not

Work as expected

### Bizarre behavior

``js
0 && 'Harry' // 0
0 || 'Harry' // 'Harry'
\\can be used
let result = arg && arg.someMethod()
\\or
let result = arg.someMethod() || defaultValue
\\Both break down if method returns zero "" or false
```

The expression `x ?? y` yields `x` if `x` is not undefined or null, and `y` otherwise. In the expression

`x?.propertyName` yields the given property if `x` is not `undefined` or `null`, and `undefined` otherwise. 

```js
let recipientLength = person?.name?.length
```
## 2.8 the switch statement

```js
let a = ''
swtich (expression) {
        case 0:
                a = 'adf'
                break
        case "3232":
                a = 'adf'
                break
        case true:
                a = 'adf'
                break
        default:
                a = 'sdfs'
}
```

*NOTE*: when you use switch instead of if the VM can used a jump table

## 2.9 `while` and `do` loops

```js
while (condition) statement
do statement while (condition)
```

both behave as expected

## 2.10 `for` loops

### 2.10.1 The classic `for` loop

```js
for (let i = 1; i <= 10; i++)
        console.log(i)
```

### 2.10.2 `for of` loop

`for of` interate over the elemnets of a iterable object, for example arrays

```js
let arr = [, 2, , 4]
arr[9] = 100
for (const element of arr)
  console.log(element)
```

This loop goes from 0 to `arr.length - 1`

`For of` goes through all the code points of a unicode string

### 2.10.3 The `for in` loop

You cant use `for of` loop on a obj. You want both keys and values.

```js
let obj = { name: 'Harry Smith', age: 42 }
for (const key in obj)
  console.log(`${key}: ${obj[key]}`)
```

It can also be used for the props of a array

```js
let numbers = [1, 2, , 4]
numbers[99] = 100
for (const i in numbers)
  console.log(`${i}: ${numbers[i]}`) //logs '0', '1', '3', '99'
```

## 2.11 Breaking and Continuing

Sometimes, you want to exit a loop as soon as you reach a goal.

```js
let i = 0
while (i < arr.length) {
  if (arr[i] < 0) break
    i++
    }
```

In this loop when a given ellemnet is found it stops that loop. You could also just use a bool.

*labeled break*: lets you break out of nested loops. Not common

```js
let i = 0
let j = 0
outer:
while (i < arr.length) {
  while (j < arr[i].length) {
      if (arr[i][j] < 0) break outer
          j++
            }
              i++
        j = 0
}
```

`continue`: transfers control to the end of teh innermost encloseing loop

```js
let count = 0
let sum = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 0) continue
    count++
      sum += arr[i]
      }
let avg = count === 0 ? 0 : sum / count
```

Many do not use `break` and `continue`

## 2.12 Catching Exceptions

If a JS method is unable to complete its task, it can **Throw a exception**. Exuction stops and a **catch clause** is executed. If it is not caught the program terminates.

`try`: catches execptions

```js
try {
        code
        more code
} catch {
        handler
}
```

If a handler you could log infromation or take other actions
