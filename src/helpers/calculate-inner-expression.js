/* eslint-disable no-unused-expressions */
import debug from 'debug';

const debugCalculate = debug(`${process.env.DEBUG_NAMESPACE}::helper::calculate-inner-expression`);

const mathOperations = ['+', '-', '*', '/'];

const calculateInnerExpression = (array) => {
  // Clone array
  const arr = [...array];
  // Check if first number is negative and splice in case it is
  arr[0] === '-' && arr.splice(0, 2, arr[1] * -1);

  // check if correctly formated
  // arr length has to be odd
  if (arr.length % 2 === 0) return false;

  // all even elements have to be number
  // and the odd elements have to be a mathematical operation
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0 && isNaN(Number(arr[i]))) return false;
    if (i % 2 !== 0 && !mathOperations.some((op) => op === arr[i])) return false;
  }
  // Clone array
  const result = [...arr];

  // calculate divisions and multiplications first
  let i = 0;
  while (i < result.length) {
    if (result[i] === '*') {
      result.splice(i - 1, 3, result[i - 1] * result[i + 1]);
      i = 0;
    }
    if (result[i] === '/') {
      result.splice(i - 1, 3, result[i - 1] / result[i + 1]);
      i = 0;
    }
    i += 1;
  }
  // calculate addition and subtraction
  debugCalculate('mulDiv', result);
  i = 0;
  while (i < result.length) {
    if (result[i] === '+') {
      result.splice(i - 1, 3, result[i - 1] + result[i + 1]);
      i = 0;
    }
    if (result[i] === '-') {
      result.splice(i - 1, 3, result[i - 1] - result[i + 1]);
      i = 0;
    }
    i += 1;
  }
  debugCalculate('addSub', result);
  return result[0];
};

export default calculateInnerExpression;
