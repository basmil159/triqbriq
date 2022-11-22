import styled from 'styled-components'

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
  max-height: 20vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0;
`

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  h2 {
    font-size: 2rem;
    line-height: 2.6rem;
    display: flex;
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
export const Singlejob = styled.div`
  padding: 2rem;
  background: #fcfcfc;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #fcfcfc;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  :hover {
    background: #0072bc;
    color: #f5f5f5;
  }

  img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 4px;
  }

  span {
    display: flex;
    align-items: center;
  }
`
