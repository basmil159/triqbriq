import React from 'react'
import { Heading1, Heading3, Lgtext, Smtext } from '../../styles/typography'
import {
  BarGraph,
  Divider,
  EnergyBarChart,
  EnergyCharts,
  EnergyDiv,
  EnergyLineChart,
} from './style'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Line,
  Bar,
  ComposedChart,
} from 'recharts'
const Energy = () => {
  const wholePower = [
    {
      name: 'Monday',
      day: 10,
    },
    {
      name: 'Tuesday',
      day: 30,
    },
    {
      name: 'Wednesday',
      day: 50,
    },
    {
      name: 'Thurday',
      day: 70,
    },
    {
      name: 'Friday',
      day: 15,
    },
    {
      name: 'Saturday',
      day: 37,
    },
    {
      name: 'Sunday',
      day: 60,
    },
  ]
  const PerMachine = [
    {
      name: 'R1',
      power: 40,
    },
    {
      name: 'R2',
      power: 88,
    },
    {
      name: 'CS',
      power: 50,
    },
    {
      name: 'JS',
      power: 60,
    },
  ]

  return (
    <>
      <Heading1>Energy</Heading1>
      <EnergyDiv>
        <Lgtext
          fontWeight='500'
          style={{
            display: 'block',
            background: '#031432',
            color: '#fff',
            padding: '1.6rem 2rem',
          }}
        >
          Total Energy Consumption by Robots
        </Lgtext>
        <EnergyCharts>
          <EnergyLineChart>
            <Lgtext>
              Time in
              <select>
                <option value='week' selected>
                  Week
                </option>
                <option value='month'>Month</option>
              </select>
            </Lgtext>
            <div className='lineChart'>
              <Smtext>Electricity Conscumption (hundrend KWH)</Smtext>
              <ResponsiveContainer width='100%' aspect={2}>
                <LineChart
                  width={500}
                  height={250}
                  data={wholePower}
                  margin={{ top: 0, right: 20, left: 2, bottom: 0 }}
                >
                  <CartesianGrid />
                  <XAxis dataKey='name' interval={'preserveStartEnd'} />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey='day' stroke='#0072bc' />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </EnergyLineChart>
          <Divider />
          <EnergyBarChart>
            <Smtext
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                marginRight: '-3rem',
              }}
            >
              Machines
            </Smtext>
            <BarGraph>
              <Lgtext fontWeight='500' style={{ paddingLeft: '3rem' }}>
                Energy consumption by each machine
              </Lgtext>
              {/* <ResponsiveContainer width='110%' aspect={2}> */}
              <ComposedChart
                layout='vertical'
                width={290}
                height={250}
                data={PerMachine}
                margin={{
                  top: 5,
                  right: 5,
                  bottom: -10,
                  left: -20,
                }}
              >
                <CartesianGrid />
                <XAxis type='number' />
                <YAxis dataKey='name' type='category' scale='band' />
                <Tooltip />
                <Bar dataKey='power' barSize={30} fill='#0072bc' />
              </ComposedChart>
              {/* </ResponsiveContainer> */}
              <Smtext style={{ paddingLeft: '4rem' }}>
                Electricity (hundrend KWH)
              </Smtext>
            </BarGraph>
          </EnergyBarChart>
        </EnergyCharts>
      </EnergyDiv>
    </>
  )
}

export default Energy
