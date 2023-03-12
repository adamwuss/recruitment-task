import styled from "styled-components";

const Table = styled.table`
  width: 500px;
  border-spacing: 0;
  border: 1px solid #515151;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Td = styled.td`
  border-bottom: 1px solid #515151;
  text-align: left;
  padding: 16px;
`;

const Th = styled.th`
  border-bottom: 1px solid #515151;
  text-align: left;
  padding: 16px;
`;

const Pagination = styled.td`
  text-align: right;
`;

const Button = styled.button`
  background-color: #191F26;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  margin-right: 5px;
  
  &:hover {
    background-color: #FFFFFF14;
    border-radius: 25px;
  }
  
  &:disabled {
    color: grey;
    cursor: default;
  }
  
  &:disabled:hover {
    background-color: #191F26; 
  }
`;

export default {
  Table,
  Td,
  Th,
  Button,
  Pagination,
};
