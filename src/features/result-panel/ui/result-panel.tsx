import { IResultPanelProps } from '../model/result-panel.types';
import cls from './result-panel.module.scss';

export const ResultPanel = (props: IResultPanelProps) => {
  const { result } = props;
  return (
    <div className={cls['result-panel']}>
      <span>{result}</span>
    </div>
  );
};
