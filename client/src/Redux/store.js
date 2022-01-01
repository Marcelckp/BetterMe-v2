import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slice/userSlice';

export const store = configureStore({

    reducer: {
        user: userReducer,
    },

})