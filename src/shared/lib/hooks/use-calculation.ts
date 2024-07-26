import { useState } from 'react';

export const useCalculation = () => {
  const [expression, setExpression] = useState('20x80x0,5');
  const [result, setResult] = useState('800');

  const handleButton = (value: string) => {
    setExpression(value);
  };

  return {
    result,
    expression,
    handleButton,
  };
};
