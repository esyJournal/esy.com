import React, { useEffect } from "react"
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@mui/material/CssBaseline';


import Header from "src/components/Header"
import Footer from "src/components/Footer";

import '../../styles/_globalstyles.scss'


const Layout = ({ children, fetchAccounts, activeAccount, location }) => {

  const handleConnect = (event) => {
    event.preventDefault()
    
    fetchAccounts && fetchAccounts()
  }

  const handleDisconnect = (event) => {
    event.preventDefault()

    localStorage.clear()
    window.location.href = "/"
  }

  return (<Grid container spaces={3}>
            <CssBaseline />
            <LayoutWrapper>
              <Header 
                fetchAccounts={fetchAccounts}
                activeAccount={activeAccount}
                handleConnect={handleConnect}
                handleDisconnect={handleDisconnect}
                location={location}
              />
              <Helmet></Helmet>

              <MainElement>{children}</MainElement>
              <Footer />
            </LayoutWrapper>
          </Grid>)
}

export default Layout



const LayoutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    // margin: 0 auto;
    min-height: 100vh;
    background: #fff;
    color: #000;
`

const MainElement = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`