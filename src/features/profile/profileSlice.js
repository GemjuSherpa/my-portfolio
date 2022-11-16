import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {}
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // actions
        getProfiles: (state, {payload}) => {
            state.profile = payload
        }
    },
});

// export
export const {getProfiles} = profileSlice.actions;
export const getAllProfiles = (state) => state.profile.profile;
export default profileSlice.reducer;