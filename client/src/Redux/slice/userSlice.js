import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({

    name: 'userSlice',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null;
        }
    }

})


export const { login, logout } = userSlice.actions;

export  default userSlice.reducer