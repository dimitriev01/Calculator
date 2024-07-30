it('should render the result correctly when a valid result is passed', () => {
  const { render } = require('@testing-library/react');
  const React = require('react');
  const { ResultPanel } = require('./result-panel');

  const props = { result: 'Test Result' };
  const { getByText } = render(<ResultPanel {...props} />);

  expect(getByText('Test Result')).toBeInTheDocument();
});

it('should handle undefined or null result gracefully', () => {
  const { render } = require('@testing-library/react');
  const React = require('react');
  const { ResultPanel } = require('./result-panel');

  const props = { result: null };
  const { container } = render(<ResultPanel {...props} />);

  expect(container.querySelector('span').textContent).toBe('');
});
