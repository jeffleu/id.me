import React from 'react';
import { render, screen } from '@testing-library/react';
import PurchaseRow from './PurchaseRow';

type PropsType = {
  isMobile?: boolean;
}

const TestPurchaseRow = ({isMobile}: PropsType) => {
  const purchase = {
    id: 1,
    category: 'Food',
    description: 'connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!',
    location: 'https://picsum.photos/id/0/200',
    name: 'auxiliary generating microchip',
    price: 99882,
    purchaseDate: '2020-12-27T00:00:00.000Z',
  };

  return (
    <PurchaseRow isMobile={!!isMobile} purchase={purchase}/>
  );
};

describe('<PurchaseRow/>', () => {
  it('renders formatted date', async () => {
    render(<TestPurchaseRow/>);
    expect(await screen.findByText('December 26, 2020')).toBeVisible();
  });

  it('renders formatted date for mobile version', async () => {
    render(<TestPurchaseRow isMobile/>);
    expect(await screen.findByText('Dec 26, 2020')).toBeVisible();
  });

  it('renders category', async () => {
    render(<TestPurchaseRow />);
    expect(await screen.findByText('Food')).toBeVisible();
  });

  it('renders formatted description', async () => {
    render(<TestPurchaseRow/>);
    expect(await screen.findByText(
      "connecting the card won't do anything, we need to back up the digital HDD driver!"
    )).toBeVisible();
  });

  it('renders formatted price', async () => {
    render(<TestPurchaseRow/>);
    expect(await screen.findByText('$99,882.00')).toBeVisible();
  });
});
