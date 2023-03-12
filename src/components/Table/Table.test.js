import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

const transactions = [
  { id: 1, price: 10 },
  { id: 2, price: 20 },
  { id: 3, price: 30 },
];

describe('Table component', () => {
  it('renders the correct number of rows', () => {
    const { getAllByRole } = render(<Table transactions={transactions} />);
    const rows = getAllByRole('row');
    expect(rows.length).toBe(5); // 1 header row + 3 transaction rows + pagination row
  });

  it('renders the correct data', () => {
    const { getByText } = render(<Table transactions={transactions} />);
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('10$')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('20$')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('30$')).toBeInTheDocument();
  });

  it('renders a table with headers', () => {
    const { getByText } = render(<Table transactions={transactions} />);
    expect(getByText('Id')).toBeInTheDocument();
    expect(getByText('Price')).toBeInTheDocument();
  });
});
