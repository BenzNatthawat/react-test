export const checkLogin = (username: string, password: string) => {
  if (username === 'admin' && password === '123456') {
    console.log('true')
    return {
      messages: 'success',
      token: 'token_123456'
    }
  } else {
    console.log('false')
    return {
      messages: 'fail'
    }
  }
}
