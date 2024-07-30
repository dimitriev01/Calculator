import { Button } from 'antd';
import clsx from 'clsx';
import { calcButtons, EnumButton } from '../model/buttons-panel.constants';
import { MouseEvent } from 'react';
import cls from './buttons-panel.module.scss';
import { IButtonsPanelProps } from '../model/buttons-panel.types';

export const ButtonsPanel = (props: IButtonsPanelProps) => {
  const { handleButton } = props;

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
                    [cls['buttons-panel__button_primary']]: col === EnumButton.EQUALS,
                  })}
                  type={col !== EnumButton.EQUALS ? 'default' : 'primary'}
                >
                  {col === EnumButton.BACKSPACE ? '⌫' : col === EnumButton.MULTIPLY ? '×' : col}
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
