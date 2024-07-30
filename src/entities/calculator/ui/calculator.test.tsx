import { render } from '@testing-library/react';
import { Calculator } from './calculator';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

it('should render without crashing when mounted', () => {
  const { container } = render(<Calculator />);
  expect(container).toBeInTheDocument();
});
