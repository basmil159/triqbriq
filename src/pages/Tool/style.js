import styled from 'styled-components'

/* Tools page style section */

export const ToolDiv = styled.section`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: center;
  margin: 1rem;
`

export const ToolTopbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0.5rem;
  margin-bottom: 3.2rem;
  h1 {
    margin: 0;
  }
`
export const ToolBtn = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  text-align: end;

  span {
    display: inline-block;
    padding: 0.4rem 0.6rem;
    text-transform: Capitalize;
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: normal;
  }
`

export const ToolBtnActive = styled.span`
  background: #0072bc;
  color: #fff;
  border-radius: 4px 0px 0px 4px;
`

export const ToolBtnInactive = styled.span`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0px 4px 4px 0px;
  border: 1px solid #dadada;
  color: #808080;
`
