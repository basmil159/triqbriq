import styled from 'styled-components'

export const StyleModal = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
`

export const Background = styled.div`
  height: 100vh;
  width: 100vw;

  background: rgba(0, 0, 0, 0.8);
  position: absolute;
`
export const ModalWrapper = styled.div`
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 43.2rem;
  max-height: 90vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #606060;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  input,
  input:focus-visible {
    margin-top: 0.9rem;
    margin-bottom: 2.5rem;
    border: 1px solid rgba(118, 118, 118, 0.5);
    border-radius: 5px;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.4rem;
  line-height: 1.8;
  color: #141414;

  label {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    border: none;
    font-weight: 400;
    cursor: pointer;
    font-size: 13px;
  }
`
export const ModalTitle = styled.div`
  padding: 1.6rem 2.4rem;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    #0072bc;
`
export const ModalFooter = styled.div`
  display: flex;
  margin-top: 2.4rem;
  justify-content: end;
  align-items: center;
`

export const ModelCancel = styled.button`
  border: none;
  background: none;
  font-weight: 400;
  font-size: 13px;
  color: #4a4a4a;
`
export const ModelAddEdit = styled.button`
  border-radius: 4px;
  background: #0072bc;
  color: #f2fbff;
`
