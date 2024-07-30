import { message } from 'antd';
import { EnumButton } from 'features/buttons-panel';
import { useState } from 'react';

export const useCalculation = () => {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('0');

  const evaluateExpression = (expr: string): string => {
    const tokens = expr.split(/(\+|-|\×|\/|\√|%)/).filter(token => token !== '');

    const precedence: { [key: string]: number } = {
      [EnumButton.SQUARE_ROOT]: 3,
      [EnumButton.PERCENT]: 3,
      [EnumButton.MULTIPLY]: 2,
      [EnumButton.DIVIDE]: 2,
      [EnumButton.ADD]: 1,
      [EnumButton.SUBTRACT]: 1,
    };

    const performOperation = (operator: string, operand1: number, operand2: number): number => {
      switch (operator) {
        case EnumButton.MULTIPLY:
          return operand1 * operand2;
        case EnumButton.DIVIDE:
          if (operand2 === 0) {
            message.error('Нельзя делить на ноль!');
            return 0;
          }
          return operand1 / operand2;
        case EnumButton.ADD:
          return operand1 + operand2;
        case EnumButton.SUBTRACT:
          return operand1 - operand2;
        case EnumButton.SQUARE_ROOT:
          if (operand2 < 0) {
            message.error('Нельзя получить корень из отрицательного числа');
            return 0;
          }
          return Math.sqrt(operand2);
        case EnumButton.PERCENT:
          return operand1 + operand1 * (operand2 / 100);
        default:
          return 0;
      }
    };

    const stack: (string | number)[] = [];
    const operators: string[] = [];

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token in precedence) {
        while (operators.length > 0 && precedence[operators[operators.length - 1]] >= precedence[token]) {
          const operator = operators.pop() ?? '';
          const operand2 = parseFloat(stack.pop() as string);
          const operand1 = parseFloat(stack.pop() as string);
          stack.push(performOperation(operator, operand1, operand2));
        }
        operators.push(token);
      } else {
        if (typeof token === 'string') {
          stack.push(token.replace(',', '.'));
        }
      }
    }

    while (operators.length > 0) {
      const operator = operators.pop() ?? '';
      const operand2 = parseFloat(stack.pop() as string);
      const operand1 = parseFloat(stack.pop() as string);
      stack.push(performOperation(operator, operand1, operand2));
    }

    return (stack[0] as number).toFixed(2);
  };

  const calculateResult = () => {
    if (expression.length) {
      try {
        setResult(evaluateExpression(expression));
      } catch (error: any) {
        setResult(error.message);
      }
    } else {
      setResult('0');
    }
  };

  const handleButton = (value: string) => {
    if (value === EnumButton.CLEAR) {
      setExpression('');
      setResult('0');
    } else if (value === EnumButton.EQUALS) {
      calculateResult();
    } else if (value === EnumButton.BACKSPACE) {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  return {
    result,
    expression,
    handleButton,
  };
};
