# js-calculator
A numerical expression is understood as a set of numbers combined with operation signs (addition, subtraction, multiplication and division) that can also contain parentheses, square brackets (“[“ and “]”) and curly braces (“{” and “}” )

To correctly solve an expression, the following order must be applied in the operations. First, the operations in brackets, brackets, and braces (where all three have the same priority) are performed, then multiplications and divisions are performed from left to right, and finally, addition and subtraction are performed in the same order above.

Implement an algorithm that solves a numerical expression and returns its result.

Examples:
````
(16+4)/5-{5+8}*[1-2] → 17
5*9-3+{2-1}*(9-[24/8]) → 48
[{(15-5)*5}/2]+(8-2)*{25+2} → 187
{3+5}*2/(4+4)+0*(-68+25 → Syntax error

````