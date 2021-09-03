const initialState = {
  currentUser: {},
}

function userInfo(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, currentUser: action.payload }
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} }
    default:
      return state
  }
}
export default userInfo
