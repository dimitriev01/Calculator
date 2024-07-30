import { ResultPanel } from 'features/result-panel';
import { ButtonsPanel } from 'features/buttons-panel';
import { CalculationsPanel } from 'features/calculations-panel';
import { useCalculation } from 'shared/lib/hooks';
import cls from './calculator.module.scss';

export const Calculator = () => {
  const { result, expression, handleButton } = useCalculation();

  return (
    <section className={cls.calculator}>
      <div className={cls.calculator__content}>
        <CalculationsPanel expression={expression} />
        <ResultPanel result={result} />
        <div className={cls.calculator__content__line} />
        <ButtonsPanel handleButton={handleButton} />
      </div>
    </section>
  );
};
