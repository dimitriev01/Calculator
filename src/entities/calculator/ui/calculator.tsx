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
        <div className={cls.calculator__content__container}>
          <div>
            <CalculationsPanel expression={expression} />
            <ResultPanel result={result} />
            <div className={cls.calculator__content__container__line} />
          </div>
          <ButtonsPanel handleButton={handleButton} />
        </div>
      </div>
    </section>
  );
};
