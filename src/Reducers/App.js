const initialState = {
  showLoading: false,
  notifications: {},
}

const App = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SHOW_SNACKBAR': {
      const { id, key, message, variant } = payload
      var isExit = false
      for (let v in state.notifications) {
        if (state.notifications[v].id === id) {
          isExit = true
        }
      }

      if (!isExit) {
        return {
          ...state,
          notifications: {
            ...state.notifications,
            [key]: {
              id,
              key,
              message,
              variant,
            },
          },
        }
      }
      return state
    }
    case 'HIDE_SNACKBAR': {
      const newNotfi = { ...state.notifications }
      delete newNotfi[payload]
      return {
        ...state,
        notifications: newNotfi,
      }
    }
    case 'SHOW_LOADING': {
      return {
        ...state,
        showLoading: payload,
      }
    }
    case 'HIDE_LOADING': {
      return {
        ...state,
        showLoading: payload,
      }
    }
    default:
      return state
  }
}

export default App
