import {createSlice} from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userId: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    logout: (state, action) => {
      state.token = null;
      state.userId = null;
    },
  },
});

export const {setToken, setUserId, logout} = authReducer.actions;
export default authReducer.reducer;
