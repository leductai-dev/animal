export const enqueueSnackbarAction = (notification) => {
  return {
    type: 'SHOW_SNACKBAR',
    payload: {
      id: notification.id,
      key: notification.key || new Date().getTime() + Math.random(),
      message: notification.message,
      variant: notification.variant || 'success',
    },
  }
}

export const removeSnackbar = (key) => ({
  type: 'HIDE_SNACKBAR',
  payload: key,
})

export const showLoading = (value) => ({
  type: 'SHOW_LOADING',
  payload: value,
})
export const hideLoading = (value) => ({
  type: 'SHOW_LOADING',
  payload: value,
})
