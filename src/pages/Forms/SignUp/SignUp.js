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

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setName('')
    setEmail('')
    setPassword('')
  }

  const formData = [
    {
      label: 'First Name',
      value: name,
      onChange: (e) => setName(e.target.value),
      type: 'text',
    },
    {
      label: 'Last Name',
      value: name,
      onChange: (e) => setName(e.target.value),
      type: 'text',
    },
    {
      label: 'Email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: 'email',
    },
    {
      label: 'Password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: 'password',
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
            <FormTitle>Create Account</FormTitle>
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

              <FormButton type='submit'>Sign Up</FormButton>
            </FormWrapper>
            <FormFooter>
              Don’t have an account yet?{' '}
              <Link to='/triqbriq/login'>Sign In</Link>
            </FormFooter>
          </FormColumn>
        </FormRow>
      </FormContainer>
    </FormSection>
  )
}

export default Signup
