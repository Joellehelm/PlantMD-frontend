import * as action from './actionTypes'

export const login = (user, navigate) => dispatch => {

  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(r => r.json())
    .then(response => {
      if (response.user) {
        dispatch({ type: action.LOGIN, payload: response })
        localStorage.setItem('token', response.jwt)
        navigate('/home')
      } else {
        // TODO
        // handle error
        // dispatch({ type: action.WRONG_LOGIN, })
      }
    }).catch(err => console.log(err))

};




// export const autoLogin = () => dispatch => {
//   return fetch(`${process.env.REACT_APP_API_ENDPOINT}/auto_login`, {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Authorization": `JWT ${localStorage.getItem('token')}`,
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     }
//   })
//     .then(r => r.json())
//     .then(response => {
//       if (response.user) {
//         dispatch({ type: action.AUTO_LOGIN, payload: response })
//       }
//     })
// }