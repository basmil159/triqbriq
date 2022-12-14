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
  FormRemember,
  FormRememberForgot,
  FormFooter,
} from '../style'
import { logoSVG } from '../../../assets'
import { Link } from 'react-router-dom'
import { IconSvg } from '../../../assets/styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setEmail('')
    setPassword('')
  }

  const formData = [
    {
      label: 'Email address',
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
            <FormTitle>Welcome back!</FormTitle>
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
              <FormRememberForgot>
                <FormRemember>
                  <input type='checkbox' id='rememberMe' />
                  <label for='rememberMe'>Remember me</label>
                </FormRemember>

                <Link to='/triqbriq/resetpassword'>Forgot password?</Link>
              </FormRememberForgot>
              <FormButton type='submit'>Sign In</FormButton>
            </FormWrapper>
            <FormFooter>
              Don???t have an account yet?{' '}
              <Link to='/triqbriq/signup'>Sign Up</Link>
            </FormFooter>
          </FormColumn>
        </FormRow>
      </FormContainer>
    </FormSection>
  )
}

export default Login
