import { useCalculation } from 'shared/lib/hooks';
import cls from './calculations-panel.module.scss';

export const CalculationsPanel = () => {
  const { expression } = useCalculation();
  return <div className={cls['calculations-panel']}>{expression}</div>;
};
