const initialStatePosts = []
const postReducer = (state = initialStatePosts, action) => {
    switch (action.type) {
        case 'SHOW_POST': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default postReducer