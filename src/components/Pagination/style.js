import styled from 'styled-components'

export const PaginationDiv = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  margin: 2.2rem 0;
  color: ${({ theme }) => theme.text};
`

export const PaginationNum = styled.span`
  display: grid;
  grid-template-columns: repeat(auto-fit, 2.7rem);
  width: 50%;
  justify-content: end;
  column-gap: 2rem;

  label span:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
  input.pgno:checked ~ span {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      #0072bc;
  }
`
export const PaginationBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.4rem;
  width: 2.7rem;
  background-color: #fff;
  text-align: center;
  border: 0.4px solid #dadada;
  box-sizing: border-box;
  border-radius: 2px;

  &:not(:last-child) {
    margin-right: 2.3rem;
  }
`
