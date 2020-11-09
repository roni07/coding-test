import {createSlice} from "@reduxjs/toolkit";

const filesSlice = createSlice({
    name: "Files",
    initialState: {
        files: []
    },
    reducers: {
        fileAdded: (state, action) => {
            state.files.push(action.payload);
        },
        fileRemoved: (state, action) => {
            state.files.splice(action.payload, 1);
        }
    }
});

export const {fileAdded, fileRemoved} = filesSlice.actions;
export default filesSlice.reducer;
