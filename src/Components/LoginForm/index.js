import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { enqueueSnackbarAction } from 'Actions/App'
import { useHistory } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {userLoginFetch} from 'Actions/Auth'
import * as yup from 'yup'

function LoginForm({location}) {
	const history = useHistory()
  const dispatch = useDispatch()
 const timeOut = useRef(null)
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.number().positive().integer().required(),
  })

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = (data) => {
	dispatch(userLoginFetch(data,()=>{
    history.replace(location)
  })
  )
  }
  const handleValidate = async (e) => {
    await trigger(e.target.name)
	
  }
  const handelShowErr = (msg,field) => {
		dispatch(
			enqueueSnackbarAction({
			  id: field,
			  message: msg,
			  key: new Date().getTime() + Math.random(),
			  variant: 'warning',
			}),
		  )
   
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-login">
      <Controller
        name="username"
        control={control}
        render={({ field, formState }) => {
          return (
            <div className="form-group">
              <input
                {...field}
                onBlur={handleValidate}
                name="username"
                type="text"
                placeholder="username"
              />
              <label htmlFor="login" className="ip-title">
                User name or Email
              </label>
			  { errors.username && handelShowErr(errors.username.message,"username")}
            </div>
          )
        }}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => {
          return (
            <div className="form-group">
              <input
                {...field}
                onBlur={handleValidate}
                name="password"
                type="text"
                placeholder="password"
              />
              <label htmlFor="login" className="ip-title">
                Passwords
              </label>
			  { errors.password && handelShowErr(errors.password.message,"password")}
            </div>
          )
        }}
      />

      <div className="forgot-pw">
        <a className="forgot-pw" href>
          Forgot passwords?
        </a>
      </div>
      <button className="btn-submit" type="submit">
        Sign in
      </button>
    </form>
  )
}

export default LoginForm
