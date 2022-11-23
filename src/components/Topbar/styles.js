import styled from 'styled-components'

import { smooth, v } from '../../styles/variables'

export const StyleTopbar = styled.div`
  ${smooth};
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 5rem;

  div {
    display: flex;
    gap: 1rem;
  }
`
export const Search = styled.div`
  width: 42.3rem;
  display: flex;
  position: relative;
  align-items: center;
  font-weight: 400;
  font-size: 1.6rem;

  input {
    border: 0px;
    border-radius: ${v.borderRadius};
    width: 100%;
    outline: none;
    border: none;

    :focus-within ~ label,
    :focus-visible ~ label {
      display: none;
    }
  }

  label {
    color: #cdcdcd;
    font-weight: 400;
    font-size: 1.6rem;
    display: flex;
    gap: 0.8rem;
    position: absolute;
    left: 0.8rem;
  }
`
export const AccountSection = styled.div`
  display: flex;
  gap: 1.6rem;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 1.6rem;

  img {
    width: 3.2rem;
    height: 3.2rem;
    borderradius: 50%;
  }
`
export const Notification = styled.div`
  background: ${({ theme }) => theme.bg2};
  width: 4rem;
  height: 4rem;
  border-radius: calc(${v.borderRadius} + 0.4rem);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`
