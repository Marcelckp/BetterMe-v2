import { createSlice } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

let biscuit;

if (Cookie.get('user')) biscuit = JSON.parse(Cookie.get('user'));

export const userSlice = createSlice({

    name: 'userSlice',
    initialState: {
        user: biscuit || null
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