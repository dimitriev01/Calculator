import { ResultPanel } from 'features/result-panel';
import { ButtonsPanel } from 'features/buttons-panel';
import { CalculationsPanel } from 'features/calculations-panel';
import cls from './calculator.module.scss';

export const Calculator = () => {
  return (
    <section className={cls.calculator}>
      <div className={cls.calculator__content}>
        <CalculationsPanel />
        <ResultPanel />
        <div className={cls.calculator__content__line} />
        <ButtonsPanel />
      </div>
    </section>
  );
};
