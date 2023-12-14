import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { columnHeaderTitles } from './utils/constants';

const TestApp = () => {
  return <App/>
};

describe('<App/>', () => {
  beforeEach(() => {
    render(<TestApp/>);
  });

  it('renders header', async () => {
    expect(await screen.findByText('Purchases')).toBeVisible();
  });

  it('renders column titles', () => {
    columnHeaderTitles.forEach(async (title) => {
      expect(await screen.findByText(title)).toBeVisible();
    });
  });
});
