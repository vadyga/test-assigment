// import api from './api'

// const URLS = {
//   login: '/login'
// }

export const login = (config = {}) => {
  /*
    not mock:

    return api.post(URLS.login, {
        ...config
    })

   */
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        access_token: 'test'
      })
    }, 800)
  })
}
