const axios = require('axios')

export const setUser = (users) => {
    return { type: 'SET_USER', payload: users }
}

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data
                console.log(users)
                dispatch(setUser(users))
            })
    }
}