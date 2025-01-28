# TypeScript Function with Optional Parameters and Error Handling

This repository demonstrates a common error in TypeScript functions involving optional parameters and error handling.  The `calculateArea` function calculates the area of a rectangle or triangle.  However, it has several issues:

1. **Incorrect Handling of Optional Parameters:** The `height` parameter is optional, but the function doesn't handle the case where it's missing for the `rectangle` shape. This should never happen in this case.
2. **Poor Error Handling:** The `default` case in the `switch` statement throws a generic error.  A more informative error message would improve debugging.

The `bugSolution.ts` file provides a corrected version of the function that addresses these issues.
