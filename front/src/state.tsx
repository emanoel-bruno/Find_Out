interface Main {
    name: string,
    url: string,
    api: string,
    content: string
}

interface User {
    name: string,
    auth_token: string,
    user_type: string
}

export interface State {
    main:Main,
    user:User
}

const defaultState:State={
    main: {
        name: "Find Out",
        url: "localhost",
        api: "/back/api",
        content: "HOME"
    },
    user: {
        name: "",
        auth_token: "",
        user_type: ""
    },

}

export default defaultState;