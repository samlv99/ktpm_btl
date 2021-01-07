import userApi from '../../api/userApi';
import StorageKey from '../../constants/storage-keys';

import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';

export const register = createAsyncThunk(
    '/auth/signup',
    async (payload) => {
        const data = await userApi.register(payload);

        // localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem(StorageKey.USER, JSON.stringify(data.newUser));

        return data.newUser;
    }
);

export const login = createAsyncThunk(
    '/auth/signin',
    async (payload) => {
        const data = await userApi.login(payload);

        console.log(data);

        localStorage.setItem(StorageKey.TOKEN, data.access_token);
        localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));

        console.log(localStorage.getItem(StorageKey.TOKEN));
        return data.user;
    }
);

export const getUser = createAsyncThunk(
    '/auth/',
    async (payload) => {
        const user = await userApi.getUser();
        return user;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKey.USER)) || {},
        setting: {},
    },
    reducers: {
        logout(state) {
            localStorage.removeItem(StorageKey.TOKEN);
            localStorage.removeItem(StorageKey.USER);

            state.current = {};
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
});

const {
    reducer,
    actions
} = userSlice;

export const {logout} = actions;

export default reducer;