// import { debugMain } from './config/debug';
import './config/env';
import debug from 'debug';

import checkBalance from './helpers/check-parenthesis-balance';
import calculateParenthesis from './helpers/calculate-parenthesis';
import calculateInnerExpression from './helpers/calculate-inner-expression';
import ERROR_MESSAGES from './common/ERROR_MESSAGES';
import Logger from './config/logger';

const debugMain = debug(`${process.env.DEBUG_NAMESPACE}::main`);

const expression = '{3+5}*2/(4+4)+0*(-68+25';

const calculateExpression = (exp) => {
  debugMain('expression', exp);
  // split exp in numbers and characters separated
  const tokenized = exp.match(/[\d.]+|\D+/g)
  // transform char to number
    .map((char) => (char >= '0' && char <= '9' ? Number(char) : char.split('')))
  // flatten the array of arrays
    .flat();
  debugMain('tokenized', String(tokenized));
  // check parenthesis balance
  if (!checkBalance(tokenized)) return Logger.error(ERROR_MESSAGES.PARENTHESIS_NOT_BALANCED);
  // Calculate the parenthesis results
  const parenthesisResult = calculateParenthesis(tokenized);
  if (!parenthesisResult) return Logger.error(ERROR_MESSAGES.BAD_EXPRESSION_FORMAT);
  // Calculate the final results
  const result = calculateInnerExpression(parenthesisResult);
  if (!result) return Logger.error(ERROR_MESSAGES.BAD_EXPRESSION_FORMAT);
  return Logger.info(`The result is ${result}`);
};

calculateExpression(expression);

export default calculateExpression;
