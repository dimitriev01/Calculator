import { ICalulationsPanelProps } from '../model/calculations-panel.types';
import cls from './calculations-panel.module.scss';

export const CalculationsPanel = (props: ICalulationsPanelProps) => {
  const { expression } = props;
  return (
    <div className={cls['calculations-panel']}>
      <span>{expression}</span>
    </div>
  );
};
