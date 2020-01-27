import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/postReducer'
import commentsReducer from '../reducers/commentsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(combineReducers({
        users: userReducer,
        posts: postReducer,
        comments: commentsReducer
    }), composeEnhancers(applyMiddleware(thunk)))
    return store
}
export default configureStore