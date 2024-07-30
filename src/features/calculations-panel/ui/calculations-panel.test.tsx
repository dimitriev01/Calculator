it('should render the component with a given expression', () => {
  const { render } = require('@testing-library/react');
  const React = require('react');
  const { CalculationsPanel } = require('./calculations-panel');

  const expression = '2 + 2';
  const { getByText } = render(<CalculationsPanel expression={expression} />);

  expect(getByText(expression)).toBeInTheDocument();
});

it('should render correctly when expression is an empty string', () => {
  const { render } = require('@testing-library/react');
  const React = require('react');
  const { CalculationsPanel } = require('./calculations-panel');

  const expression = '';
  const { getByText } = render(<CalculationsPanel expression={expression} />);

  expect(getByText(expression)).toBeInTheDocument();
});
