import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    project: []
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        // actions
        getProjects: state => {
            state.loading = true
        },
        getProjectsSuccess: (state, { payload }) => {
            state.project = payload
        },
        getProjectsFailure: state => {
            state.loading = false
        },
    },
});


// export
export const { getProjects, getProjectsSuccess, getProjectsFailure } = projectSlice.actions;
export const getAllProjects = (state) => state.project;

export default projectSlice.reducer;