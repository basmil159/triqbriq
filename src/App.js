import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout/Layout'
import Router from './Routes'
import { GblStyle } from './styles/globalStyles'
import { lightTheme } from './styles/theme'

export const ThemeContext = React.createContext(null)

const App = () => {
  return (
    <ThemeContext.Provider value={lightTheme}>
      <ThemeProvider theme={lightTheme}>
        <GblStyle />
        <Helmet>
          <title>TRIQBRIQ</title>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Saira:wght@100;400;500;600;700&display=swap'
            rel='stylesheet'
          />
        </Helmet>
        <>
          <Layout>
            <Router />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
