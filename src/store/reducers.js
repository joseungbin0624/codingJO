import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import eventReducer from './eventReducer';
import feedbackReducer from './feedbackReducer';
import forumReducer from './forumReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  course: courseReducer,
  event: eventReducer,
  feedback: feedbackReducer,
  forum: forumReducer,
  user: userReducer,
});

export default rootReducer;
