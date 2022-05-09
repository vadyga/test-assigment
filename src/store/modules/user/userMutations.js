export default {
  SET_TOKEN: (state, payload) => {
    if (payload) {
      state.token = payload
      localStorage.setItem('token', payload)
    } else if (localStorage.getItem('token')) {
      state.token = localStorage.getItem('token')
    }
  }
}
