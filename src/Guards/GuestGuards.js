import React, { FC } from 'react';
import { Redirect } from 'react-router';

// configs
import { PATH_NAME } from '../Constants/Config';

// services
import authService from '../Services/AuthorServices';

const GuestGuard =({ children }) => {
  const isAuth = authService.getAccessToken();

  if (isAuth) return <Redirect to={PATH_NAME.HOME} />;
  

  return <>{children}</>;
};

export default GuestGuard;
