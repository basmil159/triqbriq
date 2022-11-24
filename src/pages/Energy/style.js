import styled from 'styled-components'
import { v } from '../../styles/variables'

export const EnergyDiv = styled.div`
  border-radius: ${v.borderRadius};
  overflow: hidden;
`
export const EnergyCharts = styled.div`
  padding: 2.5rem 2rem;
  display: flex;
  gap: 2rem;
  align-items: start;
  justify-content: space-between;
`
export const EnergyLineChart = styled.div`
  min-width: 66.8rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;

  select,
  select:focus-visible {
    margin-left: 0.8rem;
    background: rgba(218, 218, 218, 0.5);
    border: 1px solid #808080;
    border-radius: 2px;
    outline: 0;
  }

  .recharts-wrapper,
  svg {
    width: 100% !important;
    height: 100% !important;
  }

  .lineChart {
    display: flex;
    gap: 0rem;
    min-width: 75rem;
    align-items: center;

    span {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      color: #1e1e1e;
    }
  }
`
export const Divider = styled.div`
  border: 1px dotted #dadada;
  width: 0px;
  height: 37rem;
  margin-top: 4rem;
`

export const EnergyBarChart = styled.div`
  margin-top: 4rem;
  min-width: 31.5rem;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    color: #1e1e1e;
  }
`

export const BarGraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
  align-items: center;

  svg {
    width: 90%!impostant;
    height: 90%!impostant;
  }
`
