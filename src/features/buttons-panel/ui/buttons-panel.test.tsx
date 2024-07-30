import { render } from '@testing-library/react';
import { calcButtons } from '../model/buttons-panel.constants';
import { ButtonsPanel } from './buttons-panel';

it('should render buttons correctly based on calcButtons array', () => {
  const { container } = render(<ButtonsPanel handleButton={jest.fn()} />);
  const buttons = container.querySelectorAll('button');
  expect(buttons.length).toBe(calcButtons.flat().length);
  calcButtons.flat().forEach((buttonText, index) => {
    expect(buttons[index].textContent).toBe(buttonText);
  });
});

it('should render all buttons when component is mounted', () => {
  const handleButton = jest.fn();
  const { getByText } = render(<ButtonsPanel handleButton={handleButton} />);

  calcButtons.flat().forEach(buttonText => {
    expect(getByText(buttonText)).toBeInTheDocument();
  });
});
