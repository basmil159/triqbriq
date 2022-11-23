import styled from 'styled-components'

export const TablContainer = styled.table`
  width: 100%;
  height: fit-content;
  border-collapse: collapse;
  background-color: #fff;

  td,
  th {
    padding: 1.6rem 2.1rem;
    text-align: right;
    font-size: 1.4rem;
    line-height: 1.8rem;
    word-break: break-all;
    transition: transform 0.2s ease;
  }
`
export const TableHead = styled.thead`
  margin-top: 3rem;
  width: 100vw;
`
export const TableHeadFilter = styled.span`
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  svg {
    margin-left: 2rem;
    fill: #fff;
    height: 0.8rem;
    width: 1.25rem;
  }
`
export const TableTd = styled.td`
  :nth-child(2) {
    text-align: left;
  }
  :nth-child(1) {
    text-align: center;
  }
`

export const TableTh = styled.th`
  position: sticky;
  text-transform: capitalize;
  z-index: 1;
  word-break: keep-all;
  top: -0.1rem;
  color: #fff;
  font-weight: 500;
  background-color: #031432;

  :nth-child(1) {
    text-align: center;
  }
  :nth-child(2) {
    text-align: left;
  }
`
export const TableTr = styled.tr`
  :nth-child(even) {
    background-color: #f5f5f5;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #e0e0e0;
  }
`
export const TableTbody = styled.tbody`
  tr:hover {
    background-color: #e4e4e4;
    td {
      color: #0072bc;
      transform: scale(1.05);
      z-index: 1;
      margin-top: -1rem;
    }
    svg {
      fill: #0072bc;
    }
  }
`
