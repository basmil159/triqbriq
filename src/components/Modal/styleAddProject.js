import styled from 'styled-components'

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const MaterialsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  overflow-y: auto;
  max-height: 40vh;
`
export const MaterialDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f3f3f3;
  border-radius: 5px;
  padding: 1.8rem;
  min-height: 7.7rem;
  height: 7.7rem;
  gap: 7rem;
  width: 100%;

  .materials {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .materialQuantity {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    span {
      font-weight: 400;
      font-size: 1.6rem;
      font-family: 'inter';
      color: #606060;
      padding: 0;
    }
  }

  img {
    height: 100%;
  }
`
export const MaterialBtn = styled.span`
  cursor: pointer;
  user-select: none;
`
