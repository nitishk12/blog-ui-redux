const initialCommentState = []
const commentsReducer = (state = initialCommentState, action) => {
    switch (action.type) {
        case 'SHOW_COMMENT': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default commentsReducer