const axios = require('axios')

export const setPost = (posts) => {
    return { type: 'SHOW_POST', payload: posts }
}

export const startGetPost = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const posts = response.data
                console.log(posts)
                dispatch(setPost(posts))
            })
    }
}