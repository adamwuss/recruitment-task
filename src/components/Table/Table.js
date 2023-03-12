import { useState } from 'react';

import Styled from "./Table.styled"

const Table = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(6);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const numberOfPages = Math.ceil(transactions.length / transactionsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  return (
    <Styled.Table>
      <thead>
        <tr>
          <Styled.Th>Id</Styled.Th>
          <Styled.Th>Price</Styled.Th>
        </tr>
      </thead>
      <tbody>
      {
        currentTransactions.map(row => (
          <tr key={row.id}>
            <Styled.Td>{row.id}</Styled.Td>
            <Styled.Td>{row.price}$</Styled.Td>
          </tr>
        ))
      }
      <tr>
        <Styled.Td>
            { currentPage } of { numberOfPages  }
        </Styled.Td>
        <Styled.Pagination>
          <Styled.Button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            {'<'}
          </Styled.Button>
          <Styled.Button
            onClick={handleNextPage}
            disabled={currentPage === numberOfPages}
          >
            {'>'}
          </Styled.Button>
        </Styled.Pagination>
      </tr>
    </tbody>
    </Styled.Table>
  )
}

export default Table;
