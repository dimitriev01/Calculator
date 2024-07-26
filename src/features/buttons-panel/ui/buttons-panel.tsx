import { Button } from 'antd';
import clsx from 'clsx';
import { calcButtons } from '../model/buttons-panel.constants';
import { MouseEvent } from 'react';
import { useCalculation } from 'shared/lib/hooks';
import cls from './buttons-panel.module.scss';

export const ButtonsPanel = () => {
  const { handleButton } = useCalculation();

  const onClickButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const buttonText = e.currentTarget.textContent;
    if (buttonText) {
      handleButton(buttonText);
    }
  };

  return (
    <table className={cls['buttons-panel']}>
      <tbody>
        {calcButtons.map((row, i) => (
          <tr key={i}>
            {row.map(col => (
              <td key={col}>
                <Button
                  onClick={onClickButtonHandler}
                  className={clsx(cls['buttons-panel__button'], {
                    [cls['buttons-panel__button_primary']]: col === '=',
                  })}
                  type={col !== '=' ? 'default' : 'primary'}
                >
                  {col}
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
