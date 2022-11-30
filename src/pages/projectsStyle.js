import styled from 'styled-components'
import { lightTheme } from '../styles/theme'

export const AddfilterTasks = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`

export const StyleProjects = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 3.2rem;
  padding: 0;
  margin-top: 3.2rem;
`
export const Project = styled.div`
  background: none;
  width: 33.33%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background: ${lightTheme.bgAlpha};
  position: sticky;
  top: 0;
  margin: 0 auto;
  width: 96%;

  h2 {
    font-size: 2rem;
    display: flex;
    align-items: center;
  }

  span {
    height: 2.1rem;
    display: flex;
    width: 4.5rem;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      #0072bc;
    border: 1px solid #0072bc;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    margin-left: 1.2rem;
  }
`

export const ProjectsJobs = styled.div`
  background: none;
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin: 0;
  height: calc(100vh - 35rem);
  overflow-y: auto;
  overflow-x: visible;
`
export const Singlejob = styled.div`
  padding: 2rem;
  width: 96%;
  background: #fcfcfc;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: #fcfcfc;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  :hover {
    background: #0072bc;
    color: #f5f5f5;
    cursor: pointer;

    table {
      color: #fff;
      th {
        color: #0072bc;
      }
    }

    .black {
      display: none;
    }
    .white {
      display: block;
    }
  }

  img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 4px;
  }

  .white {
    display: none;
  }

  span {
    display: flex;
    align-items: center;
  }
`

export const Processing = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`
export const Task = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LoadingPath = styled.div`
  width: 100%;
  height: 0.8rem;
  background: #80808066;
  border-radius: 2rem;
  position: relative;
`
export const Loading = styled.div`
  width: ${({ width }) => width};
  height: 0.8rem;
  background: ${({ bg }) => bg};
  position: absolute;
  border-radius: 2rem;
`
export const DateTime = styled.div`
  display: flex;
  gap: 2rem;

  span {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      #0072bc;
    /* ARRTSM/Blue */
    padding: 4px;
    border: 1px solid #0072bc;
    border-radius: 4px;
    color: #0072bc;

    :last-of-type {
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.9),
          rgba(255, 255, 255, 0.9)
        ),
        #15d450;

      color: #15d450;
      border: 1px solid #15d450;
    }
  }

  svg {
    fill: #0072bc !important;
  }
`

export const Table = styled.div`
  table {
    width: 100%;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    text-align: center;
    color: #211c28b2;

    th {
      background: #f5f5f5;
    }

    td,
    th,
    tr {
      border-collapse: collapse;
      font-size: 1.3rem;
      border: 1px solid #eaeaea;
    }
  }
`
