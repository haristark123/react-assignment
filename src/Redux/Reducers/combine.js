import {combineReducers} from 'redux';
import { postsReducer } from './postsReducer';
const reducers=combineReducers({
    allPosts:postsReducer,
})

export default reducers