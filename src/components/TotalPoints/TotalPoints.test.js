import React from 'react';
import { render } from '@testing-library/react';
import TotalPoints from './TotalPoints';

describe('TotalPoints component', () => {
  it('renders the total points', () => {
    const transactions = [
      {id: 1, price: 50},
      {id: 2, price: 150},
      {id: 3, price: 75},
    ];
    const { getByText } = render(<TotalPoints transactions={transactions}/>);
    expect(getByText('175')).toBeInTheDocument();
  })
});
