import styled from 'styled-components'

export const FormSection = styled.div`
  background-color: #f8f9fb;
  padding: 2rem;
  min-width: 100vw;
  min-height: 100vh;
`

export const FormTitle = styled.h4`
  font-size: 24px;
  line-height: 22px;
  color: #211c28;
  opacity: 0.8;
`

export const FormContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FormColumn = styled.div`
  padding: 4rem;
  background: white;
  gap: 3.2rem;
  flex: 1;
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: start;
  border-radius: 2rem;
  flex-direction: column;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 58rem;
  align-items: center;
`
export const Formlogo = styled.img``

export const FormWrapper = styled.form`
  padding-top: 0;
  width: 100%;
`

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 3rem;
`
export const FormInput = styled.input`
  display: block;
  padding-left: 1.6rem;
  outline: none;
  height: 4rem;
  width: 100%;
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 8px;
  font-size: 1.4rem;
`

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 1.6rem;
  line-height: 22px;
  margin-bottom: 1rem;
  color: #3d5168;
`
export const FormImgWrapper = styled.div`
  max-width: 555px;
  gap: 3rem;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`
export const FormImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`

export const FormButton = styled.button`
  white-space: nowrap;
  color: #ffffff;
  outline: none;
  border: none;
  width: 100%;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;
  padding: 1.4rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: #0072bc;
  border-radius: 8px;
  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: #082e6c;
  }
`
export const FormRememberForgot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -1.4rem;
  margin-bottom: 2rem;
  a,
  label {
    line-height: 22px;
    color: #808080;
    font-size: 1.6rem;
    text-decoration: none;
    :active,
    :hover {
      color: #0072bc;
    }
  }
`
export const FormRemember = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 8px;
    accent-color: #0072bc;

    :hover ~ label {
      color: #0072bc;
    }
  }
`
export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.8rem;
  justify-content: center;
  line-height: 22px;
  color: #808080;
  font-size: 1.6rem;
  text-decoration: none;
  a {
    color: #0072bc;
    :hover {
      color: #082e6c;
    }
  }
`
