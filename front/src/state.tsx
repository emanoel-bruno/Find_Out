interface Main {
  api: string
  content: string
  name: string
  url: string
}

interface User {
  authToken: string
  name: string
  userType: string
}

export interface State {
  main: Main
  user: User
}

const defaultState: State = {
  main: {
    api: '/back/api',
    content: 'HOME',
    name: 'Find Out',
    url: 'localhost'
  },
  user: {
    authToken: '',
    name: '',
    userType: ''
  }
}

export default defaultState
