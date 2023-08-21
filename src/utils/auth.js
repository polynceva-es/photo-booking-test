const BASE_URL = 'http://localhost:2999'; //my adress
const HEADERS = {'Content-Type': 'application/json'};

function getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.json());
    }
    return res.json();
}
export function register(values) {
  return fetch (`${BASE_URL}/signup`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({name: values.name, surname: values.surname, email: values.email, password: values.password })
  })
  .then(res=> getResponseData(res))
}

export function login(values) {
  return fetch (`${BASE_URL}/signin`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({email: values.email, password: values.password })
  })
  .then(res=> getResponseData(res))
  .then(res=> {localStorage.setItem('token', res.token)})
}

export function loginGoogle(param) {
    return fetch (`${BASE_URL}/signin/google`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({eccses_token: param })
    })
    .then(res=> getResponseData(res))
    .then(res=> {localStorage.setItem('token', res.token)})
  }

  export function loginVk(param) {
    return fetch (`${BASE_URL}/signin/vk`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({code: param })
    })
    .then(res=> getResponseData(res))
    .then(res=> {localStorage.setItem('token', res.token)})
  }

  export function resetPassword(email) {
    return fetch (`${BASE_URL}////???`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({email: email })
      })
      .then(res=> getResponseData(res))
      .then(res=> {console.log(res)})
  }

export function checkToken(jwt) {
  return fetch (`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {...HEADERS, 'Authorization': `Bearer ${jwt}`}
  })
  .then(res=> getResponseData(res))
}