#Chapter 2 notecard

Statements: Lines that have a side effect

Expressions: Lines htat asses to a value

variable declaration: a statemant that that initialized a variable

exprestion statement: a basic statement followed by a semi-colon

REPL: read-eval-print-loop the mothoud used in nodejs for code evaluation

Semicolon inserstion: how the paser automaticly inserts semi-colons with 3 rules

The 3 rules of semicolon insertion: 1 Offening token 2 After nonlinear control flow statemnt 3 if ++ or -- is precced by line termintor

Should you start a statement with [ or (: no becuse the offending token rule will see this as a continuation of the first statement

Non-linear control flow statements: `break`, `continue`, `return`, `throw` or `yeild`

## 2.3 branches

What dose a single line if statement look like: if (condition) statement

What surounds the condition of a if statement: parenthisis

is the format elif or else if: else if

How do you deffine a variable with a if statement in one line: conditon ? first : secound

What is assed to falsey: 0, null, NaN, undefined and empty string

## 2.5 Comparison and Equality testing

List the comparison operators: <, <=, >, >=, ===. !==

What is the difference between === and ==: === is strict and will not morph types

If two varibales are NaN what will happen if you test if theu are true: You will get false as all NaN's are differnet
