import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// services
import authService from './AuthorServices';

// actions
import { getProfileFetch } from '../Actions/Auth';

const Auth = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    function initAuth() {
      authService.handleAuthentication();

    //Nếu có token, thực hiện dispatch action get thông tin user
    //TT user có lấy được hay không tùy thuộc vào accesstoken có hợp lệ hay ko
      if (authService.isAuthenticated()) {
        dispatch(getProfileFetch());
      }
    }
    initAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default Auth;
