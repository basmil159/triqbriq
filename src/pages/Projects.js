import { React, useState } from 'react'
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
  ProjectsJobs,
  ProjectTitle,
  Singlejob,
  StyleProjects,
  Table,
  Task,
} from './projectsStyle'
import { threedot, filterSVG } from '../assets'
import watch from '../assets/img/stopwatch.png'
import whitewatch from '../assets/img/whitestopwatch.png'
import bluewatch from '../assets/img/bluestopwatch.png'
import calender from '../assets/img/calendar.png'
import { IconSvg } from '../assets/styles'
import Modal from '../components/Modal/Modal'

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
        <ProjectsJobs>
          {props.jobDetails.map((job, index) => (
            <>
              <Singlejob
                onClick={() => {
                  props.project(job.job)
                  props.model('viewproject')
                }}
              >
                <Heading3>{job.job}</Heading3>
                {!job.date ? (
                  <Mdtext weight='400'>
                    <img class='black' src={watch} alt='' />
                    <img class='white' src={whitewatch} alt='' />
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
                                ? '#808080'
                                : job.done[index] >= 50 && job.done[index] < 80
                                ? '#009BFF'
                                : '#15D450'
                            }
                          ></Loading>
                        </LoadingPath>
                        <Mdtext>{job.done[index]}%</Mdtext>
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
        </ProjectsJobs>
      </Project>
    </>
  )
}

const Projects = () => {
  const [openModal, setOpenModel] = useState('')
  const [projectName, setProjectName] = useState('')

  return (
    <>
      {openModal && (
        <Modal type={openModal} close={setOpenModel} project={projectName} />
      )}

      <Heading1>Projects</Heading1>
      <AddfilterTasks>
        <Btns color='#2B2E30' background='#ffffff' padding='1.2rem'>
          <IconSvg width='1.2rem' height='.8rem'>
            <use xlinkHref={filterSVG}></use>
          </IconSvg>
          <Heading3>Filter</Heading3>
        </Btns>
        <Btns
          color='#fff'
          background='#082E6C'
          padding='1.2rem'
          onClick={() => setOpenModel('addProject')}
        >
          <img
            src={addicon}
            alt=''
            style={{ width: '1.6rem', height: '1.6rem' }}
          />
          <Heading3>Add Project</Heading3>
        </Btns>
      </AddfilterTasks>
      <StyleProjects>
        <Job
          title='Queued'
          jobDetails={queued}
          model={setOpenModel}
          project={setProjectName}
        />
        <Job
          title='Initiated'
          jobDetails={initiated}
          model={setOpenModel}
          project={setProjectName}
        />
        <Job
          title='Completed'
          jobDetails={completed}
          model={setOpenModel}
          project={setProjectName}
        />
      </StyleProjects>
    </>
  )
}

export default Projects
