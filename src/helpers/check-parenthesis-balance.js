/* eslint-disable max-len */
import debug from 'debug';

const debugParenthesis = debug(`${process.env.DEBUG_NAMESPACE}::helper::check-parenthesis`);

const mapBalance = {
  '[': ']',
  '{': '}',
  '(': ')',
};


const checkBalance = (separated) => {
  const stack = [];
  for (let i = 0; i < separated.length; i += 1) {
    const current = separated[i];
    switch (separated[i]) {
      case '(':
      case '[':
      case '{':
        // stack open parenthesis
        stack.push(current);
        break;
      case ')':
      case ']':
      case '}':
        // if closing parenthesis doesn't match opening parenthesis, then is not balanced and return false
        if (mapBalance[stack[stack.length - 1]] !== current) {
          debugParenthesis('current', current);
          debugParenthesis('stack', stack);
          debugParenthesis('mapped', mapBalance[stack[stack.length - 1]]);
          debugParenthesis('result ', mapBalance[stack[stack.length - 1]] !== current);
          return false;
        }
        stack.pop();
        break;
      default:
        break;
    }
  }
  debugParenthesis('checkBalance final stack:', stack);
  // if there are still parenthesis on stack, then return false
  return stack.length === 0;
};

export default checkBalance;
