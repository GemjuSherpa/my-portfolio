import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/profileSlice.js';
import projectReducer from '../features/project/projectSlice';


export const store = configureStore({
    // reducers
    reducer: {
        profile: profileReducer,
        project: projectReducer,
    },
});