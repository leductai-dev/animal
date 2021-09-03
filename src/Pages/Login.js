import LoginForm from 'Components/LoginForm'
import React, { useState, useRef, useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";

function Login(props) {
  const dispatch = useDispatch()
  const location = useLocation()
  const from = location?.state?.from
  return (
    <>
      <div className="login-wraper">
        <div className="login-container">
          <div className="login-register">
            <a href>Login</a>
            <a href>Register</a>
          </div>
          <h2 className="wc-title">Wellcome to animals world!</h2>
            <LoginForm location={from}/>
          <div className="more-option">
            <span>or</span>
          </div>
          <div className="gg-login">
            <img className src="./image/gg-icon.jpg" alt="" />
            <a href="#">Sign in with Google</a>
          </div>
          <div className="creat-acc">
            <span>Don't have an account?</span>
            <a href>Create account</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
