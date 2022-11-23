import styled from 'styled-components'
import { v } from './variables'

export const Heading1 = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  font-family: 'Saira', sans-serif;
  color: #211c28;
  margin-bottom: 3.2rem;
`
export const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ family }) => family};
  line-height: 2.6rem;
  color: ${({ color }) => color};
`

export const Heading3 = styled.h2`
  font-size: 1.6rem;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: 'DM sans', sans-serif;
  line-height: 2.1rem;
`

export const Lgtext = styled.span`
  font-size: 1.4rem;
  font-weight: ${({ fontWeight }) => fontWeight};
`
export const Mdtext = styled.span`
  font-size: 1.3rem;
  font-weight: ${({ fontWeight }) => fontWeight};
`
export const Smtext = styled.span`
  font-size: 1.2rem;
  font-weight: ${({ fontWeight }) => fontWeight};
`

export const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  cursor: pointer;
  ${'' /* width: max-content; */}
  gap: 0.8rem;
  border-radius: ${v.borderRadius};
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding}
    calc(${({ padding }) => padding} + ${({ padding }) => padding});
`
