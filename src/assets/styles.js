import styled from 'styled-components'
import { smooth } from '../styles/variables'

export const IconSvg = styled.svg`
  ${smooth};
  fill: ${({ fill }) => fill};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
