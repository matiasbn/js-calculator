import debug from 'debug';
import calculateInnerExpression from './calculate-inner-expression';

const debugCalculate = debug(`${process.env.DEBUG_NAMESPACE}::helper::calculate-parenthesis`);

const openParenthesis = ['[', '{', '('];
const mapBalance = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const calculateParenthesis = (separated) => {
  const result = [...separated];
  let i = 0;
  while (i < result.length) {
    const prev = result[i - 1];
    const current = result[i];
    // Detect inner parenthesis, if current is number and previous is open parenthesis
    if (openParenthesis.some((el) => el === prev) && current && Number.isInteger(current)) {
      const closeParenthesis = result.findIndex((el) => el === mapBalance[prev]);
      debugCalculate('closeParenthesis', closeParenthesis);
      const expression = result.slice(i, closeParenthesis);
      debugCalculate('expression', expression);
      const expResult = calculateInnerExpression(expression);
      if (!expResult) return false;
      debugCalculate('expResult', expResult);
      result.splice(i - 1, expression.length + 2, expResult);
      debugCalculate('accumulated result', ...result);
      // Start from the beginning
      i = 0;
    }
    i += 1;
  }
  return result;
};

export default calculateParenthesis;
