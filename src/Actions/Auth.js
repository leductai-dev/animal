import authService from 'Services/AuthorServices'
import { showLoading, hideLoading } from './App'
import {PATH_NAME} from 'Constants/Config'
export const userPostFetch = (user) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
        } else {
          localStorage.setItem('token', data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const userLoginFetch = (user,cb) => {
  return (dispatch) => {
    /*    return fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ user }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.message) {
          } else {
            localStorage.setItem('token', data.jwt)
            dispatch(loginUser(data.user))
          }
        }) */
    //fake send request login user
    dispatch(showLoading(true))

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = {
          userInfo: {
            userId: 1101,
            username: 'taiducle',
            role: 'Guest',
          },
          accessToken: 2121255645645645646545646,
        }
        resolve(userData)
      }, 1000)
    })
      .then((data) => {
        authService.setSession('accessToken', data.accessToken)
        dispatch(loginUser(data.userInfo))
        dispatch(hideLoading(false))
        cb()
      })
      .catch((err) => {
        console.log(err)
        dispatch(hideLoading(false))
      })
  }
}

export const getProfileFetch = () => {
  return (dispatch) => {
    const token = localStorage.token
    if (token) {
      // return fetch("http://localhost:3000/api/v1/profile", {
      //   method: "GET",
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //     'Authorization': `Bearer ${token}`
      //   }
      // })
      //   .then(resp => resp.json())
      //   .then(data => {
      //     if (data.message) {
      //       localStorage.removeItem("token")
      //     } else {
      //       dispatch(loginUser(data.user))
      //     }
      //   })

      //fake callApi get user infomations.
      return new Promise((resole, rej) => {
        setTimeout(() => {
          const userInfo = {
            userId: 1101,
            username: 'taiducle',
            role: 'Guest',
          }
          resole(userInfo)
        }, 200)
      }).then((data) => {
        dispatch(loginUser(data))
      })
    }
  }
}

const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj,
})

export const logoutUser = () => {
  authService.logOut()
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT_USER',
    })
  }
}
