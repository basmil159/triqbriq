import styled from 'styled-components'

export const ViewTable = styled.table`
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 100%;

  td {
    input,
    input:focus-visible {
      background-color: #fff;
      width: 100%;
      height: 100%;
      outline: 0;
      border: none;
      margin:0;
      color: #211C28;
      opacity: 0.8;
    }
  }
  tr {
    :nth-child(odd) {
      background-color: #f2f2f2;
    input,
    input:focus-visible {
      background-color: #f2f2f2;
  }
    }


  th,td {
    padding:1.2rem;
    border-left: 1px solid #ddd;
  }

  th {
    display: flex;
    gap:1.2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
`
