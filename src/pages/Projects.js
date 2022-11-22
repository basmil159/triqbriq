import React from 'react'
import { useId } from 'react'
import {
  Heading1,
  Heading3,
  Btns,
  Heading2,
  Mdtext,
} from '../styles/typography'
import addicon from '../assets/img/add.png'
import {
  AddfilterTasks,
  DateTime,
  Loading,
  LoadingPath,
  Processing,
  Project,
  ProjectTitle,
  Singlejob,
  StyleProjects,
  Table,
  Task,
} from './projectsStyle'
import filtericon from '../assets/img/filter.png'
import { threedot } from '../assets'
import watch from '../assets/img/stopwatch.png'
import bluewatch from '../assets/img/bluestopwatch.png'
import calender from '../assets/img/calendar.png'
import { IconSvg } from '../assets/styles'

const queued = [
  {
    job: 'TriqBriq Project-12',
    time: 'Estimated Time: 15.5mins',
  },
  {
    job: 'TriqBriq Project-13',
    time: 'Estimated Time: 14.5mins',
  },
  {
    job: 'TriqBriq Project-14',
    time: 'Estimated Time: 15.5mins',
  },
  {
    job: 'TriqBriq Project-15',
    time: 'Estimated Time: 15.5mins',
  },
  {
    job: 'TriqBriq Project-16',
    time: 'Estimated Time: 15.5mins',
  },
]

const initiated = [
  {
    job: 'TriqBriq Project-11',
    time: 'Estimated Time: 15.5mins',
    item: ['BRIQ-30', 'BRIQ-60', 'BRIQ-240'],
    done: [0, 50, 60],
  },
  {
    job: 'TriqBriq Project-10',
    time: 'Estimated Time: 15.5mins',
    item: ['BRIQ-30', 'BRIQ-60', 'BRIQ-240'],
    done: [20, 60, 80],
  },
  {
    job: 'TriqBriq Project-9',
    time: 'Estimated Time: 15.5mins',
    item: ['BRIQ-30', 'BRIQ-60', 'BRIQ-240'],
    done: [50, 60, 80],
  },
]
const completed = [
  {
    job: 'TriqBriq Project-8',
    time: '02:35:25',
    date: '2022-06-23',
    item: ['BRIQ-30', 'BRIQ-60', 'BRIQ-240'],
    quantity: [1200, 870, 960],
  },
]

const Job = (props) => {
  return (
    <>
      <Project>
        <ProjectTitle>
          <Heading2>
            {props.title}
            <Mdtext>{props.jobDetails.length}</Mdtext>
          </Heading2>
          <IconSvg width='0.4rem' height='1.6rem'>
            <use xlinkHref={threedot}></use>
          </IconSvg>
        </ProjectTitle>
        {props.jobDetails.map((job, index) => (
          <>
            <Singlejob>
              <Heading3>{job.job}</Heading3>
              {!job.date ? (
                <Mdtext weight='400'>
                  <img src={watch} alt='' />
                  {job.time}
                </Mdtext>
              ) : null}

              {job.done ? (
                <Processing>
                  {job.item.map((items, index) => (
                    <Task>
                      <Mdtext>{items}</Mdtext>
                      <LoadingPath>
                        <Loading
                          width={`${job.done[index]}%`}
                          bg={
                            job.done[index] < 50
                              ? 'red'
                              : job.done[index] >= 50 && job.done[index] < 80
                              ? '#009BFF'
                              : '#15D450'
                          }
                        ></Loading>
                      </LoadingPath>
                      <Mdtext>{job.done[index]}</Mdtext>
                    </Task>
                  ))}
                </Processing>
              ) : null}

              {job.date ? (
                <>
                  <DateTime>
                    <Mdtext weight='400'>
                      <img src={bluewatch} alt='' />
                      {job.time}
                    </Mdtext>
                    <Mdtext weight='400'>
                      <img src={calender} alt='' />
                      {job.date}
                    </Mdtext>
                  </DateTime>

                  <Table>
                    <tr>
                      <th>Type</th>
                      {job.item.map((items, index) => (
                        <>
                          <th>{items}</th>
                        </>
                      ))}
                    </tr>
                    <tr>
                      <td>Qty</td>
                      {job.quantity.map((quantities, index) => (
                        <>
                          <td>{quantities}</td>
                        </>
                      ))}
                    </tr>
                  </Table>
                </>
              ) : null}
            </Singlejob>
          </>
        ))}
      </Project>
    </>
  )
}

const Projects = () => {
  return (
    <>
      <Heading1>Projects</Heading1>
      <AddfilterTasks>
        <Btns color='#fff' background='#082E6C' padding='1.2rem'>
          <img
            src={addicon}
            alt=''
            style={{ width: '1.6rem', height: '1.6rem' }}
          />
          <Heading3>Add Project</Heading3>
        </Btns>
        <Btns color='#2B2E30' background='#ffffff' padding='1.2rem'>
          <img
            src={filtericon}
            alt=''
            style={{ width: '2.4rem', height: '2.4rem' }}
          />
          <Heading3>Filter</Heading3>
        </Btns>
      </AddfilterTasks>
      <StyleProjects>
        <Job title='Queued' jobDetails={queued} />
        <Job title='Initiated' jobDetails={initiated} />
        <Job title='Completed' jobDetails={completed} />
      </StyleProjects>
    </>
  )
}

export default Projects
