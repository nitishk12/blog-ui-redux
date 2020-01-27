const axios = require('axios')

export const setComment = (comment) => {
    return { type: 'SHOW_COMMENT', payload: comment }
}

export const startGetComment = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                const comments = response.data
                console.log(comments)
                dispatch(setComment(comments))
            })
    }
}