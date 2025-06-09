import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

test('renders without crashing', () => {
  render(<BrowserRouter><div>Test</div></BrowserRouter>);
});
