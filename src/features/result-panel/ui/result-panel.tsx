import { useCalculation } from 'shared/lib/hooks';
import cls from './result-panel.module.scss';

export const ResultPanel = () => {
  const { result } = useCalculation();
  return <div className={cls['result-panel']}>{result}</div>;
};
