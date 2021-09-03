import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes/Routes'
import Auth from './Services/Auth'
import { SnackbarProvider } from 'notistack'
import SnackBarBase from 'Components/Snackbar'
import Loading from 'Components/Loading'

function App() {
  return (
    <>
      <Router>
        <Auth>
          <SnackbarProvider
            autoHideDuration={process.env.REACT_APP_AUTO_HIDE_SNACKBAR || 3000}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            maxSnack={process.env.REACT_APP_MAX_SNACKBAR || 3}
          >
            <Loading/>
            <Routes />
            <SnackBarBase />
          </SnackbarProvider>
        </Auth>
      </Router>
    </>
  )
}

export default App
