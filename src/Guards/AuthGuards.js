import React from 'react'
import { Redirect } from 'react-router'
import { useLocation } from 'react-router-dom'

// configs
import { PATH_NAME } from 'Constants/Config'

// services
import authService from '../Services/AuthorServices'

const AuthGuard = ({ children }) => {
  const location = useLocation()
  console.log(location)
  const { pathname } = location
  const isAuth = authService.getAccessToken()
  if (!isAuth) {
    return (
      <Redirect
        to={{ pathname: PATH_NAME.LOGIN, state: { from: pathname  }}}
      />
    )
  }

  return <>{children}</>
}

export default AuthGuard
