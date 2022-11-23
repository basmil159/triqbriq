import React from 'react'
import { Heading1, Heading3, Lgtext, Smtext } from '../../styles/typography'
import {
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
      day: 25,
    },
    {
      name: 'Wednesday',
      day: 50,
    },
    {
      name: 'Thurday',
      day: 67,
    },
    {
      name: 'Friday',
      day: 22,
    },
    {
      name: 'Saturday',
      day: 42,
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
              <ResponsiveContainer width='100%' aspect={3}>
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
            <ResponsiveContainer width='100%' aspect={3}>
              <ComposedChart
                layout='vertical'
                width={250}
                height={200}
                data={PerMachine}
                margin={{
                  top: 10,
                  right: 350,
                  bottom: 20,
                  left: 0,
                }}
              >
                <CartesianGrid />
                <XAxis type='number' />
                <YAxis dataKey='name' type='category' scale='band' />
                <Tooltip />
                <Bar dataKey='power' barSize={20} fill='#413ea0' />
              </ComposedChart>
            </ResponsiveContainer>
          </EnergyBarChart>
        </EnergyCharts>
      </EnergyDiv>
    </>
  )
}

export default Energy
