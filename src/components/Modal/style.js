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
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #606060;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${'' /* align-items: center; */}
  line-height: 1.8;
  color: #141414;
  
  label {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
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

export const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
