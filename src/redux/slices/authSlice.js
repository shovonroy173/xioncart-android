import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {setToken, setUserId} from '../reducers/authReducer';

export const authSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://xioncart.net/api/v1/frontend'}),
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setToken(data?.token));
          dispatch(setUserId(data?.user?._id));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    register: builder.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authSlice;
