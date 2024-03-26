import { configureStore } from '@reduxjs/toolkit';
import achievementsReducer from './achievementsSlice';
import analyticsReducer from './analyticsSlice';
import authReducer from './authSlice';
import categoriesReducer from './categoriesSlice';
import chatReducer from './chatSlice';
import collaborationReducer from './collaborationSlice';
import courseReducer from './courseSlice';
import dashboardReducer from './dashboardSlice';
import eventReducer from './eventSlice';
import feedbackReducer from './feedbackSlice';
import forumReducer from './forumSlice';
import notificationReducer from './notificationSlice';
import reviewReducer from './reviewSlice';
import searchReducer from './searchSlice';
import supportReducer from './supportSlice';
import tutorialReducer from './tutorialSlice';
import userReducer from './userSlice';
import visualizationReducer from './visualizationSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    achievements: achievementsReducer,
    analytics: analyticsReducer,
    auth: authReducer,
    categories: categoriesReducer,
    chat: chatReducer,
    collaboration: collaborationReducer,
    course: courseReducer,
    dashboard: dashboardReducer,
    event: eventReducer,
    feedback: feedbackReducer,
    forum: forumReducer,
    notification: notificationReducer,
    review: reviewReducer,
    search: searchReducer,
    support: supportReducer,
    tutorial: tutorialReducer,
    user: userReducer,
    visualization: visualizationReducer,
    favorites: favoritesReducer
  },
});
