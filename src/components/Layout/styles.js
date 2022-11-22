import styled from 'styled-components'
import { v } from '../../styles/variables'
import { lightTheme } from '../../styles/theme'

export const StyleLayout = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const StyleMain = styled.main`
  background: ${lightTheme.bgAlpha};
  padding: ${v.xlSpace};
  margin-left: 0;
  width: 100%;
`
