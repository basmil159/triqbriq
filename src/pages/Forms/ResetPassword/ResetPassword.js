import React, { useState } from 'react'
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormButton,
  FormTitle,
  FormContainer,
  FormFooter,
} from '../style'
import { logoSVG } from '../../../assets'
import { Link } from 'react-router-dom'
import { IconSvg } from '../../../assets/styles'

const ResetPassword = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setEmail('')
  }

  const formData = [
    {
      label: 'Email address',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: 'email',
    },
  ]
  return (
    <FormSection>
      <FormContainer>
        <FormRow>
          <IconSvg height='4.6rem'>
            <use xlinkHref={logoSVG}></use>
          </IconSvg>
          <FormColumn small>
            <FormTitle>Recover password</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type='submit'>Reset Password</FormButton>
            </FormWrapper>
            <FormFooter>
              <Link to='/triqbriq/login'>Back</Link>
            </FormFooter>
          </FormColumn>
        </FormRow>
      </FormContainer>
    </FormSection>
  )
}

export default ResetPassword
